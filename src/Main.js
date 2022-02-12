import { useState, useEffect } from "react";
// import Login from "./components/Login/Login";
import { ethers } from "ethers";
import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";

import Coin from "./contracts/ZombieFactory.json";
import { reRenderMetamask } from "./store/actions/homeAction";

//  Enable session (triggers QR Code modal)
const Body = [
  "https://dsgmetaverse.com/images/stuff/1_2_Body/Blank%20Blue%201.png",
  "https://dsgmetaverse.com/images/stuff/1_2_Body/Blank%20Brown%201.png",
  "https://dsgmetaverse.com/images/stuff/1_2_Body/Blank%20DeepBlue%201.png",
  "https://dsgmetaverse.com/images/stuff/1_2_Body/Blank%20Gray%201.png",
  "https://dsgmetaverse.com/images/stuff/1_2_Body/Blank%20Green%201.png",
  "https://dsgmetaverse.com/images/stuff/1_2_Body/Blank%20Pink%201.png",
  "https://dsgmetaverse.com/images/stuff/1_2_Body/Blank%20Purple%201.png",
  "	https://dsgmetaverse.com/images/stuff/1_2_Body/Blank%20Red%201.png",
  "https://dsgmetaverse.com/images/stuff/1_2_Body/Blank%20Yellow%201.png",
];
const Headdress = [
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Hair-1.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Hair-2.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Hat-1.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Hat-2.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Hat-3.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Headphone-1.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Headphone-2.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Horn-1.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Horn-2.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Horn-3.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Horn-4.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Horn-5.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Horn-6.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Horn-7.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Horn-8.png",
  "https://dsgmetaverse.com/images/stuff/2_5_Headdress/Horn-9.png",
];
const Eyes = [
  "https://dsgmetaverse.com/images/stuff/3_4_Eyes/Eye-1.png",
  "https://dsgmetaverse.com/images/stuff/3_4_Eyes/Eye-10.png",
  "https://dsgmetaverse.com/images/stuff/3_4_Eyes/Eye-11.png",
  "https://dsgmetaverse.com/images/stuff/3_4_Eyes/Eye-2.png",
  "https://dsgmetaverse.com/images/stuff/3_4_Eyes/Eye-3.png",
  "https://dsgmetaverse.com/images/stuff/3_4_Eyes/Eye-4.png",
  "https://dsgmetaverse.com/images/stuff/3_4_Eyes/Eye-5.png",
  "https://dsgmetaverse.com/images/stuff/3_4_Eyes/Eye-6.png",
  "https://dsgmetaverse.com/images/stuff/3_4_Eyes/Eye-7.png",
  "https://dsgmetaverse.com/images/stuff/3_4_Eyes/Eye-8.png",
  "https://dsgmetaverse.com/images/stuff/3_4_Eyes/Eye-9.png",
];
const Mouth = [
  "https://dsgmetaverse.com/images/stuff/4_3_Mouth/Mouth-1.png",
  "https://dsgmetaverse.com/images/stuff/4_3_Mouth/Mouth-10_7_.png",
  "https://dsgmetaverse.com/images/stuff/4_3_Mouth/Mouth-11.png",
  "https://dsgmetaverse.com/images/stuff/4_3_Mouth/Mouth-2.png",
  "https://dsgmetaverse.com/images/stuff/4_3_Mouth/Mouth-3.png",
  "https://dsgmetaverse.com/images/stuff/4_3_Mouth/Mouth-4.png",
  "https://dsgmetaverse.com/images/stuff/4_3_Mouth/Mouth-5.png",
  "https://dsgmetaverse.com/images/stuff/4_3_Mouth/Mouth-6_7_.png",
  "https://dsgmetaverse.com/images/stuff/4_3_Mouth/Mouth-7.png",
  "https://dsgmetaverse.com/images/stuff/4_3_Mouth/Mouth-8.png",
  "https://dsgmetaverse.com/images/stuff/4_3_Mouth/Mouth-9.png",
];
const Clothes = [
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/0default.png",
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/Cloth-1.png",
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/Cloth-10.png",
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/Cloth-11.png",
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/Cloth-2.png",
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/Cloth-3.png",
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/Cloth-4.png",
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/Cloth-5.png",
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/Cloth-6.png",
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/Cloth-9.png",
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/Twig_2_.png",
  "https://dsgmetaverse.com/images/stuff/5_6_Clothes_Optional/Wing_1_.png",
];
const Stuff = [
  "https://dsgmetaverse.com/images/stuff/6_7_Stuff_Optional/0default.png",
  "https://dsgmetaverse.com/images/stuff/6_7_Stuff_Optional/Stuff-1.png",
  "https://dsgmetaverse.com/images/stuff/6_7_Stuff_Optional/Stuff-2.png",
  "https://dsgmetaverse.com/images/stuff/6_7_Stuff_Optional/Stuff-3.png",
  "https://dsgmetaverse.com/images/stuff/6_7_Stuff_Optional/Stuff-5.png",
  "https://dsgmetaverse.com/images/stuff/6_7_Stuff_Optional/Stuff-7.PNG",
  "https://dsgmetaverse.com/images/stuff/6_7_Stuff_Optional/Stuff-8.PNG",
  "https://dsgmetaverse.com/images/stuff/6_7_Stuff_Optional/Stuff-9.PNG",
];
const Background = [
  "https://dsgmetaverse.com/images/stuff/7_1_Background_Optional/0default.png",
  "https://dsgmetaverse.com/images/stuff/7_1_Background_Optional/BG-stuff-1.png",
  "https://dsgmetaverse.com/images/stuff/7_1_Background_Optional/BG-stuff-2.png",
  "https://dsgmetaverse.com/images/stuff/7_1_Background_Optional/BG-Stuff-3.png",
  "https://dsgmetaverse.com/images/stuff/7_1_Background_Optional/BG-Stuff-4.PNG",
  "https://dsgmetaverse.com/images/stuff/7_1_Background_Optional/BG-Stuff-5.PNG",
  "https://dsgmetaverse.com/images/stuff/7_1_Background_Optional/BG-Stuff-6.PNG"
];

function Main() {
  const balance = useSelector((state) => state.wallet.balance);
  const account = useSelector((state) => state.wallet.account);
  const web3 = useSelector((state) => state.wallet.web3);
  const [nameDino, setNameDino] = useState("");
  const [listDino, setListDino] = useState([]);
  const [address, setAddress] = useState("");
  
  const contract = useSelector((state) => state.wallet.contract);
  useEffect(() => {
    async function fetchData() {
      getList();
    }
    if(account&& account.length > 0){
      return fetchData()
    }
  }, [account]);
  async function getList() {
    if (account && contract.methods) {
      let list = await contract.methods.getZombiesByOwner(account).call();
      renderListDino(list);
    }
  }

  const renderListDino = (list) => {
    setListDino([]);
    console.log("list", list);
    let itemBody = "";
    let itemHead = "";
    let itemEye = "";
    let itemMouth = "";
    let itemClothes = "";
    let itemStuff = "";
    let itemBg = "";
    for (let i = 0; i < list.length; i++) {
      if (!list[i][4]) {
        itemBody = +list[i][1].slice(1, 3);
        itemHead = +list[i][1].slice(3, 5);
        itemEye = +list[i][1].slice(5, 7);
        itemMouth = +list[i][1].slice(7, 9);
        itemClothes = +list[i][1].slice(9, 11);
        itemStuff = +list[i][1].slice(11, 13);
        itemBg = +list[i][1].slice(13, 15);
      } else {
        itemBody = +list[i][1].slice(1, 3) % Body.length;
        itemHead = +list[i][1].slice(3, 5) % Headdress.length;
        itemEye = +list[i][1].slice(5, 7) % Eyes.length;
        itemMouth = +list[i][1].slice(7, 9) % Mouth.length;
        itemClothes = +list[i][1].slice(9, 11) % Clothes.length;
        itemStuff = +list[i][1].slice(11, 13) % Stuff.length;
        itemBg = +list[i][1].slice(13, 15) % Background.length;
      }
      // eslint-disable-next-line no-loop-func
      setListDino((oldArray) => [
        ...oldArray,
        {
          itemBg: Background[itemBg],
          itemBody: Body[itemBody],
          itemClothes: Clothes[itemClothes],
          itemEye: Eyes[itemEye],
          itemMouth: Mouth[itemMouth],
          itemStuff: Stuff[itemStuff],
          itemHead: Headdress[itemHead],
          name: list[i][0],
          dna: list[i][1],
          index: list[i][2],
          attack: ((+list[i][1].slice(0, 2) % Background.length) + 1) * 1000,
          defense: ((+list[i][1].slice(2, 4) % Body.length) + 1) * 200,
          rare: (+list[i][1].slice(6, 8) % Eyes.length) + 1,
          hash: list[i][3]
        },
      ]);
    }
  };

  const addDino = async () => {
    if (!nameDino) {
      alert("Tên rỗng");
    } else {
      await contract.methods.createRandomZombie(nameDino).send({
        from: account,
        gas: 3000000,
      });

      let list = await contract.methods.getZombiesByOwner(account).call();
      renderListDino(list);
      setNameDino("");
    }
  };
  const addDinoByCoin = async () => {
    if (!nameDino) {
      alert("Tên rỗng");
    } else {
      await contract.methods
        .createZombieByCoin(nameDino, 1234567891123456)
        .send({
          from: account,
          gas: 3000000,
        });

      let list = await contract.methods.getZombiesByOwner(account).call();
      renderListDino(list);
      setNameDino("");
    }
  };

  const TransferDino = async (index) => {
    console.log(web3,account, address, +index)
    await contract.methods
      .transferFrom(account, address, +index)
      .send({
        from: account,
      })
      .then((value) => {
        alert("Chuyển khủng long thành công!!!");
        getList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    renderList();
  }, [listDino]);
  const renderList = () => {
    if (listDino.length > 0) {
      return listDino.map((item) => {
        return (
          <div class="max-w-sm rounded overflow-hidden shadow-lg mr-4 mb-6">
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
                  <b>Mã định danh :</b> {item.hash}
                </h3> 
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 text-center">
              <p>Địa chỉ người nhận:</p>
              <input
                type="text"
                className=" py-2 px-4 rounded mt-2 mb-2"
                name="address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <button
                className=" bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => TransferDino(item.index)}
              >
                Chuyển
              </button>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="mt-4 pl-4 ">
          <input
            type="text"
            name="name"
            className="py-2 px-4 rounded"
            onChange={(e) => {
              setNameDino(e.target.value);
            }}
            placeholder="Nhập tên khủng long"
          />
          <button
            className="ml-4 mr-4 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addDino}
          >
            Thêm khủng long
          </button>
        </div>
        <h1 className="font-bold text-center">
          Danh sách khủng long bạn sở hữu:
        </h1>
        <div
          className="d-flex flex col-xl-12 justify-around mt-9 mb-9 ml-4 mr-4 flex-wrap"
          // style={{ height: "3000px" }}
        >
          {renderList()}
        </div>
      </div>
    </>
  );
}

export default Main;
