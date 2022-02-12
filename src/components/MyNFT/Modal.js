import React, { useState, useRef, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { getSocialfi } from "../../store/actions/connectWallet";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useMoralis, useMoralisFile } from "react-moralis";

export default function Modal(props) {
  const [currentTypeCoin, setCurrentTypeCoin] = useState("USDT");
  const [price, setPrice] = useState(null);
  const [originNFT, setOriginNFT] = useState(null);
  const contract = useSelector((state) => state.wallet.contract);
  const { Moralis } = useMoralis();
  const account = useSelector((state) => state.wallet.account);
  const imgRef = useRef(props.nft.image);
  const { saveFile } = useMoralisFile();
  console.log(props);
  useEffect(() => {
    async function fetchData() {
      props.arrObjCollection.map((item) => {
        if (+item.idOwner === +props.nft.idOwner) {
          setOriginNFT(item);
        }
      });
    }
  console.log(originNFT)
    return fetchData();
  }, []);

  const renderNFT = () => {
    console.log(originNFT)
    originNFT && originNFT.length > 0 &&  originNFT.map((item) => {
      console.log(item);
      return (
        <div id="frament">
          <img
            src={props.nft.image}
            alt={props.nft.image}
            crossOrigin="anonymous"
            ref={imgRef}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "3",
            }}
          />
        </div>
      );
    });
  };

  const addDinoMarket = async (index) => {
    let value = price * Math.pow(10, 16);
    await props.contract.methods
      .listing(index, value.toString(), currentTypeCoin)
      .send({
        from: props.account,
        gas: 3000000,
      })
      .then(toast.success("Thêm khủng long vào market thành công!!!"));
  };
  console.log(props.nft.image, props.nft.image.width);

  const actionFragment = async () => {
    await props.contract.methods
      .fragmentNFT(4, +props.nft.index)
      .send(
        { from: account, gas: 1000000, value: 40000000000000000 },
        function (err, res) {
          if (res) {
            console.log(`Đã trả phí`);
          }
        }
      );
    let image = new Image();
    image.src = props.nft.image;

    let imagePieces = [];
    var numColsToCut = 2;
    var numRowsToCut = 2;
    var widthOfOnePiece = image.width / 2;
    var heightOfOnePiece = image.width / 2;
    console.log(props.contract);
    for (let x = 0; x < numColsToCut; ++x) {
      for (let y = 0; y < numRowsToCut; ++y) {
        let canvas = document.createElement("canvas");
        canvas.width = widthOfOnePiece / numColsToCut;
        canvas.height = heightOfOnePiece / numRowsToCut;
        let context = canvas.getContext("2d");
        context.drawImage(
          imgRef.current,
          y * heightOfOnePiece,
          x * widthOfOnePiece,
          widthOfOnePiece,
          heightOfOnePiece,
          0,
          0,
          canvas.width,
          canvas.height
        );
        imagePieces.push(canvas.toDataURL());
      }
    }
    for (let i = 0; i < imagePieces.length; i++) {
      console.log(imagePieces[i]);
      const cutImages = await new saveFile(
        "mouth.png",
        { base64: imagePieces[i] },
        { saveIPFS: true }
      );
      console.log("cutImages", cutImages._ipfs);
      console.log("Hình phân ảnh", cutImages);
      let index = await contract.methods.currentIndex().call();
      // composite = await axios.post("http://localhost:5000/composite", {
      //   result: result,
      //   id: index,
      // });
      // Create Metadata
      let name = props.nft.name + "-" + i;
      console.log(name);

      const metadata = {
        name,
        description:
          "It was unbelievable, even with us couldn't believe it. Substance to each VND!",
        image: cutImages._ipfs,
      };
      console.log(metadata);
      const nftFileMetadataFile = new Moralis.File("metadata.json", {
        base64: btoa(JSON.stringify(metadata)),
      });
      await nftFileMetadataFile.saveIPFS();
      const nftFileMetadataFilePath = nftFileMetadataFile.ipfs();
      console.log("metadata", nftFileMetadataFilePath);
      await contract.methods
        .createNFTtoFragment(`${props.nft.name}-${i}`, nftFileMetadataFilePath)
        .send({ from: account, gas: 1000000 }, function (err, res) {
          if (res) {
            console.log(`Đã thêm ${props.nft.name}-${i}`);
          }
        });
    }
  };

  const removeDinoMarket = async (index) => {
    console.log(props.nft.price);
    await props.contract.methods
      .unListing(index)
      .send({
        from: props.account,
        gas: 3000000,
      })
      .then(toast.success("Xóa khủng long vào market thành công!!!"));
  };

  const actionMarket = async () => {
    if (props.nft.listing) {
      await removeDinoMarket(props.nft.index);
    } else {
      await addDinoMarket(props.nft.index);
    }
    let list = await props.contract.methods
      .getStechNFTByOwner(props.account)
      .call();
    props.dispatch(getSocialfi(list));
    props.setShowModal(false);
  };

  return props.nftIsFragment ? (
    <>
      <div className="meta__modal">
        <div className="meta__modal-header flex ">
          <h4>{props.nft.name}</h4>
          <AiFillCloseCircle
            className="header-icon"
            onClick={() => props.setShowModal(false)}
          />
        </div>
        <div
          className={
            "nftmake__body-mid-item  md:col-span-6   md:col-span-6  xl:col-span-4 col-span-12 col-span-12"
          }
          key={props.nft.id}
        >
          <div className="listDino">{renderNFT()}</div>
        </div>
        <div className="meta__modal-body-stake">
          <p>Phân mảnh</p>
          {!props.nft.listing && (
            <div className="flex ">
              <input
                type="text"
                name="price"
                className="input_price"
                value={price}
                placeholder="Số mảnh"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          )}

          <p className="btn-claim" onClick={() => actionFragment()}>
            Phân mảnh ngay
          </p>
        </div>
      </div>
      <div
        className="opacity-25 fixed inset-0 z-40 bg-black"
        onClick={() => props.setShowModal(false)}
      ></div>
    </>
  ) : (
    <>
      <div className="meta__modal">
        <div className="meta__modal-header flex ">
          <h4>{props.nft.name}</h4>
          <AiFillCloseCircle
            className="header-icon"
            onClick={() => props.setShowModal(false)}
          />
        </div>
        <div
          className={
            "nftmake__body-mid-item  md:col-span-6   md:col-span-6  xl:col-span-4 col-span-12 col-span-12"
          }
          key={props.nft.id}
        >
          <div className="listDino">
            <div>
              <img
                src={props.nft.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  zIndex: "3",
                }}
              />
            </div>
          </div>
        </div>
        <div className="meta__modal-body-stake">
          <div className="body-stake-header">
            {props.nft.listing && props.nft.price
              ? `Giá đang bán: ${Math.floor(
                  +props.nft.price / Math.pow(10, 16)
                )} ${props.nft.typeCoin}`
              : "Nhập giá:"}
          </div>
          {!props.nft.listing && (
            <div className="flex justify-between">
              <input
                type="text"
                name="price"
                className="input_price"
                value={price}
                placeholder="Nhập giá"
                onChange={(e) => setPrice(e.target.value)}
              />
              <div className=" mynft__btn-right-body">
                <span>Loại coin:</span>
                <select
                  name="select-profession"
                  id="select-profession"
                  value={currentTypeCoin}
                  onChange={(e) => setCurrentTypeCoin(e.target.value)}
                >
                  {props.sortCoin.map((item) => {
                    return (
                      <option className="option" value={item} key={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          )}

          <p className="btn-claim" onClick={() => actionMarket()}>
            {props.nft.listing ? "Ngưng bán" : "Bán ngay"}
          </p>
        </div>
      </div>
      <div
        className="opacity-25 fixed inset-0 z-40 bg-black"
        onClick={() => props.setShowModal(false)}
      ></div>
    </>
  );
}
