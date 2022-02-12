import React, { useState } from "react";
import { AiOutlinePoweroff, AiFillCheckCircle } from "react-icons/ai";
import { FcCurrencyExchange } from "react-icons/fc";
import { BsFillTrashFill, BsCheckLg } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiLinkExternal, BiCopy } from "react-icons/bi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useMoralis } from "react-moralis";
import axios from "axios";

import {
  connectMetaMask,
  connectWallet,
  logoutConnectWallet,
  logoutMetaMask,
} from "../store/actions/connectWallet";
import { changeStatusModal } from "../store/actions/homeAction";
import { useTranslation } from "react-i18next";
import { ConstructionSharp } from "@mui/icons-material";

function Modal() {
  const {
    account,
    Moralis,
    user
  } = useMoralis();
  console.log('account',account)
  const [statusFocus, setStatusFocus] = useState("Ethereum");
  const [verify, setVerify] = useState(false);
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  // const account = useSelector((state) => state.wallet.account);
  const balance = useSelector((state) => state.wallet.balance);
  const curentAccount = useSelector((state) => state.wallet.account);
  const metaMaskConnect = useSelector((state) => state.wallet.metaMaskConnect);
  const connectWalletConnect = useSelector(
    (state) => state.wallet.connectWalletConnect
  );
  const { t } = useTranslation();
  const changeStatusModals = () => {
    dispatch(changeStatusModal());
  };

  const connectMetaMaskApp = async () => {
    let user = Moralis.User.current();
    if (!user || !account) {
      user = await Moralis.authenticate();
      let accounts = user.get("ethAddress")
      await axios
        .get(
          `https://deep-index.moralis.io/api/v2/${accounts}/balance?chain=rinkeby`,
          {
            headers: {
              "X-API-KEY":
                "RroMDNZejyOeJhZw0zRgk0roGFAExsYXWG2holPnZoxVjOw7LcGN97BfOV6HVc2p",
              accept: "application/json",
            },
          } 
        )
        .then((value) => {
          dispatch(connectMetaMask(accounts, value.data.balance));
        });
    }
  
    
  };

  const disConnectMetaMaskApp =async () => {
    await Moralis.User.logOut();
    dispatch(logoutMetaMask());
  };

  const disConnectWalletApp = () => {
    dispatch(logoutConnectWallet());
  };

  const Modal = styled.div`
    .modalBackground {
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.8);
      position: fixed;
      display: flex;
      top: 0;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modalContainer {
      max-width: 480px;
      max-height: 600px;
      border-radius: 12px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      display: flex;
      flex-direction: column;
      padding: 18px;
      background-color: ${(props) => props.theme.bgHeaderItem};
      color: ${(props) => props.theme.textBody};
      z-index: 99999999999;
      position: fixed;
      right: calc(50% - 233px);
      top: 5%;
      transform: color 0.15s ease-in-out 0s,
        background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s,
        box-shadow 0.15s ease-in-out 0s;

      .title {
        margin: 10px 0 20px 0;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: bold;

        p {
          font-size: 20px;
        }
        .title__name {
          color: ${(props) => props.theme.borderBtn};
        }

        .modalContainer__title-eth {
          display: flex;
          margin: auto 0;

          .modalContainer__title-docs {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            padding: 3px;
            background: rgba(255, 255, 255, 0.3);
            margin: auto;
          }

          span {
            margin-left: 6px;
          }

          .modalContainer__title-docs::after {
            content: "";
            display: block;
            width: 6px;
            height: 6px;
            background: rgb(255, 255, 255);
            border-radius: 50%;
          }
        }
      }
      .title__name-wallet {
        font-size: 16px;
        margin-bottom: 18px;
        opacity: 0.6;
      }
      .body {
        font-size: 14px;
        .body__main {
          padding: 24px 20px;
          background: url("data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2292px%22%20height%3D%22151px%22%20viewBox%3D%220%200%2092%20151%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3Eeth-icon%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%226.83577292%25%22%20x2%3D%2250%25%22%20y2%3D%22100%25%22%20id%3D%22linearGradient-1%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23333336%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%231A1A1B%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%226.83577292%25%22%20x2%3D%2250%25%22%20y2%3D%22100%25%22%20id%3D%22linearGradient-2%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23333336%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%231A1A1B%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%226.83577292%25%22%20x2%3D%2250%25%22%20y2%3D%22100%25%22%20id%3D%22linearGradient-3%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%231A1A1B%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23333336%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%226.83577292%25%22%20x2%3D%2250%25%22%20y2%3D%22100%25%22%20id%3D%22linearGradient-4%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23333336%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%231A1A1B%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%226.83577292%25%22%20x2%3D%2250%25%22%20y2%3D%22100%25%22%20id%3D%22linearGradient-5%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23333336%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%231A1A1B%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%226.83577292%25%22%20x2%3D%2250%25%22%20y2%3D%22100%25%22%20id%3D%22linearGradient-6%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%231A1A1B%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23333336%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22%E8%A1%A5%E5%85%85%E9%9C%80%E6%B1%82%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E9%92%B1%E5%8C%85-%E6%89%8B%E6%9C%BA%22%20transform%3D%22translate%28-176.000000%2C%20-250.000000%29%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E5%BC%B9%E7%AA%97%22%20transform%3D%22translate%2818.000000%2C%20158.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-6%22%20transform%3D%22translate%2820.000000%2C%2092.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22eth-icon%22%20transform%3D%22translate%28138.000000%2C%200.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20id%3D%22%E8%B7%AF%E5%BE%84%22%20fill%3D%22url%28%23linearGradient-1%29%22%20opacity%3D%220.900000036%22%20points%3D%2246%20113.440385%2046%20150.940385%2092%2086.1326923%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20id%3D%22%E8%B7%AF%E5%BE%84%22%20fill%3D%22url%28%23linearGradient-2%29%22%20points%3D%2246%2055.5761538%2046%20103.845%2092%2076.5376923%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20id%3D%22%E8%B7%AF%E5%BE%84%22%20fill%3D%22url%28%23linearGradient-3%29%22%20points%3D%2246%201.31860335e-12%2046%2055.5769231%2092%2076.5380769%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20id%3D%22%E8%B7%AF%E5%BE%84%22%20fill%3D%22url%28%23linearGradient-4%29%22%20opacity%3D%220.600000024%22%20points%3D%2245.9996167%20113.440385%2045.9996167%20150.940385%209.68292113e-12%2086.1326923%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20id%3D%22%E8%B7%AF%E5%BE%84%22%20fill%3D%22url%28%23linearGradient-5%29%22%20opacity%3D%220.699999988%22%20points%3D%2245.9996167%2055.5761538%2045.9996167%20103.845%209.68292113e-12%2076.5376923%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20id%3D%22%E8%B7%AF%E5%BE%84%22%20fill%3D%22url%28%23linearGradient-6%29%22%20opacity%3D%220.400000006%22%20points%3D%2245.9996167%201.31860335e-12%2045.9996167%2055.5769231%209.68292113e-12%2076.5380769%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E");
          border-radius: 12px;
          border: 2px solid ${(props) => props.theme.borderBtn};
          background-color: rgb(26, 26, 27);
          background-repeat: no-repeat;
          text-align: right;
          background-position: right 22% top 0px;
          .body__total {
            font-size: 20px;
            font-weight: bold;
            .body__balance {
              width: 100%;
              .img__eth {
                width: 32px;
                height: 32px;
                background: #ccc;
                border-radius: 50%;
                padding-left: 8px;
                padding-top: 4px;
                margin-right: 12px;
                img {
                  height: 24px;
                }
              }
            }
          }
        }
        .body__select-items {
          justify-content: space-between;
          margin-top: 18px;
          .body__select-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            font-size: 14px;
            padding: 12px 16px;
            background: #373739;
            cursor: pointer;
            .select-icon {
              font-size: 28px;
              margin-bottom: 6px;
            }
          }
          .body__select-item:hover {
            opacity: 0.8;
          }
        }
        .body__checkbox {
          display: flex;
          padding: 16px;
          font-weight: 600;
          background: #37362a;
          border-radius: 3px;

          .checkbox {
            display: flex;
            width: 16px;
            height: 16px;
            border: 1px solid #ffe804;
            border-radius: 4px;
            transition: all 150ms ease 0s;
            cursor: pointer;
            margin-top: 4px;
            color: #ffe804;
            background-color: #ffe804;
          }

          p {
            margin-left: 6px;

            span {
              color: #ffe804;
            }
          }
        }

        .select__network {
          .select__network-header {
            margin: 12px 0;
            color: rgb(133, 133, 141);
          }

          .select__networt-items {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 12px;

            .select__networt-item {
              display: flex;
              padding: 12px;
              background: #373739;
              justify-content: center;
              border-radius: 5px;
              position: relative;
              font-weight: 600;
              cursor: pointer;

              img {
                width: 24px;
                height: 24px;
              }

              span {
                margin: auto 0 auto 6px;
              }

              .icon-active {
                position: absolute;
                right: -8px;
                bottom: -6px;
              }
            }

            .select__networt-item:hover {
              background: #4f4f52;
            }
          }
        }
      }

      .footer {
        font-size: 14px;
        margin-bottom: 24px;
        .footer__buy {
          font-size: 18px;
          font-weight: bold;
          margin: 18px 0;
        }

        .footer__recent {
          cursor: pointer;
          .footer__recent-clear {
            margin: auto 0;
            color: #ff5072;
            .icon-trash {
              margin: auto;
            }
            p {
              margin-left: 6px;
            }
          }
        }
        .footer__transfer {
          background: #373739;
          width: 148px;
          text-align: center;
          display: flex;
          justify-content: center;
          padding: 6px;
          cursor: pointer;

          p {
            line-height: 28px;
          }
          .icon-transfer {
            font-size: 28px;
            margin-right: 6px;
          }
        }
        .footer__transfer:hover {
          opacity: 0.8;
        }
        .footer__header {
          margin: 12px 0;
          color: #85858d;
        }

        .footer__body {
          .footer__body-item {
            .footer__body-img {
              background: #373739;
              width: 64px;
              border-radius: 50%;
              height: 64px;
              cursor: pointer;
              font-weight: 600;
              margin: auto;
              position: relative;
              .img-coin {
                padding: 12px;
              }
              .footer__checked {
                position: absolute;
                right: 0px;
                bottom: 0px;
                padding: 2px;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background-color: rgb(42, 42, 45);
                .padding__checked {
                  display: inline-flex;
                  -webkit-box-pack: center;
                  justify-content: center;
                  -webkit-box-align: center;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  background: rgb(0, 250, 217);
                }
              }
            }

            p {
              text-align: center;
            }

            .footer__body-img:hover {
              opacity: 0.8;
            }
          }
        }
        .disable-check {
          opacity: 0.5;
          .footer__body-img:hover {
            opacity: 1 !important;
          }
        }
      }
    }

    .titleCloseBtn {
      position: absolute;
      bottom: -64px;
      left: 46%;
      padding: 11px 17px;
      background-color: ${(props) => props.theme.bgHeaderItem};
      border-radius: 50%;
      color: black;
      font-size: 16px;
      color: white;
      font-weight: 600;
      cursor: pointer;
    }

    .titleCloseBtn button {
      background-color: ${(props) => props.theme.borderBtn};
      border: none;
      font-size: 25px;
      cursor: pointer;
      color: ${(props) => props.theme.borderBtn};
    }

    @-webkit-keyframes fade-in-fwd {
      0% {
        -webkit-transform: translateZ(-80px);
        transform: translateZ(-80px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
      }
    }
    @keyframes fade-in-fwd {
      0% {
        -webkit-transform: translateZ(-80px);
        transform: translateZ(-80px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
      }
    }
    @media screen and (max-width: 767px) {
      .modalContainer {
        max-height: calc(100vh - 120px);
        max-width: 91vw;
        right: 17px;
      }
    }
  `;
  console.log(curentAccount ,user)
  return (
    <Modal>
      <div
        className="modalBackground"
        onClick={() => changeStatusModals()}
      ></div>
      { curentAccount && !change  && account? (
        <div className="modalContainer">
          <div className="titleCloseBtn" onClick={() => changeStatusModals()}>
            <span> X </span>
          </div>
          <div className="title">
            <p className="title__name">
              {`${curentAccount.slice(0, 4)}...${curentAccount.slice(
                curentAccount.length - 4,
                curentAccount.length
              )}`}
            </p>
            <div className="modalContainer__title-eth">
              <div className="modalContainer__title-docs"> </div>
              <span> ETH </span>
            </div>
          </div>
          <p className="title__name-wallet"> MetaMask </p>
          <div className="body">
            <div className="body__main">
              <div className="flex body__total">
                <div className="body__balance flex">
                  <div className="img__eth">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png"
                      alt=""
                    />
                  </div>
                  <p> ETH </p>
                </div>
                <p> {balance} </p>
              </div>
              <p>
                {" "}
                $
                {Number(
                  parseFloat(balance * 3718.14).toFixed(2)
                ).toLocaleString()}{" "}
              </p>
            </div>
            <ul className="body__select-items grid grid-cols-4 gap-2  ">
              <li className="body__select-item">
                <BiLinkExternal className="select-icon" />
                <p> View </p>
              </li>
              <li className="body__select-item">
                <BiCopy className="select-icon" />
                <p> Copy </p>
              </li>
              <li
                className="body__select-item"
                style={{ color: "#00fad9" }}
                onClick={() => {
                  setChange(!change);
                  setVerify(true);
                }}
              >
                <HiOutlineSwitchHorizontal className="select-icon" />
                <p> Switch </p>
              </li>
              <li
                className="body__select-item"
                style={{ color: "#ff5072" }}
                onClick={() => {
                  if (metaMaskConnect) {
                    disConnectMetaMaskApp();
                  } else {
                    disConnectWalletApp();
                  }
                }}
              >
                <AiOutlinePoweroff className="select-icon" />
                <p> Disconnect </p>
              </li>
            </ul>
          </div>
          <div className="footer">
            <p className="footer__buy"> Buy Crypto</p>
            <div className="footer__transfer flex">
              <FcCurrencyExchange className="icon-transfer" />
              <p>Transak</p>
            </div>

            <div className="footer__recent flex justify-between">
              <p className="footer__buy">Recent Transactions</p>
              <div className="flex footer__recent-clear">
                <BsFillTrashFill className="icon-trash" />
                <p>Clear all</p>
              </div>
            </div>
            <p style={{ opacity: "0.7" }}>No results found</p>
          </div>
        </div>
      ) : (
        <div className="modalContainer">
          <div className="titleCloseBtn" onClick={() => changeStatusModals()}>
            <span>X</span>
          </div>
          <div className="title">
            {!change ? (
              <p>{t("Modal.connect")}</p>
            ) : (
              <div className="title__body w-full flex">
                <IoMdArrowRoundBack
                  style={{
                    fontSize: "24px",
                    opacity: "0.6",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setChange(!change);
                  }}
                />
                <p style={{ margin: "auto" }}>Switch Wallet</p>
              </div>
            )}

            <div className="modalContainer__title-eth">
              <div className="modalContainer__title-docs"></div>
              <span>ETH</span>
            </div>
          </div>
          <div className="body">
            <div className="body__checkbox">
              <input
                type="checkbox"
                className="checkbox"
                checked={verify}
                onChange={() => setVerify(!verify)}
              />
              <p>
                {t("Modal.checkboxLeft")}
                <span>{t("Modal.checkboxRight")}</span>
              </p>
            </div>
            <div className="select__network">
              <p className="select__network-header">
                {t("Modal.selectNetwork")}
              </p>
              <div className="select__networt-items grid grid-cols-2 gap-5">
                <div
                  className="select__networt-item"
                  onClick={() => setStatusFocus("Ethereum")}
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAACBFBMVEUAAADv7//09PTy8vXx9Pbz9Pjy9ffy9fjy9Pfx9Pfy9Pby9Pfx8/Xz8/Py8vTx9Pjv7/fy9Pfy9Pfy9ffz9ffy8/b09vjy9fXz9Pb09/ry9Pjz9fnv7/Tv9PTk5uiCg4Ssra9jZGWQkpTIycw7PDza296QkZIvMDBgYWK6vL21t7lHSUnm6OqEhojNz9Ly9PSztLednqB4envBw8Xv8vWen6Hv8/NsbW7x8/bP0NOpqqyJiovz8/dUVVXv7++lpqjy8/jz9Pbx9PZ9fn9bXF01NjYdHh4sLCw5Ojo0NTUwMTETExNucHBISElgYWE+Pz9zdHUaGhomJyfv7/oWFxckJSUtLi7x8vV4eXpRUlMhISHx8/Z1d3fy9PdnaGlERkaEhYZ6fHxrbW1AQUGDhYVWV1cqKipERUVOT1BcXV6LjI1iY2QyMzNMTU7Fx8lLTU2Sk5ba3N+HiIpKS0zW2Nt7fH4vLy+6vL6rrK6ChIXk5umfoKJYWVpXWVmQkpPd3+GTlJaXmJnOz9Lm5+qFhoepq6y6u77r7fB1dneRkpQ7PT2EhoeQkZPIysxISUnW2NrW19uztLa3uLqXmJp4enpTVVVvcHKsrrBmZ2g8PT2eoKJsbm+en6A9PT7v8/dsbm7BwsXd3+KEhYfx8/fy9fbP0dPx9Pjx8/bv8veJiozy9fnv8vQEFD2BAAAArHRSTlMAEDBQcI+fr7/f7/+AQGDPIJ9g33+vb1CPX+9/MDD//////////////////////2D/////UP9A/5D///9A/xD/r8/P/////////////////////zD///+g////sP/f/////////////////////////////////////////////////////////////////////////////////////0D/////gK//cO9g/1BgIk4dsgAACKdJREFUeNrM1YV1wEAMA9BjsMJOGfYfszBA0YnyJ5De6fmcPR9iyqW23gWfpPfWypBi8O7afEi5Cb4gLafxouGnPOOH5hyXa4Ufc8cvzWu8SvrUBH9Tt4U/nIZ/aZt3PGMW/JusI206MKIbIf4uMKTr4s60ZIG1EyssKwwYVGCMh19hFxxI09GHU3EwjUeu5wYGeDu6FRig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"
                    alt=""
                  />
                  <span>Ethereum</span>
                  {statusFocus === "Ethereum" ? (
                    <AiFillCheckCircle
                      className="icon-active"
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#00fad9",
                        background: "black",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className="select__networt-item"
                  onClick={() => setStatusFocus("Binance")}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%227.5in%22%20height%3D%227.5in%22%20version%3D%221.1%22%20style%3D%22shape-rendering%3AgeometricPrecision%3B%20text-rendering%3AgeometricPrecision%3B%20image-rendering%3AoptimizeQuality%3B%20fill-rule%3Aevenodd%3B%20clip-rule%3Aevenodd%22%20viewBox%3D%220%200%207500%207500%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20%20%20%20%20.fil0%20%7Bfill%3Anone%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil1%20%7Bfill%3A%23f0b90b%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil2%20%7Bfill%3A%23fff%7D%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Layer_x0020_1%22%3E%20%20%20%20%20%20%20%20%3Cmetadata%20id%3D%22CorelCorpID_0Corel-Layer%22%2F%3E%20%20%20%20%20%20%20%20%3Crect%20class%3D%22fil0%22%20width%3D%227500%22%20height%3D%227500%22%2F%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22_2419820813232%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20class%3D%22fil1%22%20cx%3D%223750%22%20cy%3D%223750%22%20r%3D%223500%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil2%22%20d%3D%22M2779%203351l971%20-971%20971%20972%20565%20-565%20-1536%20-1537%20-1536%201536%20565%20565%200%200zm-1529%20399l565%20-565%20565%20565%20-565%20565%20-565%20-565zm1529%20399l971%20971%20971%20-972%20566%20565%200%200%20-1537%201537%20-1536%20-1536%20-1%20-1%20566%20-564%200%200zm2341%20-399l565%20-565%20565%20565%20-565%20565%20-565%20-565z%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil2%22%20d%3D%22M4380%203750l0%200%20-630%20-632%20-466%20467%200%200%20-54%2054%20-111%20111%20-1%201%201%201%20630%20630%20631%20-631%200%200%200%200%200%20-1zm0%200l0%200%200%200z%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3Cstyle%20xmlns%3D%22%22%3E%23yddContainer%7Bdisplay%3Ablock%3Bfont-family%3AMicrosoft%20YaHei%3Bposition%3Arelative%3Bwidth%3A100%25%3Bheight%3A100%25%3Btop%3A-4px%3Bleft%3A-4px%3Bfont-size%3A12px%3Bborder%3A1px%20solid%7D%23yddTop%7Bdisplay%3Ablock%3Bheight%3A22px%7D%23yddTopBorderlr%7Bdisplay%3Ablock%3Bposition%3Astatic%3Bheight%3A17px%3Bpadding%3A2px%2028px%3Bline-height%3A17px%3Bfont-size%3A12px%3Bcolor%3A%235079bb%3Bfont-weight%3Abold%3Bborder-style%3Anone%20solid%3Bborder-width%3A1px%7D%23yddTopBorderlr%20.ydd-sp%7Bposition%3Aabsolute%3Btop%3A2px%3Bheight%3A0%3Boverflow%3Ahidden%7D.ydd-icon%7Bleft%3A5px%3Bwidth%3A17px%3Bpadding%3A0px%200px%200px%200px%3Bpadding-top%3A17px%3Bbackground-position%3A-16px%20-44px%7D.ydd-close%7Bright%3A5px%3Bwidth%3A16px%3Bpadding-top%3A16px%3Bbackground-position%3Aleft%20-44px%7D%23yddKeyTitle%7Bfloat%3Aleft%3Btext-decoration%3Anone%7D%23yddMiddle%7Bdisplay%3Ablock%3Bmargin-bottom%3A10px%7D.ydd-tabs%7Bdisplay%3Ablock%3Bmargin%3A5px%200%3Bpadding%3A0%205px%3Bheight%3A18px%3Bborder-bottom%3A1px%20solid%7D.ydd-tab%7Bdisplay%3Ablock%3Bfloat%3Aleft%3Bheight%3A18px%3Bmargin%3A0%205px%20-1px%200%3Bpadding%3A0%204px%3Bline-height%3A18px%3Bborder%3A1px%20solid%3Bborder-bottom%3Anone%7D.ydd-trans-container%7Bdisplay%3Ablock%3Bline-height%3A160%25%7D.ydd-trans-container%20a%7Btext-decoration%3Anone%3B%7D%23yddBottom%7Bposition%3Aabsolute%3Bbottom%3A0%3Bleft%3A0%3Bwidth%3A100%25%3Bheight%3A22px%3Bline-height%3A22px%3Boverflow%3Ahidden%3Bbackground-position%3Aleft%20-22px%7D.ydd-padding010%7Bpadding%3A0%2010px%7D%23yddWrapper%7Bcolor%3A%23252525%3Bz-index%3A10001%3Bbackground%3Aurl%28chrome-extension%3A%2F%2Feopjamdnofihpioajgfdikhhbobonhbb%2Fab20.png%29%3B%7D%23yddContainer%7Bbackground%3A%23fff%3Bborder-color%3A%234b7598%7D%23yddTopBorderlr%7Bborder-color%3A%23f0f8fc%7D%23yddWrapper%20.ydd-sp%7Bbackground-image%3Aurl%28chrome-extension%3A%2F%2Feopjamdnofihpioajgfdikhhbobonhbb%2Fydd-sprite.png%29%7D%23yddWrapper%20a%2C%23yddWrapper%20a%3Ahover%2C%23yddWrapper%20a%3Avisited%7Bcolor%3A%2350799b%7D%23yddWrapper%20.ydd-tabs%7Bcolor%3A%23959595%7D.ydd-tabs%2C.ydd-tab%7Bbackground%3A%23fff%3Bborder-color%3A%23d5e7f3%7D%23yddBottom%7Bcolor%3A%23363636%7D%23yddWrapper%7Bmin-width%3A250px%3Bmax-width%3A400px%3B%7D%3C%2Fstyle%3E%3C%2Fsvg%3E"
                    alt=""
                  />
                  <span>Binance</span>
                  {statusFocus === "Binance" ? (
                    <AiFillCheckCircle
                      className="icon-active"
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#00fad9",
                        background: "black",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="select__networt-items grid grid-cols-2 gap-5">
                <div
                  className="select__networt-item"
                  onClick={() => setStatusFocus("Heco")}
                >
                  <img
                    src="data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22path-1%22%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%3E%3C%2Fcircle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22%E8%A1%A5%E5%85%85%E9%9C%80%E6%B1%82%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E8%BF%9E%E6%8E%A5%E9%92%B1%E5%8C%85-%E6%89%8B%E6%9C%BA%22%20transform%3D%22translate%28-77.000000%2C%20-389.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E5%BC%B9%E7%AA%97%22%20transform%3D%22translate%2818.000000%2C%20132.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-2%E5%A4%87%E4%BB%BD%22%20transform%3D%22translate%2820.000000%2C%20246.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84%22%20transform%3D%22translate%2839.000000%2C%2011.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cmask%20id%3D%22mask-2%22%20fill%3D%22white%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fmask%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20id%3D%22%E8%92%99%E7%89%88%22%20fill%3D%22%23FFFFFF%22%20xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22heco%22%20mask%3D%22url%28%23mask-2%29%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%286.000000%2C%203.000000%29%22%20id%3D%22%E8%B7%AF%E5%BE%84%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M8%2C5.5394573%20C8%2C2.9553776%206.69291824%2C0.732436966%205.69924793%2C0.00865379012%20C5.69451983%2C0.00713641481%205.62366129%2C-0.0323151355%205.62995609%2C0.0708656239%20C5.62995609%2C0.0723832069%205.62838239%2C0.0723832069%205.62838239%2C0.0739007899%20C5.54649394%2C5.06452028%202.90089834%2C6.4164915%201.44581867%2C8.23885807%20C-1.91157276%2C12.4435046%201.21117623%2C17.0532322%204.39062044%2C17.9044495%20C6.17009952%2C18.3809096%203.9796045%2C17.0608478%203.69772303%2C14.2718736%20C3.35599892%2C10.9018285%208%2C8.32989921%208%2C5.5394573%20Z%22%20fill%3D%22%232D3338%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M9.52866244%2C7.01281083%20C9.50640749%2C6.9988161%209.47564553%2C6.98955696%209.45339058%2C7.02206997%20C9.39353768%2C7.66342435%208.67013794%2C9.03589727%207.75350752%2C10.2952815%20C4.64446849%2C14.5677025%206.41618263%2C16.6280375%207.41322708%2C17.7340452%20C7.99124809%2C18.3769545%207.41322708%2C17.7340452%208.8582796%2C17.0772824%20C8.9711494%2C17.0261098%2011.6800247%2C15.6505269%2011.9724532%2C12.5166973%20C12.2580457%2C9.48203226%2010.2452262%2C7.56892459%209.52866244%2C7.01281083%20Z%22%20fill%3D%22%2301943F%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt=""
                  />
                  <span>Heco</span>
                  {statusFocus === "Heco" ? (
                    <AiFillCheckCircle
                      className="icon-active"
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#00fad9",
                        background: "black",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>

                <div
                  className="select__networt-item"
                  onClick={() => setStatusFocus("Polygon")}
                >
                  <img
                    src="data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Ctitle%3E%E5%B8%81%E7%A7%8D%E5%A4%87%E4%BB%BD%202%3C%2Ftitle%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22path-1%22%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%3E%3C%2Fcircle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22%E8%A1%A5%E5%85%85%E9%9C%80%E6%B1%82%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E8%BF%9E%E6%8E%A5%E9%92%B1%E5%8C%85-%E6%89%8B%E6%9C%BA%E5%A4%87%E4%BB%BD%22%20transform%3D%22translate%28-223.000000%2C%20-266.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E5%BC%B9%E7%AA%97%22%20transform%3D%22translate%2818.000000%2C%20132.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-4%22%20transform%3D%22translate%2820.000000%2C%2041.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-2%E5%A4%87%E4%BB%BD-2%22%20transform%3D%22translate%28156.000000%2C%2082.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E7%BC%96%E7%BB%84%22%20transform%3D%22translate%2829.000000%2C%2011.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cmask%20id%3D%22mask-2%22%20fill%3D%22white%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23path-1%22%3E%3C%2Fuse%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fmask%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22%E8%92%99%E7%89%88%22%3E%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22download%22%20mask%3D%22url%28%23mask-2%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22%E6%A4%AD%E5%9C%86%E5%BD%A2%22%20fill%3D%22%238247E5%22%20fill-rule%3D%22nonzero%22%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%3E%3C%2Fcircle%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M8.01148%2C5.30068%20C8.25312%2C5.16644%208.54688%2C5.16644%208.78852%2C5.30068%20L12.38852%2C7.30068%20C12.64248%2C7.44176%2012.8%2C7.70948%2012.8%2C8%20L12.8%2C9.30068%20L11.2%2C10.2%20L11.2%2C8.47072%20L8.4%2C6.91516%20L5.6%2C8.47072%20L5.6%2C11.52928%20L8.4%2C13.08484%20L15.21148%2C9.30068%20C15.45312%2C9.16644%2015.74688%2C9.16644%2015.98852%2C9.30068%20L19.58852%2C11.30068%20C19.84248%2C11.44176%2020%2C11.70948%2020%2C12%20L20%2C16%20C20%2C16.29052%2019.84248%2C16.55824%2019.58852%2C16.69932%20L15.98852%2C18.69932%20C15.74688%2C18.83356%2015.45312%2C18.83356%2015.21148%2C18.69932%20L11.61148%2C16.69932%20C11.35752%2C16.55824%2011.2%2C16.29052%2011.2%2C16%20L11.2%2C14.69932%20L12.8%2C13.8%20L12.8%2C15.52928%20L15.6%2C17.08484%20L18.4%2C15.52928%20L18.4%2C12.47072%20L15.6%2C10.91516%20L8.78852%2C14.69932%20C8.54688%2C14.83356%208.25312%2C14.83356%208.01148%2C14.69932%20L4.41148%2C12.69932%20C4.15752%2C12.55824%204%2C12.29052%204%2C12%20L4%2C8%20C4%2C7.70948%204.15752%2C7.44176%204.41148%2C7.30068%20L8.01148%2C5.30068%20Z%22%20id%3D%22%E8%B7%AF%E5%BE%84%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt=""
                  />
                  <span>Polygon</span>
                  {statusFocus === "Polygon" ? (
                    <AiFillCheckCircle
                      className="icon-active"
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#00fad9",
                        background: "black",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="select__networt-items grid grid-cols-2 gap-5">
                <div
                  className="select__networt-item"
                  onClick={() => setStatusFocus("Arbitrum")}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg%20height%3D%22692pt%22%20viewBox%3D%220%200%20619%20692%22%20width%3D%22619pt%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m280.46%2017.3c18.85-10.03%2043.1-9.37%2061.23%201.99%2078.77%2045.29%20157.52%2090.59%20236.28%20135.88%2017.98%2010.27%2030.16%2030.12%2030.76%2050.87v275.89c.49%2019.03-8.56%2038.11-23.76%2049.6-83.95%2048.66-167.91%2097.29-251.9%20145.88-14.93%205.88-32.32%205.81-47.05-.66-10.1-5.39-19.93-11.25-29.88-16.91-25.72-14.85-51.49-29.62-77.2-44.49%207.13-11.82%2013.88-23.88%2021.17-35.61%2034.11%2019.55%2068.15%2039.21%20102.24%2058.77%205.43%202.44%2012.28%202.51%2017.36-.81%2028.11-16.31%2056.23-32.61%2084.36-48.89%2028.58-16.52%2057.15-33.07%2085.69-49.67%207.92-4.6%2015.84-9.2%2023.78-13.77%2014.97-8.59%2029.86-17.33%2044.83-25.93%205.77-3.22%208.74-10.05%208.75-16.47-.04-14.36.09-28.73-.07-43.09.18-76.95.01-153.9.09-230.85.24-7.26-3.78-14.44-10.07-18.06-79.37-45.64-158.72-91.3-238.08-136.94-6.26-3.47-14.38-3.15-20.42.66-78.73%2045.56-157.48%2091.1-236.15%20136.78-6.59%203.53-10.68%2011.06-10.31%2018.5.21%2073.45.1%20146.9.48%20220.34-12.68%2020.02-25.84%2039.75-38.67%2059.68-.95%201.49-1.95%202.96-3.1%204.31-.23-95.74-.02-191.5-.1-287.25.31-22.52%2014.44-43.97%2034.72-53.61%2078.35-45.36%20156.61-90.87%20235.02-136.14z%22%20fill%3D%22%238cbfdf%22%2F%3E%3Cpath%20d%3D%22m298.57%2054.69c6.04-3.81%2014.16-4.13%2020.42-.66%2079.36%2045.64%20158.71%2091.3%20238.08%20136.94%206.29%203.62%2010.31%2010.8%2010.07%2018.06-.08%2076.95.09%20153.9-.09%20230.85-6.25-8.84-11.77-18.21-17.74-27.25-38.11-59.38-76.26-118.73-114.34-178.12l-.71.13c-16.14%2027.89-32.81%2055.48-48.94%2083.38%2042.77%2069.1%2085.49%20138.23%20128.22%20207.35-7.94%204.57-15.86%209.17-23.78%2013.77-40.35-63.61-80.71-127.22-121.07-190.83l-.73-.41c-19.01%2031.61-37.43%2063.61-56.36%2095.28%204.29%207.87%209.61%2015.25%2014.3%2022.94%2026.05%2040.9%2052.13%2081.79%2078.17%20122.69-28.13%2016.28-56.25%2032.58-84.36%2048.89-5.08%203.32-11.93%203.25-17.36.81-34.09-19.56-68.13-39.22-102.24-58.77%2073.38-124.27%20146.6-248.63%20219.92-372.94l-.41-.3c-25.22.18-50.45.2-75.67.29-7.21.39-14.55-.37-21.69.39-73.43%20121.29-146.88%20242.57-220.46%20363.77-8.47-4.83-16.92-9.69-25.34-14.61%2019.61-32.21%2039.88-64.05%2059.74-96.12%2051.98-83.37%20103.96-166.73%20155.94-250.1.66-1.19%201.78-2.22%201.79-3.66-13.31-.19-26.61-.72-39.92-.97-20.59.3-41.98%203.68-59.65%2014.9-6.98%204.5-13.13%2010.36-17.61%2017.37-41.35%2064.21-82.86%20128.31-124.16%20192.55-.38-73.44-.27-146.89-.48-220.34-.37-7.44%203.72-14.97%2010.31-18.5%2078.67-45.68%20157.42-91.22%20236.15-136.78z%22%20fill%3D%22%232b374d%22%2F%3E%3Cpath%20d%3D%22m194.36%20220.39c17.67-11.22%2039.06-14.6%2059.65-14.9%2013.31.25%2026.61.78%2039.92.97-.01%201.44-1.13%202.47-1.79%203.66-51.98%2083.37-103.96%20166.73-155.94%20250.1-19.86%2032.07-40.13%2063.91-59.74%2096.12-13.05-7.52-26.09-15.05-39.14-22.57-9.44-4.83-16.23-13.58-21.12-22.76-2.5-5.29-4.79-10.85-5.38-16.71%201.15-1.35%202.15-2.82%203.1-4.31%2012.83-19.93%2025.99-39.66%2038.67-59.68%2041.3-64.24%2082.81-128.34%20124.16-192.55%204.48-7.01%2010.63-12.87%2017.61-17.37z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22m343.95%20206.79c25.22-.09%2050.45-.11%2075.67-.29l.41.3c-73.32%20124.31-146.54%20248.67-219.92%20372.94-7.29%2011.73-14.04%2023.79-21.17%2035.61-25.73-14.78-51.42-29.61-77.14-44.4%2073.58-121.2%20147.03-242.48%20220.46-363.77%207.14-.76%2014.48%200%2021.69-.39z%22%20fill%3D%22%23fff%22%2F%3E%3Cg%20fill%3D%22%2300a2f7%22%3E%3Cpath%20d%3D%22m434.26%20234.64.71-.13c38.08%2059.39%2076.23%20118.74%20114.34%20178.12%205.97%209.04%2011.49%2018.41%2017.74%2027.25.16%2014.36.03%2028.73.07%2043.09-.01%206.42-2.98%2013.25-8.75%2016.47-14.97%208.6-29.86%2017.34-44.83%2025.93-42.73-69.12-85.45-138.25-128.22-207.35%2016.13-27.9%2032.8-55.49%2048.94-83.38z%22%2F%3E%3Cpath%20d%3D%22m311.6%20443.18c18.93-31.67%2037.35-63.67%2056.36-95.28l.73.41c40.36%2063.61%2080.72%20127.22%20121.07%20190.83-28.54%2016.6-57.11%2033.15-85.69%2049.67-26.04-40.9-52.12-81.79-78.17-122.69-4.69-7.69-10.01-15.07-14.3-22.94z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt=""
                  />
                  <span>Arbitrum</span>
                  {statusFocus === "Arbitrum" ? (
                    <AiFillCheckCircle
                      className="icon-active"
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#00fad9",
                        background: "black",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className="select__networt-item"
                  onClick={() => setStatusFocus("Moonriver")}
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <span>Moonriver</span>
                  {statusFocus === "Moonriver" ? (
                    <AiFillCheckCircle
                      className="icon-active"
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#00fad9",
                        background: "black",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="select__networt-items grid grid-cols-2 gap-5">
                <div
                  className="select__networt-item"
                  onClick={() => setStatusFocus("OKChain")}
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <span>OKChain</span>
                  {statusFocus === "OKChain" ? (
                    <AiFillCheckCircle
                      className="icon-active"
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#00fad9",
                        background: "black",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <p className="footer__header">{t("Modal.selectWallet")} </p>
            <div
              className={
                verify
                  ? "footer__body grid grid-cols-4 gap-2 "
                  : "footer__body grid grid-cols-4 gap-2 disable-check"
              }
            >
              <div className="footer__body-item">
                <div className="footer__body-img" onClick={connectMetaMaskApp}>
                  <img
                    src="https://cdn.consensys.net/uploads/metamask-1.svg"
                    alt=""
                  />

                  {metaMaskConnect && (
                    <div className="footer__checked">
                      <div className="padding__checked">
                        <BsCheckLg
                          style={{ fontSize: "10px", color: "black" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <p>MetaMask</p>
              </div>
              <div className="footer__body-item">
                <div
                  className="footer__body-img"
                  onClick={() => {
                    if (verify) {
                      dispatch(connectWallet());
                    }
                  }}
                >
                  <img
                    src="https://bcmhunt.com/static/media/wallet-connect.dcbdafe7.ico"
                    alt=""
                    className="img-coin"
                  />
                  {connectWalletConnect && (
                    <div className="footer__checked">
                      <div className="padding__checked">
                        <BsCheckLg
                          style={{ fontSize: "10px", color: "black" }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <p>WalletConnect</p>
              </div>
              <div className="footer__body-item">
                <div className="footer__body-img">
                  <img
                    src="https://www.freelogovectors.net/wp-content/uploads/2021/12/coinbase-logo-freelogovectors.net_.png"
                    alt=""
                    className="img-coin"
                  />
                </div>

                <p>CoinBase</p>
              </div>
              <div className="footer__body-item">
                <div className="footer__body-img">
                  <img
                    src="https://apktada.com/storage/images/com/portis/wallet/com.portis.wallet_1.png"
                    alt=""
                    className="img-coin"
                    style={{ borderRadius: "50%" }}
                  />
                </div>

                <p>Portis</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default Modal;
