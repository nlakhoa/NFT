import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { changeStatusModal } from "../store/actions/homeAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const dispatch = useDispatch();
  //   gọi lên Reducer để bật tắt modal

  const changeStatusModals = () => {
    dispatch(changeStatusModal());
  };
  const [statusSelect, setStatusSelect] = useState("Liquidity");
  const [statusNFT, setStatusNFT] = useState("Fragments");
  const { t } = useTranslation();
  const statusState = {
    Liquidity: {
      name: `${t("profile.Liquidity.Liquidity")}`,
      left: `${t("profile.Liquidity.left")}`,
      mid: `${t("profile.Liquidity.mid")}`,
      right: `${t("profile.Liquidity.right")}`,
    },
    Mining: {
      name: `${t("profile.Mining.Mining")}`,
      left: `${t("profile.Mining.left")}`,
      mid: `${t("profile.Mining.mid")}`,
      right: `${t("profile.Mining.right")}`,
    },
    Crowdpooling: {
      name: `${t("profile.Crowdpooling.Crowdpooling")}`,
      left: `${t("profile.Crowdpooling.left")}`,
      mid: `${t("profile.Crowdpooling.mid")}`,
      right: `${t("profile.Crowdpooling.right")}`,
    },
    vDODO: {
      name: `${t("profile.vDODO.vDODO")}`,
      left: `${t("profile.vDODO.left")}`,
      mid: `${t("profile.vDODO.mid")}`,
      right: `${t("profile.vDODO.right")}`,
    },
  };
  const ProfileBody = styled.div`
    .profile {
      background-color: ${(props) => props.theme.bgHeader};
      min-height: 100vh;
      color: white;
      padding-bottom: 48px;

      .profile__body {
        width: calc(100vw - 312px);
        max-width: 1160px;
        padding-top: 20px;
        margin: auto;

        .profile__title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .profile__total {
          font-size: 18px;
          color: #6c757d;
          margin-bottom: 18px;

          span {
            color: white;
          }
        }

        .profile__btn-change {
          color: black;
          font-size: 14px;
          margin: 24px 0;
          justify-content: space-between;

          .profile__btn-item {
            display: inline-block;
            padding: 0px 6px;
            margin-right: 16px;
            min-width: 158px;
            line-height: 40px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
            text-align: center;
            outline: 0px;
            background-color: ${(props) => props.theme.bgHeader};
            color: rgb(133, 133, 141);
            border: 1px solid ${(props) => props.theme.borderBtn};
          }

          .active {
            background-color:${(props) => props.theme.borderBtn};
            color: black;
          }

          .profile__btn-change-next {
            display: flex;
            color: rgb(133, 133, 141);
            margin: auto 0;
            cursor: pointer;
          }
        }

        .profile__change-body {
          width: 100%;
          background-color: ${(props) => props.theme.bgBodyTop};
          border-radius: 25px;

          .profile__change-header {
            color: #6c757d;
            box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
            border-radius: 16px;
            .profile__change-title {
              padding: 0px 30px;
              height: 72px;
              line-height: 72px;
              border-bottom: 1px solid rgb(26, 26, 27);
              font-size: 18px;

              span {
                color: white;
              }
            }

            .profile__change-items {
              padding: 30px;
              font-size: 14px;
              min-height: 408px;

              // .profile__change-item {
              // }
              .result-notfound {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 330px;

                img {
                  height: 20px;
                  margin: 0 auto;
                }

                p {
                  text-align: center;
                }

                .btn__result {
                  padding: 12px;
                  background: ${(props) => props.theme.borderBtn};
                  width: 212px;
                  margin: 12px auto;
                  border-radius: 8px;
                  color: white;
                  font-weight: 600;
                  cursor: pointer;
                }
              }
            }

            .profile__change-footer {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 63px;
              border-top: 1px solid rgb(26, 26, 27);
              font-size: 14px;
              color: white;

              p {
                margin: 0 12px;
              }
            }
          }
        }

        .assets {
          padding: 40px;
          border: 1px dashed;
          border-radius: 12px;
          color: #6c757d;

          .assets__body {
            font-size: 14px;

            .assets__body-title {
              font-size: 32px;
              font-weight: 700;
              margin-bottom: 12px;
            }
          }

          .assets__body-btn {
            font-size: 18px;
            padding: 0px 10px;
            width: 212px;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            background-color: ${(props) => props.theme.borderBtn};
            color: rgb(255, 255, 255);
            border-radius: 10px;
            text-align: center;
            margin: 24px auto 0;
          }
        }

        .assets-nft {
          width: 100%;
          height: 385px;

          .assets-nft__create {
            background-color: ${(props) => props.theme.bgBodyTop};
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100%;
            color: ${(props) => props.theme.textBody};
            font-size: 16px;
            font-weight: 500;
            box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;

            border-radius: 15px;
          }
        }

        .badge {
          padding: 24px 0;
          border: 1px dashed;
          border-radius: 12px;
          color: #6c757d;
          background: ${(props) => props.theme.bgBodyTop};
          margin-bottom: 20px;

          .badge__body {
            .badge__body-title {
              font-size: 16px;
              font-weight: bold;
              color: ${(props) => props.theme.textBody};
              margin-bottom: 12px;
              padding-left: 30px;

              span {
                color: skyblue;
              }
            }

            .badge__body-items {
              .badge__body-item {
                text-align: center;
                cursor: pointer;

                img {
                  height: 72px;
                  margin: auto;
                }

                .badge__name {
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 1023px) {
      .profile {
        .profile__body {
          padding: 32px 12px;
          min-width: calc(100vw - 200px);
          .profile__btn-change{
            .profile__btn-item {
             margin-bottom: 12px;
           }
          }
          .badge {
            .badge__body-items {
           
              flex-wrap: wrap;
            }
          }
        }
      }
    }

    @media screen and (max-width: 767px) {
      .profile {
        .profile__body {
         width: 100%;
         .profile__btn-change{
           .profile__btn-item {
             margin-bottom: 12px;
           }
         }
          .badge {
            .badge__body-items {
              flex-wrap: wrap;
            }
          }
        }
      }
    }
  `;
  return (
    <ProfileBody>
      <IconContext.Provider value={{ color: "#6c757d" }}>
        <div className="profile">
          {/* Assets in DODO: */}

          <div className="profile__body">
            <h3 className="profile__title"> {t("profile.title")}</h3>
            <p className="profile__total ">
              {t("profile.total")} <span>$0</span>
            </p>
            <div className="profile__btn-change flex">
              <div>
                <p
                  className={
                    statusSelect === "Liquidity"
                      ? "profile__btn-item active"
                      : "profile__btn-item"
                  }
                  onClick={() => setStatusSelect("Liquidity")}
                >
                  {t("profile.Liquidity.Liquidity")}
                </p>
                <p
                  className={
                    statusSelect === "Mining"
                      ? "profile__btn-item active"
                      : "profile__btn-item"
                  }
                  onClick={() => setStatusSelect("Mining")}
                >
                  {t("profile.Mining.Mining")}
                </p>
                <p
                  className={
                    statusSelect === "Crowdpooling"
                      ? "profile__btn-item active"
                      : "profile__btn-item"
                  }
                  onClick={() => setStatusSelect("Crowdpooling")}
                >
                  {t("profile.Crowdpooling.Crowdpooling")}
                </p>
                <p
                  className={
                    statusSelect === "vDODO"
                      ? "profile__btn-item active"
                      : "profile__btn-item"
                  }
                  onClick={() => setStatusSelect("vDODO")}
                >
                  {t("profile.vDODO.vDODO")}
                </p>
              </div>
            </div>
            <div className="profile__change-body">
              <div className="profile__change-header">
                <p className="profile__change-title">
                  {statusState[statusSelect].name} Assets: <span> $0</span>
                </p>
                <ul className="profile__change-items">
                  <li className="profile__change-item grid grid-cols-3 ">
                    <p>{statusState[statusSelect].left}</p>
                    <p>{statusState[statusSelect].mid}</p>
                    <p>{statusState[statusSelect].right}</p>
                  </li>
                  <div className="result-notfound">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                      alt=""
                    />
                    <p>No results found</p>

                    <p className="btn__result" onClick={changeStatusModals}>
                      Go to {statusState[statusSelect].name} list
                    </p>
                  </div>
                </ul>
                <div className="profile__change-footer flex">
                  <FiArrowLeft style={{ height: "14px" }} />
                  <p>0/0</p>
                  <FiArrowRight style={{ height: "14px" }} />
                </div>
              </div>
            </div>
          </div>

          {/* My NFT Assets */}
          <div className="profile__body">
            <h3 className="profile__title">{t("profile.myNFT")}</h3>
            <p className="profile__total ">
              {t("profile.fragmentsTotal")} <span>$0</span>
            </p>
            <div className="profile__btn-change flex">
              <div>
                <p
                  className={
                    statusNFT === "Fragments"
                      ? "profile__btn-item active"
                      : "profile__btn-item"
                  }
                  onClick={() => setStatusNFT("Fragments")}
                >
                  {t("profile.fragments.Fragments")}
                </p>
                <p
                  className={
                    statusNFT === "NFT"
                      ? "profile__btn-item active"
                      : "profile__btn-item"
                  }
                  onClick={() => setStatusNFT("NFT")}
                >
                  {t("profile.NFT.NFT")}
                </p>
              </div>
              {statusNFT === "Fragments" ? (
                <Link
                  to="/tradeNFT"
                  className="profile__btn-change-next"
                >
                  {t("profile.fragments.next")}
                  <FiArrowRight style={{ margin: "auto 0 auto 8px" }} />
                </Link>
              ) : (
                <p
                  className="profile__btn-change-next"
                  onClick={changeStatusModals}
                >
                  {t("profile.NFT.next")}
                  <FiArrowRight style={{ margin: "auto 0 auto 8px" }} />
                </p>
              )}
            </div>

            {statusNFT === "Fragments" ? (
              <div className="assets">
                <div className="assets__body">
                  <h3 className="assets__body-title">
                    {t("profile.fragments.title")}
                  </h3>
                  <p>{t("profile.fragments.des")}</p>
                </div>
                <p className="assets__body-btn">
                  <Link to="/tradeNFT">{t("profile.fragments.btn")}t</Link>
                </p>
              </div>
            ) : (
              <div className="assets-nft grid xl:grid-cols-4 grid-cols-2">
                <Link to={"/createNFT"} className="assets-nft__create">
                  <AiFillPlusCircle
                    style={{ height: "80px", width: "80px", color: "yellow" }}
                  />
                  <p className="assets-nft__text">
                    {t("profile.NFT.CreateNFT")}{" "}
                  </p>
                </Link>
              </div>
            )}
          </div>
          {/* My Badge */}
          <div className="profile__body">
            <h3 className="profile__title ">{t("profile.myBadge")}</h3>
            <div className="badge">
              <div className="badge__body">
                <h3 className="badge__body-title">
                  {t("profile.totalVolume")} <span>0</span>/5
                </h3>
                <ul className="badge__body-items grid xl:grid-cols-12 grid-cols-6">
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/TajOkyS0VEvJpsJGJYZhcQdc5CbsSLLYke8gFXZGY0s/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMV8wNWFhYmIwMTUwLzFfMV8wNWFhYmIwMTUwLnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Bronze Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/MHrxJ4WzRDdxkEcOf-KvDsblxddD7wY1_SoyrLYBzQ8/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMl83NzVjNzFiZjY0LzFfMl83NzVjNzFiZjY0LnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Silver Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/TajOkyS0VEvJpsJGJYZhcQdc5CbsSLLYke8gFXZGY0s/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMV8wNWFhYmIwMTUwLzFfMV8wNWFhYmIwMTUwLnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Gold Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/TajOkyS0VEvJpsJGJYZhcQdc5CbsSLLYke8gFXZGY0s/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMV8wNWFhYmIwMTUwLzFfMV8wNWFhYmIwMTUwLnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Platnum Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/TajOkyS0VEvJpsJGJYZhcQdc5CbsSLLYke8gFXZGY0s/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMV8wNWFhYmIwMTUwLzFfMV8wNWFhYmIwMTUwLnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Diamond Trader</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="badge">
              <div className="badge__body">
                <h3 className="badge__body-title">
                  {t("profile.constellationSeries")} <span>0</span>/12
                </h3>
                <ul className="badge__body-items grid xl:grid-cols-12 grid-cols-6">
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/5Py1uiKGFjPe6dk8kUP1xuwNGPBk6RzsoCpa1LeZYTY/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzNfMTBfNWYxMDhmNDQ5OC8zXzEwXzVmMTA4ZjQ0OTgucG5n.webp"
                      alt=""
                    />
                    <span className="badge__name">Capricorn</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/MHrxJ4WzRDdxkEcOf-KvDsblxddD7wY1_SoyrLYBzQ8/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMl83NzVjNzFiZjY0LzFfMl83NzVjNzFiZjY0LnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Silver Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/TajOkyS0VEvJpsJGJYZhcQdc5CbsSLLYke8gFXZGY0s/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMV8wNWFhYmIwMTUwLzFfMV8wNWFhYmIwMTUwLnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Gold Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/TajOkyS0VEvJpsJGJYZhcQdc5CbsSLLYke8gFXZGY0s/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMV8wNWFhYmIwMTUwLzFfMV8wNWFhYmIwMTUwLnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Platnum Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/TajOkyS0VEvJpsJGJYZhcQdc5CbsSLLYke8gFXZGY0s/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMV8wNWFhYmIwMTUwLzFfMV8wNWFhYmIwMTUwLnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Diamond Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/MHrxJ4WzRDdxkEcOf-KvDsblxddD7wY1_SoyrLYBzQ8/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMl83NzVjNzFiZjY0LzFfMl83NzVjNzFiZjY0LnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Silver Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/TajOkyS0VEvJpsJGJYZhcQdc5CbsSLLYke8gFXZGY0s/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMV8wNWFhYmIwMTUwLzFfMV8wNWFhYmIwMTUwLnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Gold Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/MHrxJ4WzRDdxkEcOf-KvDsblxddD7wY1_SoyrLYBzQ8/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMl83NzVjNzFiZjY0LzFfMl83NzVjNzFiZjY0LnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Silver Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/TajOkyS0VEvJpsJGJYZhcQdc5CbsSLLYke8gFXZGY0s/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMV8wNWFhYmIwMTUwLzFfMV8wNWFhYmIwMTUwLnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Gold Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/MHrxJ4WzRDdxkEcOf-KvDsblxddD7wY1_SoyrLYBzQ8/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMl83NzVjNzFiZjY0LzFfMl83NzVjNzFiZjY0LnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Silver Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/TajOkyS0VEvJpsJGJYZhcQdc5CbsSLLYke8gFXZGY0s/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMV8wNWFhYmIwMTUwLzFfMV8wNWFhYmIwMTUwLnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Gold Trader</span>
                  </li>
                  <li className="badge__body-item">
                    <img
                      src="https://cmp.dodoex.io/MHrxJ4WzRDdxkEcOf-KvDsblxddD7wY1_SoyrLYBzQ8/rs:fit:160:160:0/g:no/aHR0cHM6Ly9jZG4tbWVkaWEuZG9kb2V4LmlvLzFfMl83NzVjNzFiZjY0LzFfMl83NzVjNzFiZjY0LnBuZw.webp"
                      alt=""
                    />
                    <span className="badge__name">Silver Trader</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </ProfileBody>
  );
}
