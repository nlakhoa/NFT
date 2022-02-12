import axios from "axios";
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineLink } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { useMoralisFile, useMoralis } from "react-moralis";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import AvatarRight from "./AvatarRight";
import { HexColorPicker } from "react-colorful";

export default function PickAvatar() {
  const { saveFile } = useMoralisFile();
  const { Moralis } = useMoralis();
  const [synthesize, setSynthesize] = useState("Body");
  const account = useSelector((state) => state.wallet.account);

  const contract = useSelector((state) => state.wallet.contract);
  const { t } = useTranslation();
  const [currentBody, setCurrentBody] = useState(0);
  const [currentHeaddress, setCurrentHeaddress] = useState(0);
  const [currentEyes, setCurrentEyes] = useState(0);
  const [currentMouth, setCurrentMouth] = useState(0);
  const [currentClothes, setCurrentClothes] = useState(0);
  const [currentStuff, setCurrentStuff] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [loading, setLoading] = useState(false);

  const Body = useSelector((state) => state.wallet.Body);
  const Headdress = useSelector((state) => state.wallet.Headdress);
  const Eyes = useSelector((state) => state.wallet.Eyes);
  const Mouth = useSelector((state) => state.wallet.Mouth);
  const Clothes = useSelector((state) => state.wallet.Clothes);
  const Stuff = useSelector((state) => state.wallet.Stuff);
  const Background = useSelector((state) => state.wallet.Background);
  const [preview, setPreview] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [backgroundIpfs, setBackgroundIpfs] = useState({
    status: false,
    image: null,
    file: null,
  });
  const socialfiAccount = useSelector((state) => state.wallet.socialfiAccount);
  const ref = useRef("st0");
  const [st0, setSt0] = useState("white");
  const [st1, setSt1] = useState("white");
  const [st2, setSt2] = useState("white");
  const [st3, setSt3] = useState("white");
  const [st4, setSt4] = useState("white");
  const [color, setColor] = useState("#aabbcc");
  const [bodyBase64, setBodyBase64] = useState(null);
  function svg2img() {
    var svg = document.querySelector("#hello");
    var xml = new XMLSerializer().serializeToString(svg);
    var svg64 = btoa(xml); //for utf8: btoa(unescape(encodeURIComponent(xml)))
    // var b64start = "data:image/svg+xml;base64,";
    // var image64 = b64start + svg64;
    return svg64;
  }
  const handleColor = (e) => {
    var svg = document.querySelector("#hello");
    var xml = new XMLSerializer().serializeToString(svg);
    var svg64 = btoa(xml); //for utf8: btoa(unescape(encodeURIComponent(xml)))
    var b64start = "data:image/svg+xml;base64,";
    var image64 = b64start + svg64;
    setBodyBase64(image64);
    setColor(e);
    if (ref.current === "st0") {
      setSt0(e);
    }
    if (ref.current === "st1") {
      setSt1(e);
    }
    if (ref.current === "st2") {
      setSt2(e);
    }
    if (ref.current === "st3") {
      setSt3(e);
    }
    if (ref.current === "st4") {
      setSt4(e);
    }
  };
  const getCurentBody = () => {
    console.log(document.querySelector("#hello"));
    if (document.querySelector("#hello")) {
      return document.querySelector("#hello");
    }
  };

  const randomSkin = () => {
    setCurrentBody(Math.floor(Math.random() * Body.length));
    setCurrentHeaddress(Math.floor(Math.random() * Headdress.length));
    setCurrentEyes(Math.floor(Math.random() * Eyes.length));
    setCurrentMouth(Math.floor(Math.random() * Mouth.length));
    setCurrentClothes(Math.floor(Math.random() * Clothes.length));
    setCurrentStuff(Math.floor(Math.random() * Stuff.length));
    setCurrentBackground(Math.floor(Math.random() * Background.length));
    setBackgroundIpfs({
      status: false,
      image: null,
      file: null,
    });
    setPreview(null);
    setColor("#aabbcc");
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    // I've kept this example simple by using the first image instead of multiple

    setSelectedFile(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
    setBackgroundIpfs({
      status: true,
      image: objectUrl,
      file: e.target.files[0],
    });
  };

  const handleSkin = (action, value) => {
    if (action === "Body") {
      if (value !== currentBody) {
        setCurrentBody(value);
        setBodyBase64(null);
      }
    }
    if (action === "Headdress") {
      if (value !== currentHeaddress) {
        setCurrentHeaddress(value);
      }
    }
    if (action === "Eyes") {
      if (value !== currentEyes) {
        setCurrentEyes(value);
      }
    }
    if (action === "Mouth") {
      if (value !== currentMouth) {
        setCurrentMouth(value);
      }
    }
    if (action === "Clothes") {
      if (value !== currentClothes) {
        setCurrentClothes(value);
      }
    }
    if (action === "Stuff") {
      if (value !== currentStuff) {
        setCurrentStuff(value);
      }
    }
    if (action === "Background") {
      if (value !== currentBackground) {
        setCurrentBackground(value);
      }
    }
  };

  const renderBody = () => {
    if (Body.length > 0 && synthesize === "Body") {
      return Body.map((item, index) => {
        return (
          <li
            className={
              currentBody === index
                ? "pickavt__body-mid-item active"
                : "pickavt__body-mid-item"
            }
            key={item}
            onClick={() => handleSkin("Body", index)}
          >
            <img src={item} alt={item} />
            <FaCheckCircle className="icon-checked" />
          </li>
        );
      });
    }
    if (Headdress.length > 0 && synthesize === "Headdress") {
      return Headdress.map((item, index) => {
        return (
          <li
            className={
              currentHeaddress === index
                ? "pickavt__body-mid-item  active"
                : "pickavt__body-mid-item"
            }
            key={item}
            onClick={() => handleSkin("Headdress", index)}
          >
            <img src={item} alt={item} />
            <FaCheckCircle className="icon-checked" />
          </li>
        );
      });
    }
    if (Eyes.length > 0 && synthesize === "Eyes") {
      return Eyes.map((item, index) => {
        return (
          <li
            className={
              currentEyes === index
                ? "pickavt__body-mid-item  active"
                : "pickavt__body-mid-item"
            }
            key={item}
            onClick={() => handleSkin("Eyes", index)}
          >
            <img src={item} alt={item} />
            <FaCheckCircle className="icon-checked" />
          </li>
        );
      });
    }
    if (Mouth.length > 0 && synthesize === "Mouth") {
      return Mouth.map((item, index) => {
        return (
          <li
            className={
              currentMouth === index
                ? "pickavt__body-mid-item  active"
                : "pickavt__body-mid-item"
            }
            key={item}
            onClick={() => handleSkin("Mouth", index)}
          >
            <img src={item} alt={item} />
            <FaCheckCircle className="icon-checked" />
          </li>
        );
      });
    }
    if (Clothes.length > 0 && synthesize === "Clothes") {
      return Clothes.map((item, index) => {
        return (
          <li
            className={
              currentClothes === index
                ? "pickavt__body-mid-item  active"
                : "pickavt__body-mid-item"
            }
            key={item}
            onClick={() => handleSkin("Clothes", index)}
          >
            <img src={item} alt={item} />
            <FaCheckCircle className="icon-checked" />
          </li>
        );
      });
    }
    if (Stuff.length > 0 && synthesize === "Stuff") {
      return Stuff.map((item, index) => {
        return (
          <li
            className={
              currentStuff === index
                ? "pickavt__body-mid-item  active"
                : "pickavt__body-mid-item"
            }
            key={item}
            onClick={() => handleSkin("Stuff", index)}
          >
            <img src={item} alt={item} />
            <FaCheckCircle className="icon-checked" />
          </li>
        );
      });
    }
    if (Background.length > 0 && synthesize === "Background") {
      let result = [];
      for (let i = 0; i < Background.length; i++) {
        console.log(i);
        if (i === 0) {
          result.push(
            <li
              className={
                currentBackground === i
                  ? "pickavt__body-mid-item  active"
                  : "pickavt__body-mid-item"
              }
              key={Background[i]}
              onClick={() => handleSkin("Background", i)}
            >
              <div className="image-upload__body">
                {selectedFile ? (
                  <img
                    src={preview}
                    style={{ width: "100%", cursor: "pointer" }}
                    onClick={() => setSelectedFile()}
                    alt={preview}
                  />
                ) : (
                  <input id="file-input" type="file" onChange={onSelectFile} />
                )}
              </div>
            </li>
          );
        } else {
          console.log("chay vao day");
          result.push(
            <li
              className={
                currentBackground === i
                  ? "pickavt__body-mid-item  active"
                  : "pickavt__body-mid-item"
              }
              key={Background[i + 1]}
              onClick={() => handleSkin("Background", i)}
            >
              <img src={Background[i]} alt={Background[i]} />
              <FaCheckCircle className="icon-checked" />
            </li>
          );
        }
      }
      return result;
    }
  };

  const addDino = async (nameDino) => {
    let composite = "";
    if (!account) {
      toast.warn("Vui lòng đăng nhập để tạo NFT!!!");
    } else {
      let index = await contract.methods.currentIndex().call();
      setLoading(true);
      let result = {
        currentBody,
        currentHeaddress,
        currentEyes,
        currentMouth,
        currentClothes,
        currentStuff,
        currentBackground,
      };
      if (backgroundIpfs.status) {
        //Upload background to IPFS
        const fileImage = await new saveFile(
          "background.png",
          backgroundIpfs.file,
          { saveIPFS: true }
        );
        console.log("Background by user", fileImage._ipfs);
        //Composite Image
        if (color !== "#aabbcc") {
          composite = await axios.post("http://localhost:5000/composite", {
            result: result,
            id: index,
            backgroundIpfs: fileImage._ipfs,
            bodyBase64: svg2img(),
          });
        } else {
          composite = await axios.post("http://localhost:5000/composite", {
            result: result,
            id: index,
            backgroundIpfs: fileImage._ipfs,
          });
        }
        console.log("composite", composite);
        if (composite.data.success && account) {
          //Upload image composite to IPFS
          const res = await axios.post("http://localhost:5000/uploadImage", {
            id: index,
          });
          console.log("Upload image composite to IFPS", res);
          // Create Metadata
          if (res.data.success) {
            const metadata = {
              name: nameDino,
              description:
                "It was unbelievable, even with us couldn't believe it. Substance to each VND!",
              image: res.data.image,
            };
            console.log(metadata);
            const nftFileMetadataFile = new Moralis.File("metadata.json", {
              base64: btoa(JSON.stringify(metadata)),
            });
            await nftFileMetadataFile.saveIPFS();
            const nftFileMetadataFilePath = nftFileMetadataFile.ipfs();
            console.log("metadata", nftFileMetadataFilePath);
            await contract.methods
              .createNFT(nameDino, nftFileMetadataFilePath)
              .send(
                { from: account, gas: 1000000, value: 10000000000000000 },
                function (err, res) {
                  if (res) {
                    toast.success("Thêm khủng thành công!!!");
                  } else {
                    toast.warn("Thêm khủng thất bại!!!");
                  }
                }
              );
          }
        }
      } else {
        if (color !== "#aabbcc") {
          composite = await axios.post("http://localhost:5000/composite", {
            result: result,
            id: index,
            bodyBase64: svg2img(),
          });
        } else {
          composite = await axios.post("http://localhost:5000/composite", {
            result: result,
            id: index,
          });
        }
        console.log(composite);
        if (composite.data.success) {
          const res = await axios.post("http://localhost:5000/uploadImage", {
            id: index,
          });
          console.log(res);
          if (res.data.success) {
            const metadata = {
              name: nameDino,
              description:
                "It was unbelievable, even with us couldn't believe it. Substance to each VND!",
              image: res.data.image,
            };
            const nftFileMetadataFile = new Moralis.File("metadata.json", {
              base64: btoa(JSON.stringify(metadata)),
            });
            console.log(nftFileMetadataFile)
            await nftFileMetadataFile.saveIPFS();
            const nftFileMetadataFilePath = nftFileMetadataFile.ipfs();
            console.log("metadata", nftFileMetadataFilePath);

            await contract.methods
              .createNFT(nameDino, nftFileMetadataFilePath)
              .send(
                { from: account, gas: 1000000, value: 10000000000000000 },
                function (err, res) {
                  if (res) {
                    toast.success("Thêm khủng thành công!!!");
                  } else {
                    toast.warn("Thêm khủng thất bại!!!");
                  }
                }
              );
          }
        }
      }
      setLoading(false);
    }
  };

  const PickAvt = styled.div`
    .pickavt {
      width: 100%;
      background-color: ${(props) => props.theme.bgHeader};
      min-height: 100vh;
      color: ${(props) => props.theme.textBtn};
      .pickavt__header {
        background-color: ${(props) => props.theme.bgBodyTop};
        padding: 16px 24px;

        .pickavt__header-title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 16px;
          color: ${(props) => props.theme.textBody};
        }
        .pickavt__header-des {
          font-size: 16px;
          color: ${(props) => props.theme.textBody};
          display: flex;
          .pickavt__header-link {
            display: flex;
            font-size: 18px;
            color: ${(props) => props.theme.linkColor};
            padding: 0 6px;
          }
        }
      }
      #Layer_1 {
        width: 400px;
        height: 500px;
      }
      .st0 {
        fill: ${st0};
        stroke: #231f20;
        stroke-width: 4;
        stroke-miterlimit: 10;
      }
      .st1 {
        fill: ${st1};
        stroke: #231f20;
        stroke-width: 4;
        stroke-miterlimit: 10;
      }
      .st2 {
        fill: ${st2};
        stroke: #231f20;
        stroke-width: 4;
        stroke-miterlimit: 10;
      }
      .st3 {
        fill: ${st3};
      }
      .st4 {
        fill: ${st4};
      }

      .pickavt__body {
        .pickavt__body-div {
          margin: 16px;
          .pickavt__body-left {
            padding: 16px 24px;
            background: ${(props) => props.theme.bgBodyTop};
            color: ${(props) => props.theme.textBody};
            font-size: 16px;
            margin: 16px auto;
            border-radius: 8px;
            box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
            display: block;
            /* position: sticky; */
            top: 100px;
            .pickavt__body-left-title {
              font-size: 20px;
              font-weight: 600;
              padding-left: 12px;
            }
            .pickavt__body-left-items {
              .pickavt__body-left-item {
                cursor: pointer;
                padding-left: 16px;
                padding-right: 16px;
                height: 42px;
                line-height: 42px;
                border-radius: 42px;
                font-weight: 400;
                margin-top: 4px;
                flex-shrink: 0;
                -webkit-box-pack: start;
                justify-content: start;
              }
              .active {
                background-color: ${(props) => props.theme.borderBtn};
                margin: auto 0;
                color: ${(props) => props.theme.bgHeader};
                font-weight: 500;
              }
            }
          }
        }

        .pickavt__body-mid {
          margin: 24px 36px;
          .pickavt__body-mid-items {
            .pickavt__body-mid-item {
              background-color: ${(props) => props.theme.bgBodyTop};
              width: 177px;
              height: 177px;
              margin: 12px auto;
              border-radius: 8px;
              box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
              cursor: pointer;
              overflow: hidden;
              position: relative;
              .image-upload__body {
                width: 100%;
                height: 100%;
                display: flex;
              }
              .icon-checked {
                position: absolute;
                top: 8px;
                right: 8px;
                color: ${(props) => props.theme.lightGreen};
                display: none;
              }
            }
            .active {
              .icon-checked {
                display: block;
              }
            }
          }
        }
        .pickavt__body-right {
          margin: 24px auto;
          display: block;
          /* position: sticky; */
          .pickavt__body-right-body {
            display: block;
            position: sticky;
            top: 100px;
            .pickavt__body-right-main {
              background-color: ${(props) => props.theme.bgBodyTop};
              /* position: relative; */
              color: ${(props) => props.theme.textBtn};
              width: 340px;
              border-radius: 8px;
              box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
              margin: auto;
              display: block;
              /* position: sticky; */
              top: 84px;
              .pickavt__body-right-name {
                font-size: 20px;
                height: 36px;
                font-weight: 600;
                text-align: center;
                padding: 6px;
                color: ${(props) => props.theme.textBody};
              }
              .pickavt__img {
                height: 300px;
                width: 300px;
                position: relative;
                img {
                  margin: auto;
                  position: absolute;
                  top: 42px;
                  left: 20px;
                  width: 300px;
                  height: 300px;
                }
              }
              .pickavt__color {
                font-size: 14px;
                height: 42px;
                line-height: 42px;
                text-align: center;
                color: ${(props) => props.theme.textBody};
              }
            }
            input {
              display: flex;
              border-radius: 12px;
              margin: 12px auto;
              height: 48px;
              color: black;
            }
            .pickavt__right-create {
              font-size: 14px;
              margin: 12px 0 24px 0;
              text-align: center;
              color: ${(props) => props.theme.borderBtn};
            }
            .pickavt__right-btn {
              display: flex;
              justify-content: space-around;
              .pickavt__right-btn-l,
              .pickavt__right-btn-r {
                color: ${(props) => props.theme.textBtn};
                border: 2px solid ${(props) => props.theme.borderBtn};
                background: ${(props) => props.theme.bgBtn};
                padding: 6px 16px;

                cursor: pointer;
                font-size: 14px;
                font-weight: 600;
                border-radius: 25px;
              }
              .disable {
                border: 2px solid #ccc;
                background: #ccc;
              }
              .active {
                background-color: ${(props) => props.theme.borderBtn};
                color: ${(props) => props.theme.bgHeader};
              }
            }
            .pickavt__right-current {
              font-size: 14px;
              padding: 12px;
              background-color: ${(props) => props.theme.bgBodyTop};
              margin: 16px auto;
              width: 340px;
              font-weight: 500;
              line-height: 1.5;
              border-radius: 8px;
              box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
              color: ${(props) => props.theme.textBody};
              span {
                color: ${(props) => props.theme.borderBtn};
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 1023px) {
      .pickavt {
        .pickavt__header {
          .pickavt__header-des {
            font-size: 12px;
            .pickavt__header-link {
              font-size: 12px;
            }
          }
        }
        .pickavt__body {
          flex-wrap: wrap;
          flex-direction: column-reverse;
          .pickavt__body-left {
            flex-wrap: wrap;
            .pickavt__body-left {
              font-size: 12px;
              .pickavt__body-left-title {
                display: none;
              }
              .pickavt__body-left-items {
                display: flex;
              }
            }
          }
          .pickavt__body-right {
            width: 100%;
          }
        }
      }
    }
    @media screen and (max-width: 767px) {
      .pickavt {
        .pickavt__header {
          .pickavt__header-des {
            font-size: 12px;
            .pickavt__header-link {
              font-size: 12px;
            }
          }
        }
        .pickavt__body {
          flex-wrap: wrap;
          flex-direction: column-reverse;
          .pickavt__body-left {
            flex-wrap: wrap;
            .pickavt__body-left {
              font-size: 12px;
              padding: 0;

              .pickavt__body-left-title {
                display: none;
              }
              .pickavt__body-left-items {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
              }
            }
            .pickavt__body-mid {
              .pickavt__body-mid-items {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                .pickavt__body-mid-item {
                  width: 150px;
                  margin: 12px;
                }
              }
            }
          }
          .pickavt__body-right {
            width: 100%;
            margin: 12px 0;
          }
        }
      }
    }
  `;
  return (
    <PickAvt>
      <div className="pickavt">
        <div className="pickavt__header">
          <h1 className="pickavt__header-title">{t("pickavatar.pickyour")}</h1>
          <span className="pickavt__header-des">
            {t("pickavatar.pickdes")}
            <Link to="#" className="pickavt__header-link">
              {t("pickavatar.pickdeslink")}
              <AiOutlineLink style={{ margin: "auto" }} />
            </Link>
          </span>
        </div>
        <div className="pickavt__body  flex w-full ">
          <div className="pickavt__body-left  sm:w-full xl:w-2/3 flex">
            <div className="  sm:w-full xl:w-1/4 pickavt__body-div">
              <div className="pickavt__body-left">
                <p className="pickavt__body-left-title">
                  {t("pickavatar.Synthesize")}
                </p>
                <ul className="pickavt__body-left-items">
                  <li
                    className={
                      synthesize === "Body"
                        ? "pickavt__body-left-item active"
                        : "pickavt__body-left-item"
                    }
                    onClick={() => setSynthesize("Body")}
                  >
                    {t("pickavatar.Body")}(9)
                  </li>
                  <li
                    className={
                      synthesize === "Headdress"
                        ? "pickavt__body-left-item active"
                        : "pickavt__body-left-item"
                    }
                    onClick={() => setSynthesize("Headdress")}
                  >
                    {t("pickavatar.Headdress")}(16)
                  </li>
                  <li
                    className={
                      synthesize === "Eyes"
                        ? "pickavt__body-left-item active"
                        : "pickavt__body-left-item"
                    }
                    onClick={() => setSynthesize("Eyes")}
                  >
                    {t("pickavatar.Eyes")}(11)
                  </li>
                  <li
                    className={
                      synthesize === "Mouth"
                        ? "pickavt__body-left-item active"
                        : "pickavt__body-left-item"
                    }
                    onClick={() => setSynthesize("Mouth")}
                  >
                    {t("pickavatar.Mouth")}(11)
                  </li>
                  <li
                    className={
                      synthesize === "Clothes"
                        ? "pickavt__body-left-item active"
                        : "pickavt__body-left-item"
                    }
                    onClick={() => setSynthesize("Clothes")}
                  >
                    {t("pickavatar.Clothes")}(12)
                  </li>
                  <li
                    className={
                      synthesize === "Stuff"
                        ? "pickavt__body-left-item active"
                        : "pickavt__body-left-item"
                    }
                    onClick={() => setSynthesize("Stuff")}
                  >
                    {t("pickavatar.Stuff")}(8)
                  </li>
                  <li
                    className={
                      synthesize === "Background"
                        ? "pickavt__body-left-item active"
                        : "pickavt__body-left-item"
                    }
                    onClick={() => setSynthesize("Background")}
                  >
                    {t("pickavatar.Background")}(7)
                  </li>
                </ul>
              </div>
            </div>
            <div className="pickavt__body-mid sm:w-full xl:w-3/4 ">
              <p className="flex justify-center mt-4 mb-4">
                Đang chỉnh màu cho: <b>{ref.current}</b>
              </p>
              <div className="flex justify-center">
                <HexColorPicker
                  color={color}
                  onChange={(e) => handleColor(e)}
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="400"
                  height="400"
                  id="hello"
                  onClick={(e) => {
                    console.log(e.target.classList.value);
                    ref.current = e.target.classList.value;
                  }}
                >
                  <g fill-rule="evenodd">
                    <path
                      className="st0"
                      style={{
                        fill: `${st0}`,
                        stroke: "#231f20",
                        strokeWidth: "4",
                        strokeMiterlimit: "10",
                      }}
                      d="M179 90a1064 1064 0 0 1-25 11c-7 3-17 9-24 15l-4 3-3 5c-3 9-3 9-3 14s0 5 4 12c2 4 2 6 1 7-5 3-15-8-16-18l-1-2-7 9-1 2 1 1 5 5 5 7c0 5-9 4-14-1-2-1-2-1-3 3-5 15-3 34 5 51a78 78 0 0 0 11 18c3 3 1 6-2 4-2 0-4 10-4 17 0 3 0 4 2 2 10-8 14-4 7 5l-3 5c-3 3-2 3 1 7 8 8 18 11 35 11a83 83 0 0 0 21-3 126 126 0 0 0 18-4 278 278 0 0 0 60-26l11-11-8-6c-7-4-5-8 3-8l9 1c4 2 4 2 6-1 5-6 6-8 6-10l2-5c2-1 2-2 5-9 2-4 1-5-1-8-3-5-2-9 3-9 3 0 3 0 3-7l-1-4-2-2c-6-6-8-10-3-12 2-1 2-2 1-4-2-5-3-7-5-8-5-2-6-4-6-8v-2l-4-4c-5-5-5-5-13-5l-10-1h-3a822 822 0 0 1-38 16c-3-2 1-8 9-13a664 664 0 0 0 16-12l-18 1c-8 2-14 4-16 7a473 473 0 0 0-23 24c-4 1-7-1-7-6v-2l-12 10-5 4c-1-1 6-13 10-17l3-3 2-2-2-1v-9c-1-2 0-6 1-9 4-8 12-18 18-22a388 388 0 0 1 3-3m127 47v1-1c0-1 0-1 0 0m2 19v1-2 1M87 182v6l1-5-1-6v5m195 46v1l1-1s1 0 0 0h-1m-110 10c3 3 2 5-5 9-5 2-6-1-3-5 3-6 6-7 8-4m-20 4c5 2 5 7 1 8-2 1-3 0-5-2-6-5-3-10 4-6m67 31-4 2a66 66 0 0 1-9 3 98 98 0 0 1-13 5c-8 2-24 5-31 5-5 1-4 0-7 4a122 122 0 0 0-16 27c-9 21-11 42-5 55 1 3 1 3 4 2l1-1v-2a64 64 0 0 1 1-25c2-8 5-16 11-28l6-13c2-5 3-6 7-8 1 0 0 5-2 9l3-2c21-14 46-12 66 8 6 6 5 5 6 3 2-7 3-21 1-27v-3l1-1 1-1c2 0 4 11 3 19l-1 7-4 16c-4 13-4 16-4 23 1 11 6 20 16 25h2l1-2 2-1c4-3 8-2 12 1l2 2 1-1 3-3 1-3 1-2v-10l-2-2c-4-4-4-7 0-10l2-1-1-4-2-6-1-6c1-5-6-24-13-33-6-11-13-16-20-19l-4-2h-15m136 1-8 5-1 1 1 1c1 2 1 2 3-1l4-3c5-4 5-5 1-3m-78 8h6l-3-1-3 1m61 7-2 4 2 2 2 2a156 156 0 0 0 6-10h-5c-1-1-1 0-3 2m-187 0h2l-1-1-1 1m186 13-3 1h-3l-1 3c-1 4-1 5 1 6l3 2c2 2 2 2 3-1 3-13 3-12 0-11m11 8 1 1v-2l-1 1m-25 16-1 2v2l6 4c2 2 3 0 5-7 0-3 1-3-4-3h-5l-1 2m21 15 1 1v-1h-1m-35 2c-2 1-3 3-2 3 2 0 9 6 10 9l2 3 6-10c0-2-13-7-16-5m-6 17c-1 1 0 8 1 9 1 2 2 2 5-1l1-2-4-3-3-3m-10 5-1 2 1-1c0-2 2-2 3 0h1c-1-2-3-3-4-1m4 5v1-3 2m-60 0 1 2 2 1-1 1-1 1 1-1 1-1-3-3m53 0c0 2 3 6 4 6v-1l-3-3-1-2m-10 1h2l-1-1-1 1m-3 1-2 1 3-1 1-1-2 1m7 0 1 4v3l1-2c0-3-1-5-3-6l1 1m-53 3 1 1v-1h-2 1m33 1 1 1-1-1c-1-1-1-2 0 0m-139 1v1l1-2-1 1m140 4c0 3 0 3 1 2v-3l-1-3v4m-142-3-1 1h-1 2v-1m16 1h1c2 0 3 0 3 3v2-2c0-3-3-5-4-3m-7 3v1-2 1m151 1-1 1h-1 1l2-2-1 1m-141 2v1l1-2-1 1m122 1-1 2h-1l2-1 1-2-1 1m-124 2v2l-1 2-1 1 1-1 1-2 1-2v-1l-1 1m5 11v1l1-1h-1"
                    />
                    <path
                      className="st1"
                      style={{
                        fill: `${st1}`,
                        stroke: "#231f20",
                        strokeWidth: "4",
                        strokeMiterlimit: "10",
                      }}
                      d="M232 73h-3l-3 1h-4l-2 1h-1l-2 1h-2l-1 1h-1l-1 1h-4l-2 1h-1l-2 1h-4c1 0 0 0 0 0l-1 1h-2l-1 1h-3l-1 1h-1l-2 1h-3l-1 1h-1l-1 1h-3l-1 1h-1l-1 1h-2l-2 1-1 1h-3v1h-1l-1 1h-2l-1 1h-1l-1 1h-2l-1 1-1 1h-2l-1 1h-1v1h-2l-1 1-1 1h-2l-1 1-2 1-1 1h-1l-1 1s-1 0 0 0h-1v1h-1l-1 1h-1l-1 1-1 1-2 1-1 1-2 1-1 1-1 1-2 1-2 1-2 2c0-1 0-1 0 0l-1 1-1 1h-1l-4 5-3 3-4 3-3 4-1 2-1 1-1 2-2 2v1l-1 1-1 2v1h-1v1h-1v2l-1 1v1l-1 1v1l-1 1v1l-1 1v2l-1 2v1l-1 1v3l-1 1v2l-1 2v4l-1 3 1 8a33 33 0 0 0 0 10l1 3v1l1 1v4l1 1v1l1 1v3l1 1v1h1v3l1 1 1 1v2l1 1 2 3 1 2v1l2 2 1 1v1l1 1v1l1 2-1 1v2l-1 1v1l-1 1v2l-1 1v1l-1 2v15l1 2v1l1 1v2l1 1 1 2 1 2 2 2 2 2 1 1h1l1 1 2 2h2l1 1 1 1h1c0 1 1 2 3 2h2l1 1h1l2 1h3l2 1h1l3 1h10c6 0 7 1 5 2v1l-2 2-2 2v1l-1 1-1 1v1l-2 2v1l-1 1v1h-1v1l-1 1-1 2v1l-1 1h1l-1 1c0-1 0 0 0 0l-1 1v2l-1 1v1h-1v2l-1 2-1 2v1l-1 1-1 2v2l-1 1v1l-1 1v3l-1 1v1l-1 2v5l-1 2v13l-1 8h-1l-1 1-1 1h-1l-1 2-1 1v2l-1 1v6l1 1 2 1h2l1-1 1-1h2l1-1 2 1 1 1v11l4 4h4l2-2 3-2v2l1 3v1c0 2 0 2 2 2h1v-5a439 439 0 0 1 4-62 244 244 0 0 1 4-13c1-4 14-14 21-16l3-1c6-2 16-2 21-1l14 5c8 5 18 15 18 19l-1 4-2 8c-1 8-1 13 1 21l-2 4c-9 12-1 22 12 14l2-1 4 2 3 2 1 2 5 8 2 2v4l1 4h4v-4c0-4 0-4 2-5l3-3 1-2v-2c0-2 2-1 6 2 4 5 11 2 13-5l1-3h2c1 1 4 2 6 1h1v10l-1 11h3c2 0 2 0 2-9l1-7 1-1c2-2 2-2 2-5s-1-7-3-6c-1 0-2-6-2-13v-11c3-2 17-15 19-19a210 210 0 0 1 6-12l2-5a31 31 0 0 1 1-6 126 126 0 0 1 6-13l11-15c5-4 12-6 14-5 1 1 1 1-2 5-7 7-8 9-12 22l-3 15a162 162 0 0 1-2 18 185 185 0 0 1-10 45 54 54 0 0 1-13 19c-3 3-3 3 0 3h3l3-3 3-3 1-2 1-1 1-1 1-2v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-2l1-1v-1l1-1v-3l1-1v-1l1-1v-3l1-2v-2l1-2 1-2-1-1v-1l1-2v-2l1-3v-7l1-3v-2l1-2-1-1 1-1v-5l1-3v-3l1-3v-7l1-4v-3l1-2v-3l1-1v-1l1-2v-3l1-1 1-1v-2h1l1-2 1-2 2-2 1-2 1-1 3-3 1-1 1-4h-1l-1-1v-1h-2l-3-1-2 1h-3l-1 1h-1l-1 1h-1l-3 2-2 2-3 3-1 1h-1v2l-1 1-1 1-2 2v2l-1 1-1 1v1l-2 3-1 2-1 1v2l-1 1v1l-1 1v2l-1 2v1l-1 1v2l-1 2v1l-1 1v3l-1 1-1 1v2h-1v1l-1 1v1l-1 1v1l-2 2-1 2-4 4-4 5-1 1-2 1-2 2h-1v1h-1s-1 0 0 0h-1v-2l-1-2v-2l-1-2v-1l1-1-1-2-1-2v-1l-1-1h1l1-1 1-1 1-2v-1l1-1 1-2v-1l1-1v-1l1-2-1-2-1-1-1-1-1-1h-6l-2 1-1-1-1-1v-2l1-3 2-3 1-1v-2l1-1v-1c1 0 1 0 0 0v-3l-1-2v-1l-1-2-1-1-2-3h-2l-1-1h-1l-1-1h-2c0-1 0-1 0 0h-7v-3l-1-1 1-1 2-2 1-1 1-2v-6l-1-2v-1l-4-4-1-1h-2l-2-1h-1l-1-1h-3l-2-1h-3l-2-1h-4l1-1 1-1h1l2-2 2-2 2-1 1-1 3-2 3-3a92 92 0 0 0 16-17l2-2v-1l1-1 2-2 1-1v-2l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-1l1-1v-2l1-1v-1l1-1v-2l1-2v-1l1-1v-3l1-1v-1l1-2v-3l1-2v-2l1-2v-4l1-3v-4l1-3v-3c1 0 1 0 0 0v-7l-1-8v-3l-1-3v-5l-1-1v-2l-1-2v-3l-1-2v-1l-1-1v-2l-1-1v-1l-1-1v-2l-1-1v-1l-1-1v-1l-1-1v-1h-1v-2l-1-1-1-2-1-1-1-1-1-2-1-1-2-2-1-2a43 43 0 0 0-9-9l-3-2h-1l-1-1-1-1-2-1-1-1h-2l-1-1-1-1h-2l-1-1h-1l-1-1h-3l-1-1h-1l-2-1h-4l-3-1h-3l-5-1-6 1m5 3c1 1-1 2-7 6-10 8-14 9-19 6-7-3-14 1-23 12a271 271 0 0 0-25 41l5-3a204 204 0 0 1 17-10l6-3 6-6c7-7 7-7 9-5 9 9 28 0 57-27l4-3 13 10a204 204 0 0 1-48 21c-5 2-6 3-3 3s21 5 26 8c3 1 8 0 22-4a253 253 0 0 1 12-5c6-2 6-3 8 1 1 4 1 4-1 5-7 6-16 11-20 11-7 1-8 3-5 6l3 5c2 3 3 3 10 3l15-2c4-1 4-1 4 2v4c-1 1-10 4-15 4-8 1-8 2-7 6l2 9c0 1 6 4 14 5 5 1 4 1 4 4-1 4-1 4-7 4l-8 1h-3l-1 4v8l9 6c2 1 2 1 1 3-1 4-2 5-4 5h-12c-1-1-3 3-3 6l4 8c2 2 2 1-1 5-4 4-4 4-7 2-4-4-5-4-6-3-8 10-7 9-4 12l2 2a150 150 0 0 1-47 28l-6 2a189 189 0 0 1-24 8c-25 6-54 4-64-3h-2l-2-2c-12-8-16-22-10-37 1-3 1-3 3-3 3 0 3-1 1-4a127 127 0 0 1-15-27l-2-8a74 74 0 0 1 1-35l1-3 1-3 2-4 2-4 2-4 2-3a135 135 0 0 1 48-40 255 255 0 0 1 14-6l4-2 3-1a94 94 0 0 0 10-4 111 111 0 0 0 14-4l3-1a104 104 0 0 1 15-4c3-1 20-4 22-3m30 184c9 3 12 8 7 14-2 1-2 1-5-3l-7-9-5-4h3l7 2m-26 3c-1 2-2 4-1 6 2 4 8 3 17-1 4-2 5-2 6 0 1 1 1 1-4 4-4 2-7 6-6 7 1 3 8 3 15 2 4-1 4-1 6 2 1 3 1 2-3 4-6 2-7 2-8 4-4 5 3 8 15 7h4l1 2c2 3 1 3-4 4-7 0-11 2-11 6s5 6 17 7l5 1v1l1 4 1 2h-2c-17-2-20-1-17 7 1 3 6 5 15 6 7 1 7 1 7 5 1 3 1 3-2 3l-14-3c-5 0-5 0-4 6 0 7-1 6 11 9l8 2-1 1-4 5c-2 4-2 4-3 3-5-3-12-1-16 6h-2c-1-3-6-5-9-4-3 0-7 3-7 4 0 3-9-4-13-9-5-8-7-20-4-28a95 95 0 0 0 3-12 102 102 0 0 0 5-32c-2-9-2-9-4-8v4a59 59 0 0 1-1 22 33 33 0 0 1-1 6c-1 2-1 2-6-3-7-7-16-14-22-15l-7-2a50 50 0 0 0-41 12v-2l3-8-5 3a127 127 0 0 0-11 38l-1 5a230 230 0 0 0-3 30c-3-1-4-1-7 1-2 2-4-1-6-13a91 91 0 0 1 1-22l2-11a90 90 0 0 0 3-7l3-8a136 136 0 0 1 8-15l10-13h3a142 142 0 0 0 38-8 67 67 0 0 0 12-4 97 97 0 0 0 9-3l16-9c5-2 6-3 5-1m43 23c7 2 9 7 6 13-2 3-2 3-5-1a198 198 0 0 0-6-13l5 1m16 28-1 4a424 424 0 0 0-3 6l-4-10h8m35 4-1 5 2-3c0-1 0-3-1-2m-6 19-1 3-2 5c-2 3 3 3 5-1 2-3 0-10-2-7m-14 25c-4 4-4 4-2 4s4-2 5-5c0-2 0-2-3 1m-79 5 3 5c2 2 2 2-1 3-9 3-12-1-7-9 2-3 2-3 5 1m61-2v10c-1 2-4 1-6-2-2-2-2-3 0-6 2-4 4-5 6-2m-169 4v3l1 1c1 2 1 3-1 4l-4 2h-2l-1-3 1-1v-1l1-1 4-5 1 1m156 3c5 4 0 15-6 12-3-1-7-6-7-8 0-1 4-4 9-6 1 0 3 0 4 2m-20 3c2 3 3 7 2 10-4 7-10 3-11-7 0-5 6-7 9-3m-121 4c1 1 1 6-1 7l-2 4c-1 4-4 4-5 0-3-5 4-15 8-11"
                    />
                    <path
                      className="st2"
                      style={{
                        fill: `${st2}`,
                        stroke: "#231f20",
                        strokeWidth: "4",
                        strokeMiterlimit: "10",
                      }}
                      d="M186 302c-10 2-24 10-28 16l-4 16 13 1 17-1a121 121 0 0 0 23-8h3l-1 1c-6 4-19 9-29 11-7 1-22 1-26-1-1-1-1 0-2 6-3 16-3 19 2 20 10 3 15 4 23 3a1293 1293 0 0 0 28-2 589 589 0 0 0-27 5 49 49 0 0 1-27-4l1 11c1 10 11 18 24 20l4 1c15 4 42-4 52-15 1-2 1-2-1-2-7-2-7-10-1-17l2-3-1-3c-2-8-1-15 2-27 1-6 2-5-5-13a47 47 0 0 0-42-15"
                    />
                    <path
                      className="st3"
                      style={{
                        fill: `${st3}`,
                        stroke: "#231f20",
                        strokeWidth: "4",
                        strokeMiterlimit: "10",
                      }}
                      d="M308 157v3-7 4m-13 137v1l1-1-1-2v2m-63 71c-3 4-4 8-3 9 2 2 7 2 10 0l1-1-1-1-3-4c-3-5-3-5-4-3m60 1c-2 4-2 4-1 7 2 2 3 3 5 3 1 0 2-8 0-10-1-2-2-2-4 0m-15 6-5 3c-1 2 0 4 4 7 5 4 9 2 9-6 0-5-3-6-8-4m-153 2-1 1-1 1v3l1-1 5-2 1-1-1-2c0-1-2-1-4 1m133 0c-2 1-2 2-1 5 1 8 5 12 8 7 3-3 2-8-1-12h-6m-119 6-2 3-1 2c-1 2 0 7 2 7l3-2v-1c2-3 4-8 2-10l-4 1"
                    />
                    <path
                      className="st4"
                      style={{
                        fill: `${st4}`,
                        stroke: "#231f20",
                        strokeWidth: "4",
                        strokeMiterlimit: "10",
                      }}
                      d="M230 73h2l-1-1-1 1m13 0h2l-1-1-1 1m-19 1h2l-1-1-1 1m4 3a69 69 0 0 0-19 4 104 104 0 0 0-12 3 102 102 0 0 0-14 4l-3 1-2 1h2c3-1 3-1 0 1l-11 8c-10 12-14 21-12 25v9l2 1-2 2-3 3c-4 4-11 16-10 17l5-4 12-10v2c0 5 3 7 7 6l19-20 4-4c2-3 8-5 16-7l18-1-1 1a170 170 0 0 0-15 11c-8 5-12 11-9 13 2 2 7 0 21-7a308 308 0 0 1 17-9h3l10 1c8 0 8 0 13 5l4 4v2c0 4 1 6 6 8 2 1 3 3 5 8 1 2 1 3-1 4-5 2-3 6 3 12l2 2 1 4c0 7 0 7-3 7-5 0-6 4-3 9 2 3 3 4 1 8-3 7-3 8-5 9l-2 5c0 2-1 4-6 10-2 3-2 3-6 1l-9-1c-8 0-10 4-3 8 9 5 9 5 6 9-4 4-10 9-20 15a267 267 0 0 1-73 24c-5 1-9 2-19 2a426 426 0 0 0-6 0 127 127 0 0 0 62-6 189 189 0 0 0 63-34l-2-2c-3-3-4-2 4-12 1-1 2-1 6 3 3 2 3 2 7-2 3-4 3-3 1-5l-4-8c0-3 2-7 3-6h12c2 0 3-1 4-5 1-2 1-2-1-3l-9-6v-8l1-4h3l8-1c6 0 6 0 7-4 0-3 1-3-4-4-8-1-14-4-14-5l-2-9c-1-4-1-5 7-6 5 0 14-3 15-4v-4c0-3 0-3-4-2l-15 2c-7 0-8 0-10-3l-3-5c-3-3-2-5 5-6 4 0 13-5 20-11 2-1 2-1 1-5-2-4-2-3-8-1a156 156 0 0 1-12 5c-14 4-19 5-22 4-5-3-23-8-26-8s-2-1 3-3c4-3 4-3 8-3l6-2 5-1a61 61 0 0 0 10-5l19-10-13-10-4 3c-29 27-48 36-57 27-2-2-2-2-9 5l-6 6-6 3a252 252 0 0 0-22 13l4-9 5-7 16-25c9-11 16-15 23-12 5 3 10 1 24-10 3-2 2-2-7-1m-21 1v1l1-1h-1m-7 2h1-1m-4 1h2l-1-1-1 1m-2 1h1v-1l-1 1m-9 2h1-1m-5 2h2l-1-1-1 1m-5 5-1 1 3-2-2 1m-4 2c-2 0-2 1 0 0l2-1-2 1m-4 1-1 1 3-1h-2m120 1 1 1v-1h-1m-124 1v1l2-2-2 1m-8 0h1-1m5 1-1 1h1c2-1 2-1 0-1m-8 1h1l-1-1v1m138 1 1 1v-1h-1m-138 3h-1 1l1-1-1 1m-3 1v1l1-2-1 1m-4 2-3 2h1a435 435 0 0 1 2-2m-23 11 1 1v-1h-1m178 2h1v-1l-1 1m-178 4a124 124 0 0 0-16 17c2-3 2-3 3 0 1 10 11 21 16 18 1-1 1-3-1-7-4-7-4-7-4-12v-6a122 122 0 0 1 7-14l-5 4m-6-1c-1 3-2 3 0 1l3-2-3 1m-7 8-1 2 4-4-3 2m196 4 1 1v-1h-1m1 5v1l1-1h-1m-204 6-2 4a125 125 0 0 1-6 12h1l1-1 1 1c5 5 14 6 14 1l-5-7c-6-6-6-6-4-8l2-4-2 2m205 0v1l1-1h-1m-210 1 1 1v-2l-1 1m-1 2v1l1-1v-1l-1 1m-2 15v1c0 1 0 0 0 0v-2 1m-5 2 1 1v-1h-1m4 0v1c0 1 0 1 0 0v-1m214 3v1l1-1-1-1v1m-215 1v2-2m-4 3v1-1m3 3v3l1-3v-3l-1 3m215-1v1h1l-1-1c0-1 0 0 0 0m-1 5 1 1v-2l-1 1m-214 4v1-3 2m213-1 1 1v-1h-1m-213 7 1 3v-1c-1-4-1-5-1-2m211 3v1-2 1m-214 3v-1 1m4 0v3l1-2-1-1m208 2h1v-1l-1 1m-212 2 1 1v-1h-1m5 0v2-2m-4 3 1 1v-2l-1 1m5 0v1-2 1m0 3 1 2h1l-2-2m-3 3s0 1 0 0v-1 1m5 1 1 3v-1l-1-2m-4 1c0 1 0 1 0 0v-1 1m6 3 2 4-1-2-1-2m194 2 1 1v-1h-1m-192 3 1 2v-1l-1-1m190 2v1-1c1-1 1-1 0 0m-187 2 1 3 1 2v-2l-3-4 1 1m182 4-1 1 1-1h1-1m-179 1 4 6c2 3 2 4-1 4l-3 1h1l1-1c3 2 5-1 2-4l-2-3-2-3m-5 2 1 1v-1h-1m180 2c-1 1-1 1 0 0h1-1m-114 8c-6 5-6 11 0 9 7-4 8-6 5-9-1-2-3-2-5 0m-62 2c0 2 0 3 1 0v-2l-1 2m-4 1 1 1v-2l-1 1m45 0c-2 2 0 7 5 9 2 1 5-1 5-4 0-4-8-8-10-5m122 2-1 1 3-2c1-1-1-1-2 1m-164 0v2c0 1 0 1 0 0v-2m159 4v1l1-2-1 1m-160 2c-1 8 3 18 8 23l7 5-2-1-8-8 2-3c6-8 8-12 6-14-2-1-6 0-10 4-3 2-3 2-2-4 0-5 0-6-1-2m-3-1v-1 1m160 1v1l1-1h-1m-2 5 1 1 1-1h-2m5 1h2-2m-1 7 7 9c3 4 3 4 5 3 3-4 3-8 0-11l-14-5h-3l5 4m-162-2v-1 1m176 0 1 1h1l-1-1h-1m-40 4a185 185 0 0 1-16 9h14l4 2c7 3 14 8 20 19 7 9 14 28 13 33l1 6 2 6 1 4-2 1c-4 3-4 6 0 10l2 2v5a96 96 0 0 1-1 7c0 1 0 2-2 3l-2 3-1 1-1 1 2-1c4-7 11-9 16-6 1 1 1 1 3-3l4-5 1-1-8-2c-12-3-11-2-11-9-1-6-1-6 4-6l14 3c3 0 3 0 2-3 0-4 0-4-7-5-9-1-14-3-15-6-3-8 0-9 17-7h2l-1-2-1-4v-1l-5-1c-12-1-17-3-17-7s4-6 11-6c5-1 6-1 4-4l-1-2h-4c-12 1-19-2-15-7 1-2 2-2 8-4 4-2 4-1 3-4-2-3-2-3-6-2-7 1-14 1-15-2-1-1 2-5 6-7 5-3 5-3 4-4-1-2-2-2-6 0-9 4-15 5-17 1-1-2 0-4 1-6s0-1-5 1m44 2v1c0 1 0 1 0 0v-1m76 4h1l-1-1v1m-76 1v1-2 1m73 3c-5 3-17 16-17 19l-1 3a116 116 0 0 0-4 7l7-1c2-1 2-1-1 11-1 3-1 3-3 1l-3-2-2-2v2l-2 5a88 88 0 0 1-6 12c-2 4-16 17-19 19v11l1 1 3 3 4 3-3 4c-2 2-4 0-4-6 0-2 0-2-1-1 0 4 2 9 3 9 1-1 2 3 2 6s0 3-2 5l-1 1-1 7v9h13l3-3 9-11a54 54 0 0 0 6-12 185 185 0 0 0 8-47l2-12 3-15c4-13 5-15 12-22 3-4 3-4 2-5s-5 0-8 1m4 0-3 3-4 3c-2 3-2 3-3 1l-1-1 1-1c4-3 8-6 10-6v1m-144 1c-3 2-4 2-2 2l4-3-2 1m-6 3h-1l3-1-2 1m-96 0 1 1c1-1-1-2-1-2v1m8 0 4 2-2-1-2-1m81 2-1 1 4-2-3 1m-75 1 3 1-3-2v1m70 1h-1l3-1-2 1m84-1h1c1 0 0 0 0 0h-1m-150 1h2-2m60 1-1 1 4-2-3 1m149 0-1 1h1v-1m-154 1c-1 1 0 1 1 1l2-1h-3m-4 1h2-2m99 0 2 5 4 8c3 4 3 4 5 1 3-6 1-11-6-13l-5-1m-40 1-1 3v1-1c0-2 2-4 3-3h1l-2-1-1 1m-63 0h-1 4-3m-5 1h4-4m173 0h2l-3 6c-2 5-3 6-3 4l-2-2-2-2 2-4c2-2 2-3 3-2h3m-102 0v2-2m-76 1h-1 3l1-1-3 1m-28 0h2-2m19 1 3-1h3-2l-4 1m85 2 1 3v-1c0-3-1-4-1-2m-3 2v2-4 2m-89-2c0 1 0 2 1 1l1-1h-2m202 5v-1 1m-109 3v1-2 1m-4 0v1-2 1m-55-1h3-3m18 0 3 1-4-1h1m127 1h1v-1l-1 1m-165 1c-1 0-1 0 0 0v1c0 1 0 1 0 0v-1m15 0h-1 2v-1l-1 1m29 0h1l-1-1v1m-47 1-3 2-2 6 1-2 4-6 2-1-2 1m12 1-2 1 4-2-2 1m16 0-8 1-3 1c-7 2-20 12-21 16a2913 2913 0 0 1-7 35c-1 11-2 33-1 42v3h111l-1-4v-4l-2-2-5-8-1-2-3-2-4-2-2 1c-13 8-21-2-12-14l2-4c-2-8-2-13-1-21l2-8c2-5 2-5 0-8-6-8-18-16-26-19-7-1-11-2-18-1m-42 1-3 6 1-2a460 460 0 0 1 2-4m59 1c8 2 15 6 22 13 7 8 6 7 5 13-3 12-4 19-2 27l1 3-2 3c-6 7-6 15 1 17 2 0 2 0 1 2-4 4-13 10-21 12a81 81 0 0 1-35 2c-13-2-23-10-24-20l-1-11 3 1a49 49 0 0 0 29 2 124 124 0 0 0 22-4l15-7-14 3a143 143 0 0 1-18 4l-11 2c-8 1-13 0-23-3-5-1-5-4-2-20 1-6 1-7 2-6 11 5 41-1 55-10l1-1h-3l-11 4-12 4-17 1-13-1 4-16c3-4 15-12 22-14 9-2 18-3 26 0m33 0v3-5 2m4-1-1 3 1-1v-2m-74 1-4 2c-3 3-4 3-4 2l1-2v1l-1 2h1a55 55 0 0 1 8-5h-1m50 1 12 10 5 4 1-2h-1c0 2 0 2-5-3a83 83 0 0 0-12-9m108 0v1l1-1-1-1v1m-89 4v4-6 2m110-1 1 1v-1h-1m-106 3v2-5 3m-100 1-1 3 3-5c0-2 0-1-2 2m183-2h1v-1l-1 1m-174 10a107 107 0 0 0-11 32c-2 7-2 14-1 21v2l-1 1c-3 2-3 2-5-4l-1-2c0 3 3 8 4 7 3-2 5-2 8-1l1-6a230 230 0 0 1 10-58l-4 8m141-10 1 1 1-1h-2m-155 3 1 1v-1h-1m157 1c-2 0-2-1 0 5 2 5 1 5 3 3l2-4c3-4 1-5-5-4m-57 0v2c0 1 0 1 0 0v-2c0-1 0-1 0 0m4 1v2-3 1m-101 2a89 89 0 0 1-4 10l1-3a160 160 0 0 1 3-7m208 0v1-2 1m-108 1v2l1-1v-2l-1 1m63 0v1-2 1m33 2-2 3 1-5c1-1 1 1 1 2m-97 1v1h1v-1h-1m108 2v1l1-1-1-1v1m-14 1-2 8c-1 3-2 3-3 2l-6-4v-2l1-2 1-2h9m-96 3c0 3 0 4 1 1v-2l-1 1m109 2 1 1-1-2v1m-110 3v1c0 1 0 0 0 0v-1m-103 2v3l1-2c1-3 0-4-1-1m212 0h1v-1l-1 1m-110 1v1h1v-1h-1m63 0v1l1-1h-1m33 2c2 4 0 8-3 9-2 2-3 1-2-1l2-5c1-5 2-5 3-3m-199 1v2-2m103 0-1 1h1v-1m-107 1v1-2 1m216 1 1 1v-2l-1 1m-110 2v12-12m-103 1v3l1-2v-3l-1 2m185 0 9 5-6 10-2-3c-1-3-8-9-10-9-1 0 0-2 2-3h7m-16 0v1-2 1m1 1s-1 0 0 0l1-1c0 1 0 1 0 0l-1 1m-174 0v1h1l-1-1m217 3v1-2 1m-218 9v6-11 5m217-4v1l1-1h-1m-109 4 1 1c0 1 0 0 0 0 0-2-1-2-1-1m108 1h1l-1-1v1m-107 1 5 9-2-2-2-5-1-2m83 3c-1 3-3 5-5 5s-2 0 2-4c3-3 3-3 3-1m23 0 1 1v-2l-1 1m-109 3h2c1 1 1 1 0 0l-1-1-1 1m61 0-3 6 1-3 3-3h1-2m3 1 1 1 1 1-1-2h-1m-165 1 1 2v1-3l-1-1v1m105 2 3 4v2l-1 1 3-1-1-2-3-3-1-1m6 2 9 6 1-1v-1 1l-1 1-9-7-2-2 2 3m56 0v1-3 2m42-2v1-1m-112 3v2l1-1c0-2 0-3-1-1m53-1 4 3h1c0-1-3-3-5-3-1 0-1 0 0 0m-153 1v1-2 1m130 0c-1 0-1 0 0 0h1v-1l-1 1m81 0v1l1-1-1-1v1m-49 0 3 4c2 2 5 1 5-2l-1 1c-1 3-3 2-6-1l-1-2m-35 1-2 1h1l2-1 1-1-2 1m10-1 2 2 1 2-1-2-2-1v-1m11 1-1 1 1-1 1-1-1 1m62 1v1l1-1-1-1v1m-210 0 1 1c1 0 0 2-2 2l-2 1h2l3-2-2-2m144 1v4-1l1-3 1-1-2 1m-12-1h1-1s-1 0 0 0m4 2-2-2 2 2m22 1v2-3 1m-56-1 7 1-2-1h-5c-1-1-2-1 0 0m25 0v1c0 1 0 1 0 0l1-1h-1m-137 3v2l1-2-1-2v2m3-2v3h3v-1l-1 1c-1 1-3-2-1-3h-1m215 1 1 1v-1h-1m-47 4c-2 7-9 10-13 5-4-3-6-4-6-2v2l-1 2-3 3c-2 1-2 1-2 5v4h34l1-5v-16h-1c-2 1-5 0-6-1h-2l-1 3m-23 0c0 3 0 3-2 5v1c2-1 3-5 2-8v2m-128-2-2 2v1l1-1 1-2c2-1 1-1 0 0m-9 0 1 1 1-1h-2m207 1v-1 1m-81 0 1 2v-2h-1m-112 2v1-2 1m133 1 2 1-2-1-1-2 1 2m-156-1 2 1 2-1h-4m15 2-1 1 1-1 1-2-1 2m7 1v1l1-2-1 1m137 0h3l-2-1-1 1m-22 1 2 2-1-1-1-1m3 3 3-1h-2l-1 1m-120 0v1c0 1 0 1 0 0v-1m-5 2 3 2 2-2-1 1h-3l-1-1m9 1h1-1m-8 4h1-1m3 0h1-1m6 2 1 1v-2l-1 1m178 1-1 1 2-2-1 1"
                    />
                  </g>
                </svg>
              </div>
              <ul className="pickavt__body-mid-items grid grid-cols-3">
                {renderBody()}
              </ul>
            </div>
          </div>

          <AvatarRight
            randomSkin={randomSkin}
            addDino={addDino}
            currentBody={currentBody}
            currentHeaddress={currentHeaddress}
            currentEyes={currentEyes}
            currentMouth={currentMouth}
            currentClothes={currentClothes}
            currentStuff={currentStuff}
            currentBackground={currentBackground}
            balance={socialfiAccount.length}
            Body={Body}
            Headdress={Headdress}
            Eyes={Eyes}
            Mouth={Mouth}
            Clothes={Clothes}
            Stuff={Stuff}
            Background={Background}
            contract={contract}
            loading={loading}
            preview={preview}
            getCurentBody={getCurentBody}
            refCurrent={ref.current}
            st1={st1}
            st2={st2}
            st3={st3}
            st4={st4}
            bodyBase64={bodyBase64}
          />
        </div>
      </div>
    </PickAvt>
  );
}
