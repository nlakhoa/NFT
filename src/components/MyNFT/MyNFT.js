import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMoralis } from "react-moralis";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { getSocialfi } from "../../store/actions/connectWallet";
import Modal from "./Modal";

export default function MyNFT() {
  const [sort, setSort] = useState("Defi");
  const sortDefi = ["All", "Dino", "Meat", "Mystery Box"];
  const sortCoin = ["USDT", "BNB", "DSG", "BUSD"];
  const sortSocialfi = ["All", "Avatar", "Dravings boads"];
  const [sortCategory, setSortCategory] = useState("All");
  const [sortByCoin, setSortByCoin] = useState("All");
  const [Defi, setDefi] = useState([]);
  const [arrObjCollection,setArrObjCollection] = useState([])
  const [nftIsFragment,setNftIsFragment] = useState(false)
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const socialfiAccount = useSelector((state) => state.wallet.socialfiAccount);
  const account = useSelector((state) => state.wallet.account);
  const contract = useSelector((state) => state.wallet.contract);
  const web3 = useSelector((state) => state.wallet.web3);
  const [showModal, setShowModal] = useState(false);
  const [nft, setNFT] = useState(null);
  const { Moralis } = useMoralis();
  useEffect(() => {
    async function fetchData() {
      let list = await contract.methods.getStechNFTByOwner(account).call();
      console.log(list, account);
      const options = {
        address: account,
        chain: "rinkeby",
      };

      let nftOwners = await Moralis.Web3API.account.getNFTs(options);
      let arr = [];
      console.log(nftOwners);
      nftOwners.result.map((value) => {
        if (value.owner_of === account) {
          let item = {
            id: value.token_id,
            image: JSON.parse(value.metadata),
            name: value.name,
          };
          arr.push(item);
        }
      });
      let result = [];
      let collection = [];
      let arrCollection = [];
      let listOwner = [];
      if (list.length > 0 && arr.length > 0) {
        for (let i = 0; i < list.length; i++) {
          let index = arr.findIndex((value) => {
            return +list[i][2] === +value.id;
          });
          if (
            index !== -1 &&
            arr[index].image !== null &&
            arr[index].name === "StechNFT"
          ) {
            if (+list[i][9] !== +list[i][2]) {

              let currentIndex = listOwner.findIndex((item) => {
                return item === list[i][9];
              });
              if (currentIndex === -1) {
                listOwner.push(list[i][9]);
              }
              
              collection.push({
                name: list[i][0],
                dna: list[i][1],
                index: list[i][2],
                owner: list[i][3],
                ownerCreate: list[i][4],
                price: list[i][5],
                typeCoin: list[i][6],
                listing: list[i][7],
                idOwner: list[i][9],
                fragments: list[i][10],
                indexFragment: list[i][11],
                image: arr[index].image.image,
                isFragment: true,
              });
              result.push({
                name: list[i][0],
                dna: list[i][1],
                index: list[i][2],
                owner: list[i][3],
                ownerCreate: list[i][4],
                price: list[i][5],
                typeCoin: list[i][6],
                listing: list[i][7],
                idOwner: list[i][9],
                fragments: list[i][10],
                indexFragment: list[i][11],
                image: arr[index].image.image,
                isFragment: true,
              });
            }
            else{
              result.push({
                name: list[i][0],
                dna: list[i][1],
                index: list[i][2],
                owner: list[i][3],
                ownerCreate: list[i][4],
                price: list[i][5],
                typeCoin: list[i][6],
                listing: list[i][7],
                idOwner: list[i][9],
                fragments: list[i][10],
                indexFragment: list[i][11],
                image: arr[index].image.image,
                isFragment: false,
              });
            }
          }
        }
      }

      listOwner.map((item) => {
        let arr = [];
        let fragments = 1;
        let listFragment = []
        collection.map((value) => {
          if (+value.idOwner === +item) {
            arr.push(value.indexFragment);
            listFragment.push(value)
            fragments = value.fragments
          }
        });
        arrCollection.push({
          idOwner: item,
          arr,
          listFragment,
          fragments
        });
      });
      setArrObjCollection(arrCollection)
      dispatch(getSocialfi(result));
    }
    if (account) {
      return fetchData();
    }
  }, []);

  const handleSort = (e) => {
    setSortCategory(e.target.value);
  };
  const handleByCoin = (e) => {
    setSortByCoin(e.target.value);
  };

  const imageTypeCoin = (type) => {
    console.log("type", type);
    if (type === "BNB") {
      return (
        <img
          src="https://dsgmetaverse.com/images/tokens/BNB.png"
          alt="	https://dsgmetaverse.com/images/tokens/BNB.png"
          className="icon-img"
        />
      );
    }
    if (type === "DSG") {
      return (
        <img
          src="https://dsgmetaverse.com/images/tokens/DSG.png"
          alt="https://dsgmetaverse.com/images/tokens/DSG.png"
          className="icon-img"
        />
      );
    }
    if (type === "USDT") {
      return (
        <img
          src="https://dsgmetaverse.com/images/tokens/USDT.svg"
          alt="https://dsgmetaverse.com/images/tokens/USDT.svg"
          className="icon-img"
        />
      );
    }
    if (type === "BUSD") {
      return (
        <img
          src="https://dsgmetaverse.com/images/tokens/BUSD.svg"
          alt="https://dsgmetaverse.com/images/tokens/BUSD.svg"
          className="icon-img"
        />
      );
    }
  };

  const sortListByCoin = () => {
    // Sort dựa vào danh sách, loại trong danh sách và kiểu coin
    if (sort === "Defi") {
      if (Defi.length > 0) {
        return Defi.map((item, index) => {
          if (sortCategory === "All" && sortByCoin === "All") {
            return (
              <div
                className={
                  "nftmake__body-mid-item  md:col-span-6   md:col-span-6  xl:col-span-4 col-span-12 col-span-12"
                }
                key={item.id}
              >
                <div
                  className="listDino"
                  style={{ position: "relative", height: "400px" }}
                >
                  <div>
                    <img
                      src={item.itemBody}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "2",
                      }}
                    />

                    <img
                      src={item.itemBg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "1",
                      }}
                    />
                    <img
                      src={item.itemClothes}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "3",
                      }}
                    />
                    <img
                      src={item.itemEye}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "3",
                      }}
                    />
                    <img
                      src={item.itemHead}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "3",
                      }}
                    />
                    <img
                      src={item.itemMouth}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "3",
                      }}
                    />
                    <img
                      src={item.itemStuff}
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
                <div class="listDino__body">
                  <div class="font-bold text-xl mb-2">{item.name}</div>
                  <p>
                    <b>Mã định danh :</b>
                  </p>
                  <p class="text-base flex justify-between">
                    <p className="break-words">
                      {`${item.hash.slice(0, 6)}...${item.hash.slice(
                        item.hash.length - 6,
                        item.hash.length
                      )}`}
                    </p>
                    <p className="btn-buy">Bán</p>
                  </p>
                </div>
              </div>
            );
          }
          if (sortCategory !== "All" && sortByCoin === "All") {
            if (item.category === sortCategory) {
              return (
                <div
                  className={
                    "nftmake__body-mid-item  md:col-span-6   md:col-span-6  xl:col-span-4 col-span-12 col-span-12"
                  }
                  key={item.id}
                >
                  <div
                    className="listDino"
                    style={{ position: "relative", height: "400px" }}
                  >
                    <div>
                      <img
                        src={item.itemBody}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "2",
                        }}
                      />

                      <img
                        src={item.itemBg}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "1",
                        }}
                      />
                      <img
                        src={item.itemClothes}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemEye}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemHead}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemMouth}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemStuff}
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
                  <div class="listDino__body">
                    <div class="font-bold text-xl mb-2">{item.name}</div>
                    <p>
                      <b>Mã định danh :</b>
                    </p>
                    <p class="text-base flex justify-between">
                      <p className="break-words">
                        {`${item.hash.slice(0, 6)}...${item.hash.slice(
                          item.hash.length - 6,
                          item.hash.length
                        )}`}
                      </p>
                      <p className="btn-buy">Bán</p>
                    </p>
                  </div>
                </div>
              );
            }
          }
          if (sortCategory === "All" && sortByCoin !== "All") {
            if (sortByCoin === item.coin) {
              return (
                <div
                  className={
                    "nftmake__body-mid-item  md:col-span-6   md:col-span-6  xl:col-span-4 col-span-12 col-span-12"
                  }
                  key={item.id}
                >
                  <div
                    className="listDino"
                    style={{ position: "relative", height: "400px" }}
                  >
                    <div>
                      <img
                        src={item.itemBody}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "2",
                        }}
                      />

                      <img
                        src={item.itemBg}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "1",
                        }}
                      />
                      <img
                        src={item.itemClothes}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemEye}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemHead}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemMouth}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemStuff}
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
                  <div class="listDino__body">
                    <div class="font-bold text-xl mb-2">{item.name}</div>
                    <p>
                      <b>Mã định danh :</b>
                    </p>
                    <p class="text-base flex justify-between">
                      <p className="break-words">
                        {`${item.hash.slice(0, 6)}...${item.hash.slice(
                          item.hash.length - 6,
                          item.hash.length
                        )}`}
                      </p>
                      <p className="btn-buy">Bán</p>
                    </p>
                  </div>
                </div>
              );
            }
          } else {
            if (item.category === sortCategory) {
              if (sortByCoin === item.coin) {
                return (
                  <div
                    className={
                      "nftmake__body-mid-item  md:col-span-6   md:col-span-6  xl:col-span-4 col-span-12 col-span-12"
                    }
                    key={item.id}
                  >
                    <div
                      className="listDino"
                      style={{ position: "relative", height: "400px" }}
                    >
                      <div>
                        <img
                          src={item.itemBody}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "2",
                          }}
                        />

                        <img
                          src={item.itemBg}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "1",
                          }}
                        />
                        <img
                          src={item.itemClothes}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemEye}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemHead}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemMouth}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemStuff}
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
                    <div class="listDino__body">
                      <div class="font-bold text-xl mb-2">{item.name}</div>
                      <p>
                        <b>Mã định danh :</b>
                      </p>
                      <p class="text-base flex justify-between">
                        <p className="break-words">
                          {`${item.hash.slice(0, 6)}...${item.hash.slice(
                            item.hash.length - 6,
                            item.hash.length
                          )}`}
                        </p>
                        <p className="btn-buy">Bán</p>
                      </p>
                    </div>
                  </div>
                );
              }
            }
          }
        });
      } else {
        return (
          <div className="no_data">
            <img src="https://dsgmetaverse.com/images/no-data.png" alt="" />
            <p>No Data</p>
          </div>
        );
      }
    }
    if (sort === "Socialfi") {
      if (socialfiAccount.length > 0) {
        return socialfiAccount.map((item, index) => {
          if (sortCategory === "All" && sortByCoin === "All") {
            console.log(item);
            return (
              <div
                className={
                  " nftmake__body-mid-item  md:col-span-6   md:col-span-6  xl:col-span-4 col-span-12 col-span-12"
                }
                key={item.id}
              >
                <div
                  className="listDino"
                  style={{ position: "relative", height: "400px" }}
                >
                  <div>
                    <img
                      src={item.image}
                      alt={item.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "2",
                      }}
                    />
                  </div>
                </div>
                <div class="listDino__body">
                  <div class="font-bold text-xl mb-2">{item.name}</div>

                  <div className="flex">
                    <b className="mr-2">Giá:</b>
                    <div className="flex">
                      <p>{web3.utils.fromWei(item.price, "ether") && web3.utils.fromWei(item.price, "ether") * 100}</p>
                      {imageTypeCoin(item.typeCoin)}
                    </div>
                  </div>
                  <b>Trạng thái</b>
                  <div className="flex justify-around">
                    <p
                      className="btn-buy text-center"
                      onClick={() => {
                        setNFT(item);
                        setShowModal(true);
                      }}
                    >
                      {item.listing ? "Đang bán..." : "Bán"}
                    </p>
                    <p
                      className="btn-buy text-center"
                      onClick={() => {
                        setNFT(item);
                        setNftIsFragment(false)
                        setShowModal(true);
                      }}
                    >
                      Phân mảnh
                    </p>
                  </div>
                    {item.isFragment && <p onClick={()=>{
                      setNFT(item);
                      setNftIsFragment(true)
                      setShowModal(true);

                    }}  className="btn-fragment text-center">Mảnh</p>}
                </div>
              </div>
            );
          }
          if (sortCategory !== "All" && sortByCoin === "All") {
            if (item.typeCoin === sortCategory) {
              return (
                <div className={"nftmake__body-mid-item "} key={item.index}>
                  <div
                    className="listDino "
                    style={{ position: "relative", height: "400px" }}
                  >
                    <img
                      src={item.itemBody}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "2",
                      }}
                    />

                    <img
                      src={item.itemBg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "1",
                      }}
                    />
                    <img
                      src={item.itemClothes}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "3",
                      }}
                    />
                    <img
                      src={item.itemEye}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "3",
                      }}
                    />
                    <img
                      src={item.itemHead}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "3",
                      }}
                    />
                    <img
                      src={item.itemMouth}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "3",
                      }}
                    />
                    <img
                      src={item.itemStuff}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: "3",
                      }}
                    />
                  </div>
                  <div class="pt-6 pr-6 pl-6 ">
                    <div class="font-bold text-xl mb-2">{item.name}</div>
                    <p class="text-gray-700 text-base">
                      <h3>
                        <b>Tấn công :</b> {item.attack}
                      </h3>
                      <h3>
                        <b>Phòng thủ :</b> {item.defense}
                      </h3>
                      <h3>
                        <b>Độ hiếm :</b> {item.rare}
                      </h3>
                      <h3>
                        <b>Chuỗi gen :</b> {item.dna}
                      </h3>
                      <h3>
                        <p>
                          <b>Mã định danh :</b>
                        </p>
                        <p className="break-words">{item.hash}</p>
                      </h3>
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2 text-center">
                    <p>Địa chỉ người nhận:</p>
                    <input
                      type="text"
                      className=" w-full py-2 px-4 rounded mt-2 mb-2"
                      name="address"
                      onChange={(e) => {}}
                    />
                    <button className=" bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Chuyển
                    </button>
                  </div>
                </div>
              );
            }
          }
          if (sortCategory === "All" && sortByCoin !== "All") {
            if (sortByCoin === item.typeCoin) {
              return (
                <div
                  className={
                    "nftmake__body-mid-item  md:col-span-6   md:col-span-6  xl:col-span-4 col-span-12 col-span-12"
                  }
                  key={item.id}
                >
                  <div
                    className="listDino"
                    style={{ position: "relative", height: "400px" }}
                  >
                    <div>
                      <img
                        src={item.itemBody}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "2",
                        }}
                      />

                      <img
                        src={item.itemBg}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "1",
                        }}
                      />
                      <img
                        src={item.itemClothes}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemEye}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemHead}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemMouth}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                      <img
                        src={item.itemStuff}
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
                  <div class="listDino__body">
                    <div class="font-bold text-xl mb-2">{item.name}</div>
                    <p>
                      <b>Mã định danh :</b>
                    </p>
                    <p class="text-base flex justify-between">
                      <p className="break-words">
                        {`${item.hash.slice(0, 6)}...${item.hash.slice(
                          item.hash.length - 6,
                          item.hash.length
                        )}`}
                      </p>
                      <p className="btn-buy">Bán</p>
                    </p>
                  </div>
                </div>
              );
            }
          } else {
            if (item.category === sortCategory) {
              if (sortByCoin === item.coin) {
                return (
                  <div
                    className={
                      "nftmake__body-mid-item  md:col-span-6   md:col-span-6  xl:col-span-4 col-span-12 col-span-12"
                    }
                    key={item.id}
                  >
                    <div
                      className="listDino"
                      style={{ position: "relative", height: "400px" }}
                    >
                      <div>
                        <img
                          src={item.itemBody}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "2",
                          }}
                        />

                        <img
                          src={item.itemBg}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "1",
                          }}
                        />
                        <img
                          src={item.itemClothes}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemEye}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemHead}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemMouth}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemStuff}
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
                    <div class="listDino__body">
                      <div class="font-bold text-xl mb-2">{item.name}</div>
                      <p>
                        <b>Mã định danh :</b>
                      </p>
                      <p class="text-base flex justify-between">
                        <p className="break-words">
                          {`${item.hash.slice(0, 6)}...${item.hash.slice(
                            item.hash.length - 6,
                            item.hash.length
                          )}`}
                        </p>
                        <p className="btn-buy">Bán</p>
                      </p>
                    </div>
                  </div>
                );
              }
            }
          }
        });
      } else {
        return (
          <div className="no_data">
            <img src="https://dsgmetaverse.com/images/no-data.png" alt="" />
            <p>No Data</p>
          </div>
        );
      }
    }
  };

  const MyNFT = styled.div`
    .meta__modal {
      max-width: 480px;
      max-height: 600px;
      border-radius: 12px;
      box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
      display: flex;
      flex-direction: column;
      padding: 18px;
      background-color: ${(props) => props.theme.bgItem};
      color: ${(props) => props.theme.textBody};
      z-index: 99999999999;
      position: fixed;
      right: calc(50% - 233px);
      top: calc(20% - 60px);
      min-width: 480px;
      .meta__modal-header {
        justify-content: space-between;
        font-weight: bold;
        border-bottom: 1px solid #ccc;
        padding-bottom: 8px;
        .header-icon {
          color: ${(props) => props.theme.borderBtn};
          font-size: 32px;
          cursor: pointer;
        }
        .header-icon:hover {
          opacity: 0.8;
        }
      }
      .listDino {
        position: relative;
        height: 300px;
        width: 300px;
        position: relative;
        margin: 0 auto;
      }
      .meta__modal-body-stake {
        padding-top: 12px;
        color: ${(props) => props.theme.textBody};
        font-size: 18px;
        span {
          margin-right: 6px;
          font-weight: bold;
        }
        .body-stake-header {
          font-weight: bold;
          margin-bottom: 12px;
        }
        .input_price {
          width: 236px;
          height: 46px;
          border-radius: 12px;
          font-size: 18px;
          color: black;
        }
        #select-profession {
          color: black;
          padding: 6px 36px 6px 12px;
          border-radius: 12px;
          font-size: 18px;
          line-height: 28px;
        }
        .btn-claim {
          color: black;
          border: 2px solid ${(props) => props.theme.borderBtn};
          background: ${(props) => props.theme.borderBtn};
          padding: 6px 12px;
          cursor: pointer;
          border-radius: 25px;
          margin: 12px auto 6px auto;
          max-width: 176px;
          font-size: 16px;
          text-align: center;
          font-weight: bold;
        }
        .modal__des {
          font-size: 18px;
          margin-bottom: 36px;
        }
      }
    }
    .mynft {
      width: 100%;
      background-color: ${(props) => props.theme.bgHeader};
      min-height: 100vh;
      overflow: hidden;
      color: ${(props) => props.theme.textBtn};
      .mynft__header {
        background-color: ${(props) => props.theme.bgBodyTop};
        padding: 16px 64px;
        border: 1px solid ${(props) => props.theme.bgBodyTop};
        .mynft__header-title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 16px;
          color: ${(props) => props.theme.textBody};
        }

        .mynft__btn {
          color: ${(props) => props.theme.te};
          font-size: 18px;
          font-family: 600;
          height: 41px;
          justify-content: space-between;
          margin-bottom: 24px;
          .mynft__btn-filter {
            background-color: ${(props) => props.theme.bgHeaderHover};
            padding: 0 0;
            display: flex;
            border-radius: 24px;

            justify-content: space-between;
            .btn {
              padding: 6px 24px;
              background-color: transparent;
              border-radius: 24px;
              cursor: pointer;
            }
            .active {
              background: ${(props) => props.theme.borderBtn};
              color: ${(props) => props.theme.textBody};
            }
          }
          .mynft__btn-right {
            z-index: 0;
            .select__filter {
            }
            .input__search {
              color: black;
            }
            /* ===== Horizontal Rule ===== */

            #select-profession {
              color: black;
              padding: 6px 36px 6px 12px;
              border-radius: 12px;
              font-size: 18px;
              line-height: 28px;
              .option {
                padding: 6px;
              }
              .option:hover {
                box-shadow: 0 0 10px 100px #000 inset;
              }
            }

            .mynft::before {
              position: absolute;
              content: "\f063";
              font-size: 2em;
              color: #fff;
              right: 20px;
              top: calc(50% - 0.5em);
            }

            .myprops.nft.active::before {
              transform: rotateX(-180deg);
            }

            .mynft__placeholder {
              display: block;
              font-size: 2.3em;
              color: #838e95;
              padding: 0.2em 0.5em;
              text-align: left;
              pointer-events: none;
              user-select: none;
              visibility: visible;
            }

            .mynft.active .mynft__placeholder {
              visibility: hidden;
            }

            .mynft__placeholder::before {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 0.2em 0.5em;
              content: attr(data-placeholder);
              visibility: hidden;
            }

            .mynft.active .mynft__placeholder::before {
              visibility: visible;
            }

            .mynft__box {
              position: absolute;
              top: calc(100% + 4px);
              left: -4px;
              display: none;
              list-style-type: none;
              text-align: left;
              font-size: 1em;
              background-color: #fff;
              box-sizing: border-box;
            }

            .mynft.active .mynft__box {
              display: block;
              animation: fadeInUp 500ms;
            }

            .mynft__box__options {
              display: list-item;
              font-size: 1.5em;
              color: #838e95;
              padding: 0.5em 1em;
              user-select: none;
            }

            .mynft__box__options::after {
              content: "\f00c";
              font-size: 0.5em;
              margin-left: 5px;
              display: none;
            }

            .mynft__box__options.selected::after {
              display: inline;
            }

            .mynft__box__options:hover {
              background-color: #ebedef;
            }

            /* ----- Select Box Black Panther ----- */
            .mynft {
              border-bottom: 4px solid rgba(0, 0, 0, 0.3);
            }

            .mynft__btn-right-body {
              z-index: 3;
              margin-right: 12px;
              word-wrap: break-word;
            }

            .mynft__btn-right-search {
              width: 136px;
              border-radius: 12px;
              color: black;
            }

            /* ----- Select Box Superman ----- */

            /* ===== Keyframes ===== */
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translate3d(0, 20px, 0);
              }

              to {
                opacity: 1;
                transform: none;
              }
            }

            @keyframes fadeOut {
              from {
                opacity: 1;
              }

              to {
                opacity: 0;
              }
            }
            .mynft__btn-right-search {
              border-radius: 12px;
              width: 160px;
              font-size: 14px;
            }
          }
        }
      }
      .nftmake__body-mid {
        margin: 24px 76px;
        .nftmake__body-mid-items {
          .nftmake__body-mid-item {
            background-color: ${(props) => props.theme.bgBodyTop};
            border-radius: 8px;
            box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
            cursor: pointer;
            position: relative;
            padding: 16px;
            color: ${(props) => props.theme.textBody};

            .listDino {
              color: ${(props) => props.theme.textBody};
              img {
                max-width: 100%;
                max-height: 100%;
              }
              .nftmake__body-mid-name {
                color: white;
                font-size: 18px;
                img {
                  width: 24px;
                  height: 24px;
                  margin: auto 0;
                  margin-right: 12px;
                }
                p {
                  padding-top: 12px;
                }
                span {
                  color: ${(props) => props.theme.borderBtn};
                }
              }
              .icon-checked {
                position: absolute;
                top: 8px;
                right: 8px;
                color: ${(props) => props.theme.lightGreen};
                display: none;
              }
            }
            .listDino__body {
              .btn-buy {
                color: white;
                border: 2px solid ${(props) => props.theme.borderBtn};
                background: ${(props) => props.theme.borderBtn};
                padding: 3px 24px;
                cursor: pointer;
                border-radius: 25px;
                height: 36px;
                line-height: 28px;
                margin: 12px 12px 0 12px;
                font-weight: 600;
                font-size: 18px;
                position: relative;
              }
              .btn-fragment{
                color: white;
                border: 2px solid ${(props) => props.theme.borderBtn};
                background: ${(props) => props.theme.borderBtn};
                padding: 3px 24px;
                cursor: pointer;
                border-radius: 25px;
                height: 36px;
                line-height: 28px;
                margin: 12px 12px 0 12px;
                font-weight: 600;
                font-size: 18px;
                position: relative;
                background: skyblue
              }
              b {
                margin-bottom: 6px;
              }
              .icon-img {
                width: 28px;
                height: 28px;
                margin-left: 12px;
              }
            }
          }
          .no_data {
            width: 100%;
            grid-column: span 12 / span 12;
            margin: 0 auto;
            color: ${(props) => props.theme.textBody};
            text-align: center;
            img {
              width: 128px;
              margin: auto;
            }
          }
          .active {
            .icon-checked {
              display: block;
            }
          }
        }
      }
    }
    @media screen and (max-width: 1023px) {
      .meta__modal {
        top: 20%;
      }
      .mynft {
        .mynft__header {
          .mynft__btn {
            height: 120px;
            flex-wrap: wrap;
            .mynft__btn-filter {
              margin-bottom: 12px;
            }
            .mynft__btn-right {
              flex-wrap: wrap;
              .mynft__btn-right-body {
                margin-bottom: 6px;
              }
              .mynft__btn-right-search {
                height: 41px;
              }
            }
          }
        }
        .nftmake__body-mid {
          margin: 12px auto;
          .nftmake__body-mid-items {
            padding: 0 64px;
            .nftmake__body-mid-item {
              .listDino__body {
                padding: 16px;
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 767px) {
      .mynft {
        .mynft__header {
          padding: 12px;

          .mynft__btn {
            height: 168px;
            flex-wrap: wrap;
            .mynft__btn-filter {
              margin-bottom: 12px;
            }
            .mynft__btn-right {
              flex-wrap: wrap;
              #select-profession {
                padding: 6px 28px 6px 12px;
              }
              .mynft__btn-right-search {
                height: 41px;
              }
              .mynft__btn-right-body {
                margin-bottom: 6px;
              }
            }
          }
        }
        .nftmake__body-mid {
          margin: 12px auto;
          .nftmake__body-mid-items {
            padding: 0 24px;
          }
        }
      }
    }
  `;
  return (
    <MyNFT>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          nft={nft}
          sortCoin={sortCoin}
          contract={contract}
          account={account}
          dispatch={dispatch}
          arrObjCollection ={arrObjCollection}
          nftIsFragment = {nftIsFragment}
        />
      )}

      <div className="mynft">
        <div className="mynft__header">
          <h1 className="mynft__header-title">My NFT</h1>

          <div className="mynft__btn flex">
            <div className="mynft__btn-filter">
              <span
                className={sort === "Defi" ? "btn active" : "btn"}
                onClick={() => setSort("Defi")}
              >
                Defi
              </span>
              <span
                className={sort === "Socialfi" ? "btn active" : "btn"}
                onClick={() => setSort("Socialfi")}
              >
                Socialfi
              </span>
              <span
                className={sort === "Gamefi" ? "btn active" : "btn"}
                onClick={() => {
                  toast("🦄 Comming soon!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              >
                Gamefi
              </span>
            </div>
            <div className="mynft__btn-right flex">
              <div className=" mynft__btn-right-body">
                <select
                  name="select-profession"
                  id="select-profession"
                  value={sortCategory}
                  onChange={handleSort}
                >
                  {sort === "Defi"
                    ? sortDefi.map((item) => {
                        return (
                          <option className="option" value={item} key={item}>
                            {item}
                          </option>
                        );
                      })
                    : sortSocialfi.map((item) => {
                        return (
                          <option className="option" value={item} key={item}>
                            {item}
                          </option>
                        );
                      })}
                </select>
              </div>
              <div className=" mynft__btn-right-body">
                <select
                  name="select-profession"
                  id="select-profession"
                  value={sortByCoin}
                  onChange={handleByCoin}
                >
                  {sortCoin.map((item) => {
                    return (
                      <option className="option" value={item} key={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className=" mynft__btn-right-body">
                <select name="select-profession" id="select-profession">
                  <option className="option" value="hacker">
                    Time: Low to Hight
                  </option>
                  <option className="option" value="gamer">
                    Price: Hight to Low
                  </option>
                  <option className="option" value="developer">
                    Price: Low to Hight
                  </option>
                  <option className="option" value="gamer">
                    Level: Hight to Low
                  </option>
                  <option className="option" value="developer">
                    Level: Low to Hight
                  </option>
                  <option className="option" value="gamer">
                    Power: Hight to Low
                  </option>
                  <option className="option" value="developer">
                    Power: Low to Hight
                  </option>
                </select>
              </div>
              <input
                type="text"
                className="mynft__btn-right-search"
                placeholder="Search ID, Seller"
              />
            </div>
          </div>
        </div>
        <div className="nftmake__body-mid  ">
          <div className="nftmake__body-mid-items grid grid-cols-12 gap-3">
            {sortListByCoin()}
          </div>
        </div>
      </div>
    </MyNFT>
  );
}
