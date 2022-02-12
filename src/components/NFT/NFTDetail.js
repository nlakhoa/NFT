import React, { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import ChartJS from "./ChartJS";
import { useHistory } from "react-router-dom";
import { getListMarket } from "../../store/actions/connectWallet";

export default function NFTDetail() {
  const { status } = useParams();
  const dispatch = useDispatch();
  const socialfiAccount = useSelector((state) => state.wallet.arrMarket);
  let history = useHistory();

  const showToast = () => {
    toast.warn("Please try again!");
  };
  const contract = useSelector((state) => state.wallet.contract);

  const account = useSelector((state) => state.wallet.account);
  const { id } = useParams();
  const [detailCurrent, setDetailCurrent] = useState("");
  useEffect(() => {
    return socialfiAccount.map((item) => {
      if (+item.index === +id) {
        setDetailCurrent(item);
      }
    });
  }, [id]);

  const TransferDino = async () => {
    if (account.toLowerCase() !== detailCurrent.owner.toLowerCase()) {
      await contract.methods
        .buy(id)
        .send({
          from: account,
          gas: "300000",
          value: detailCurrent.price,
        })
        .then(async (value) => {
          toast.success("Chúc mừng bạn đã mua thành công!!!");
          let market = await contract.methods.getAllNFTListing().call();
          dispatch(getListMarket(market));
        })
        .catch((err) => {
        });
      history.push("/nftmarket");
    }
  };

  const NFTDetail = styled.div`
    .bg__nftdetail {
      background-color: ${(props) => props.theme.bgHeader};
      color: ${(props) => props.theme.textBody};
      min-height: 100vh;
      .nftdetail {
        max-width: calc(100vw - 312px);
        max-width: 1160px;
        margin: 0 auto;
        .nftdetail-left {
          margin: 36px 36px 36px 0;
          border-radius: 16px;
          .nftdetail-left-top {
            background-color: ${(props) => props.theme.bgBodyTop};
            margin-bottom: 36px;
            box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
            border-radius: 16px;
            position: relative;
            height: 400px;
            display: flex;
            justify-content: center;
            img {
              border-radius: 12px;
            }
          }
          .nftdetail-left-bot {
            background-color: ${(props) => props.theme.bgBodyTop};
            border-radius: 16px;
            box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
            padding: 12px 22px;
            font-size: 12px;
            .nftdetail-left-bot-title {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 6px;
            }
          }
        }
        .nftdetail-right {
          margin: 36px 36px 36px 0;
          .nftdetail-right__top {
            background-color: ${(props) => props.theme.bgBodyTop};
            padding: 12px 22px;
            margin-bottom: 36px;
            box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
            font-size: 20px;
            border-radius: 16px;
            .nftdetail-right__title {
              display: flex;
              justify-content: space-between;
              margin-bottom: 12px;
              font-size: 18px;

              color: rgb(237, 75, 158);
              .nftdetail-right__top-left {
                font-weight: 600;
                font-size: 20px;
                color: ${(props) => props.theme.textBody};
              }
            }
            .nftdetail-right__level {
              display: flex;
              font-weight: 600;
              margin-bottom: 12px;

              .nftdetail-right__level-left {
                margin: auto 32px auto 0;
                color: ${(props) => props.theme.textBody};
                .nftdetail-right__level-left-title {
                  font-weight: 400;
                  font-size: 14px;
                  color: ${(props) => props.theme.textBody};
                }
              }
              .nftdetail-right__level-right {
                display: flex;
                padding: 6px 16px;
                background-color: ${(props) => props.theme.bgBodyTop};
                min-width: 250px;
                border-radius: 16px;
                box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;

                .icon-question {
                  margin: auto 12px auto 0;
                  font-size: 28px;
                }
                .nftdetail-right__level-right-body {
                  font-weight: 500;
                  .nftdetail-right__level-right-title {
                    font-weight: 400;
                    font-size: 14px;
                  }
                }
              }
            }
            .nftdetail-right__button {
              display: flex;
              margin-bottom: 12px;

              .nftdetail-right__button-left,
              .nftdetail-right__button-right {
                color: ${(props) => props.theme.textBtn};
                border: 2px solid ${(props) => props.theme.textBtn};
                background-color: ${(props) => props.theme.bgBtn};
                padding: 6px 16px;
                cursor: pointer;
                border-radius: 25px;
                margin-left: 8px;
                max-width: 100%;
                font-size: 16px;
                max-width: 150px;
                text-align: center;
                font-weight: 600;
                height: 40px;
              }
              .disable {
                border: 2px solid #ccc;
                background-color: #ccc;
                opacity: 0.5;
                cursor: context-menu;
              }
              .nftdetail-right__button-left {
                margin-right: 48px;
              }

              .active {
                background: ${(props) => props.theme.borderBtn};
                color: black;
              }
            }
            .input__tranfer {
              height: 40px;
              border-radius: 12px;
              max-width: 240px;
              font-size: 16px;
            }
            .btn__tranfer {
              font-size: 16px;
              color: white;
              border: 2px solid #85c559;
              background: #85c559;
              padding: 6px 12px;
              cursor: pointer;
              border-radius: 12px;
              margin-left: 8px;
              height: 40px;
            }
            .nftdetail-right__step {
              display: flex;
              margin-bottom: 12px;
              margin-left: 48px;
              max-width: 160px;
              display: flex;
              padding: 0px;
              align-items: center;
              justify-content: space-between;
              .nftdetail-right__step-left {
                width: calc(100% - 20px);
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                .nftdetail-right__step-left-1 {
                  min-width: 20px;
                  min-height: 20px;
                  background-color: rgb(133, 197, 89);
                  border-radius: 50%;
                  color: rgb(255, 255, 255);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  line-height: 8px;
                  font-size: 12px;
                }
                .nftdetail-right__step-left-2 {
                  width: 100%;
                  height: 2px;
                  background: linear-gradient(
                    90deg,
                    rgb(133, 197, 89) 0%,
                    rgb(233, 234, 235) 80%
                  );
                  opacity: 0.6;
                }
              }

              .nftdetail-right__step-right {
                min-width: 20px;
                min-height: 20px;
                background-color: rgb(233, 234, 235);
                border-radius: 50%;
                color: rgb(255, 255, 255);
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 8px;
                font-size: 12px;
              }
            }
            .nftdetail-right__token {
              width: 100%;
              display: flex;

              .nftdetail-right__token-left,
              .nftdetail-right__token-right {
                width: 50%;
                position: relative;
                .value-input {
                  border: none;
                  font-size: 16px;
                  width: 100%;
                  background-color: ${(props) => props.theme.bgBodyTop};
                }
                span {
                  background: linear-gradient(
                    to right,
                    ${(props) => props.theme.opacityTo},
                    ${(props) => props.theme.opacityFrom}
                  );
                  content: "";
                  height: 36px;
                  pointer-events: none;
                  position: absolute;
                  right: 18px;
                  left: auto;
                  top: 32px;
                  width: 60px;
                }
                .nftdetail-right__token-left-title,
                .nftdetail-right__token-right-title {
                  font-size: 14px;
                }
              }
            }
          }
        }
        .nftdetail-right-bot {
          padding: 12px 22px;
          margin-bottom: 36px;
          box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
          font-size: 16px;
          border-radius: 16px;
          .nftdetail-right-bot-title {
            font-size: 18px;
            .nftdetail-right-bot-title-top {
              font-weight: bold;
              color: ${(props) => props.theme.textBody};
            }

            p {
              color: ${(props) => props.theme.borderBtn};
            }
          }
        }
      }
    }

    @media screen and (max-width: 1023px) {
      .bg__nftdetail {
        .nftdetail {
          flex-wrap: wrap;
          padding: 0 64px;
          .nftdetail-left,
          .nftdetail-right {
            margin: 36px 16px;
            .nftdetail-right__body {
              flex-wrap: wrap;
            }
            .nftdetail-right__top {
              .nftdetail-right__token {
                flex-wrap: wrap;
                .nftdetail-right__token-left,
                .nftdetail-right__token-right {
                  /* width: 100%; */
                }
                .nftdetail-right__body {
                  flex-wrap: wrap;
                }
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 767px) {
      .bg__nftdetail {
        .nftdetail {
          flex-wrap: wrap;
          padding: 0 12px;
          .nftdetail-left,
          .nftdetail-right {
            width: 100%;
            margin: 12px 0;
            .nftdetail-right__top {
              .btn__tranfer {
                padding: 8px;
                font-size: 13px;
              }
              .input__tranfer {
                max-width: 218px;
              }
              .nftdetail-right__token {
                flex-wrap: wrap;
                .nftdetail-right__token-left,
                .nftdetail-right__token-right {
                  width: 100%;
                  .nftdetail-right__token-left-title,
                  .nftdetail-right__token-right-title {
                    margin-top: 12px;
                    font-size: 18px;
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  return (
    <NFTDetail>
      <div className="bg__nftdetail">
        <div className="nftdetail flex ">
          <div className="nftdetail-left xl:w-1/3 lg:w-full sm:w-full">
            <div className="nftdetail-left-top">
             
              <img
                src={detailCurrent.image}
                alt=""
                style={{
                  height: "100%",
                  position: "absolute",
                  zIndex: "3",
                }}
              />
            </div>
            <div className="nftdetail-left-bot">
              <h3 className="nftdetail-left-bot-title">NFT Desc</h3>
              <p className="nftdetail-left-bot-des">
                Eggs of Money-hungry dino, can be hatched out of the level 1-6
                Money-hungry dinos. Money-hungry Dinos are said to be a race of
                Triceratops, but unlike the gentle and herbivorous Triceratops,
                they are fierce and powerful, and they like gold shiny things by
                nature, and they like to have gold shiny things around them when
                they eat and sleep, and over time, their skin color has become
                orange. They like to collect gold shiny things anywhere.
              </p>
            </div>
          </div>
          <div className="nftdetail-right xl:w-2/3 lg:w-full sm:w-full">
            <div className="nftdetail-right__top">
              <div className="nftdetail-right__title">
                <p className="nftdetail-right__top-left">
                  {detailCurrent && detailCurrent.name} #
                  {detailCurrent && detailCurrent.index}
                </p>
                <p>Unopened</p>
              </div>
              <div className="nftdetail-right__level">
                <div className="nftdetail-right__level-left">
                  <p className="nftdetail-right__level-left-title">NFT Level</p>
                  <p>Level 1</p>
                </div>
                <div className="nftdetail-right__level-right">
                  <AiOutlineQuestionCircle className="icon-question" />
                  <div className="nftdetail-right__level-right-body">
                    <p className="nftdetail-right__level-right-title">Price</p>
                    <p>
                      {detailCurrent &&
                        (+detailCurrent.price / Math.pow(10, 16)).toFixed(4)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex nftdetail-right__body justify-between">
                <div>
                  <div className="flex justify-between">
                    <div className="nftdetail-right__button">
                      <span
                        className="nftdetail-right__button-left active"
                        onClick={showToast}
                      >
                        Enable
                      </span>
                      <span
                        className={
                          account &&
                          detailCurrent.owner &&
                          account.toLowerCase() ==
                            detailCurrent.owner.toLowerCase()
                            ? "nftdetail-right__button-right disable"
                            : "nftdetail-right__button-right "
                        }
                        onClick={() => TransferDino()}
                      >
                        Buy Now
                      </span>
                    </div>
                  </div>
                  <div className="nftdetail-right__step">
                    <div className="nftdetail-right__step-left">
                      <div className="nftdetail-right__step-left-1">1</div>
                      <div className="nftdetail-right__step-left-2"></div>
                    </div>
                    <p className="nftdetail-right__step-right">2</p>
                  </div>
                </div>
              </div>

              <div className="nftdetail-right__token">
                <div className="nftdetail-right__token-left">
                  <p className="nftdetail-right__token-left-title">Hash</p>
                  <input
                    type="text"
                    name="token"
                    defaultValue={detailCurrent.hash}
                    className="value-input"
                    disabled
                    id="myTextField"
                  />
                  <span></span>
                </div>
                <div className="nftdetail-right__token-right">
                  <p className="nftdetail-right__token-right-title">Author</p>
                  <input
                    type="text"
                    name="author"
                    defaultValue={detailCurrent.owner}
                    className="value-input"
                    disabled
                    id="myTextField"
                  />
                  <span></span>
                </div>
              </div>
            </div>
            <div className="nftdetail-right-bot">
              <div className="nftdetail-right-bot-title">
                <p className="nftdetail-right-bot-title-top">Price history</p>
                <p>50 USD</p>
              </div>
              <ChartJS />
            </div>
          </div>
        </div>
      </div>
    </NFTDetail>
  );
}
