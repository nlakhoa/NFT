import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlinePlusSquare, AiFillCloseCircle } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function MetaTime() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("");
  
  const { t } = useTranslation();
  const MetaTime = styled.div`
  .meta__modal{
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
    top: calc(50% - 160px);
    min-width: 480px;
    .meta__modal-header{
      justify-content: space-between;
      font-weight: bold;
      border-bottom: 1px solid #ccc;
      padding-bottom:8px;
      .header-icon{
        color: ${props=>props.theme.borderBtn};
        font-size:32px;
        cursor: pointer;
      }
      .header-icon:hover{
        opacity:0.8;
      }
    }
    .meta__modal-body{
      img{
        width:36px;
        margin:12px;
      }
      .meta__modal-body-item{
        font-size:18px;
        margin-top:12px;
        justify-content: space-between;
        .btn-unstaked{
          height: 36px;
          color: black;
          border: 2px solid ${props=>props.theme.bgItem};
          background: ${(props) => props.theme.borderBtn};
          padding: 6px 12px;
          cursor: pointer;
          border-radius: 25px;
          line-height: 18px;
          margin: 12px;
         }
        }
        .btn-unstaked:hover{
        opacity:0.8;
      }
      
      
    }

    .meta__modal-body-stake{
      margin-top:24px;
        .body-stake{
          background: ${props=>props.theme.bgItem};
          box-shadow: rgb(16 64 54 / 21%) 0px 1px 3px 0px inset;
          border-radius: 10px;
          margin-bottom: 6px;
          font-size: 18px;
          padding: 12px;
          .btn-max{
            color: black;
            border: 2px solid black;
            background-color: ${(props) => props.theme.borderBtn};
            padding: 0 12px;
            cursor: pointer;
            border-radius: 25px;
            font-size: 16px;
            margin: 0 12px;
          }
        }  
        .btn-cancel,.btn-stake{
            border: 2px solid black;
            background: ${props=>props.theme.bgItem};
            color: ${(props) => props.theme.textBody};
            padding: 3px 12px;
            cursor: pointer;
            border-radius: 25px;
            font-size: 18px;
            margin: 12px 12px 36px 12px;
            width: 40%;
            text-align:center;
            font-weight: bold
        }
        .btn-stake{
          color:black;
          background-color: ${(props) => props.theme.borderBtn};
          
        }
        .modal__des{
          font-size:16px;
        }
      }
    }
  }
    .meta {
      min-height: calc(100vh - 80px);
      background-color: ${(props) => props.theme.bgHeader};

      .meta-top {
        padding: 40px 0;
        background-color: ${(props) => props.theme.bgHeaderItem};

        .meta__top {
          width: calc(100vw - 312px);
          max-width: 1260px;
          margin: 0 auto;
          color: ${(props) => props.theme.textBody};

          .meta__top-title {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .meta__top-description {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 40px;
          }

          .meta__buy {
            gap: 56px;

            .meta__buy-item {
              background: linear-gradient(
                90deg,
                rgb(38, 173, 255) 0%,
                rgb(255, 70, 131) 100%
              );
              border: transparent;
              padding: 3px;
              border-radius: 18px;

              .bg__buy-item {
                padding: 24px;
                background: ${(props) => props.theme.bgHeader};
                color: ${(props) => props.theme.textBody};
                border-radius: 18px;
                justify-content: space-between;
                /* min-height: 154px; */
                font-size: 16px;
                font-weight: 500;
                .bg__buy-item-left {
                  min-width: 290px;
                  p {
                    color: ${(props) => props.theme.borderBtn};
                    margin-bottom: 24px;
                  }
                  .bg__buy-item-left-top {
                    margin-bottom: 12px;
                    color: ${(props) => props.theme.textBody};
                  }
                  .right-connect__body {
                    color: ${(props) => props.theme.borderBtn};
                    border: 2px solid ${(props) => props.theme.borderBtn};
                    padding: 6px 8px;
                    cursor: pointer;
                    border-radius: 25px;
                    margin-left: 8px;
                    width: 100%;
                    font-size: 14px;
                  }
                }
                .bg__buy-item-right {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  p {
                    line-height: 1.5;
                    height: 30px;
                    width: 100%;
                    text-align: center;
                    color: ${(props) => props.theme.borderBtn};
                    margin-bottom: 12px;
                  }
                  .bg__buy-item-right-top {
                    color: ${(props) => props.theme.textBody};
                  }
                  .right-connect__body {
                    color: ${(props) => props.theme.borderBtn};
                    border: 2px solid ${(props) => props.theme.borderBtn};
                    padding: 6px 6px;
                    /* width: 49px; */
                    cursor: pointer;
                    border-radius: 25px;
                    margin-left: 8px;
                    width: 100%;
                    font-size: 14px;
                    text-align: center;
                    max-width: 180px;
                    margin: auto;
                  }
                }

                .meta__buy-item-body {
                  margin-left: 12px;

                  p {
                    margin-bottom: -6px;
                    font-size: 20px;
                    line-height: 28px;
                    font-weight: 700;
                  }

                  span {
                    padding: 0px;
                    margin: 0px;
                    font-size: 12px;
                    line-height: 17px;
                    color: rgb(133, 133, 141);
                  }
                }
              }
            }
          }
        }
      }

      .meta-money,
      .meta-slot {
        color: ${(props) => props.theme.textBody};
        width: calc(100vw - 312px);
        max-width: 1260px;
        margin: 0 auto;
        padding: 40px 0;
        .meta-slot__data-pd{
          padding: 8px;

          .meta-slot__data {
          box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
          border-radius: 16px;
          font-size: 16px;
          position: relative;
          .meta-slot__time{
            position: absolute;
            padding: 8px 16px;
            font-weight: 600;
            font-size: 12px;
            right: 0;
            background-color: ${(props) => props.theme.bgHeaderItem};
            color: ${(props) => props.theme.textBody};
            text-align: center;
            border-radius: 0px 20px;
          }
          .meta-slot__header {
            display: flex;
            padding: 16px 24px;
            p {
              font-size: 18px;
              font-weight: bold;
              
            }
            img {
              width: 45px;
              height: 45px;
            }
            .link-contract{
              color: ${(props) => props.theme.bgHeaderItem}
            }
          }
          .meta-slot__body {
            padding: 16px 24px;
            p:nth-child(2) {
                font-weight: bold;
              }
            .rate{
              color: orange
            }
          }
          .meta-slot__footer {
            padding: 16px 24px;
            background: ${(props) => props.theme.bgHeaderItem};
            .icon-add{
                font-size:28px;
                margin: auto 12px;
                cursor:pointer;
              }
              .icon-add:hover{
                opacity:0.5;
              }
            .slot__footer {
              img {
                width: 36px;
                height: 36px;
                margin: auto 0;
              }
              p:nth-child(2) {
                font-weight: bold;
              }
             
            }
          }
          .meta-slot__connect {
            padding:12px 24px;
            .btn__enable {
              color: ${(props) => props.theme.bgHeader};
              border: 2px solid ${(props) => props.theme.borderBtn};
              background: ${(props) => props.theme.borderBtn};
              padding: 6px 12px;
              cursor: pointer;
              border-radius: 25px;
              margin-left: 8px;
              margin: auto;
              }
              .btn__enable:hover{
                opacity: 0.8;
              }
            }
          }
        }
        }
        
        .meta-money__title {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 24px;
        }
        .meta-money__data {
          background-color: ${(props) => props.theme.bgBodyTop};
          border-radius: 18px;
          box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
          .meta-money__data-img {
            img {
              height: 175px;
              margin: 0 auto;
            }
          }
          p {
            height: 42px;
            line-height: 42px;
            margin: auto 0;
            font-size: 18px;
            text-align: center;
            font-weight: 500;
          }
        }
      }
    }

    @media screen and (max-width: 1023px) {
      .meta {
        .meta-top {
          .meta__top {
            padding: 12px;
            min-width: calc(100vw - 200px);
          }
        }
        .meta-money,
        .meta-slot {
          padding: 12px;
          min-width: calc(100vw - 200px);
        }
      }
    }
    @media screen and (max-width: 767px) {
      .meta {
        .meta-top,
        .meta-money,
        .meta-slot {
          padding: 12px;
          width:100%;
        }
        .meta-top {
          .meta__top,
          .meta-money {
            margin: 0 ;
            width: 100%;
            
            .meta__top-title {
              font-size: 28px;
            }
            .meta__top-description {
              font-size: 12px;
            }
            .meta__buy {
             
              .meta__buy-item {
                .bg__buy-item {
              padding:8px;
              font-size:12px;
              line-height: 24px;
                  .bg__buy-item-left {
                    min-width: 0px;
                    max-width: 200px;
                    .bg__buy-item-left-top {
                      word-wrap: wrap;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .meta__modal{
        right: 5%;
        max-width:90%;
        min-width:0;
      }
    }
  `;

  return (
    <MetaTime>
      <>
        {showModal ? (
          <>
            <div className="meta__modal">
              <div className="meta__modal-header flex ">
                <h4>{currentStatus === "view" ? "View" : "Stake"}</h4>
                <AiFillCloseCircle
                  className="header-icon"
                  onClick={() => setShowModal(false)}
                />
              </div>
              {currentStatus === "view" ? (
                <div className="meta__modal-body">
                  <div className="flex meta__modal-body-item">
                    <div className="flex">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div>
                        <p>Your Staked TIME</p>
                        <p>
                          <b>377474351.588</b>
                        </p>
                      </div>
                    </div>
                    <p className="btn-unstaked">Unstaked</p>
                  </div>
                  <div className="flex meta__modal-body-item">
                    <div className="flex">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div>
                        <p>Rewards</p>
                        <p>
                          <b>0.000</b>
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <p>Rewards</p>
                        <p>
                          <b>1.135</b>
                        </p>
                      </div>
                      <img
                        src="https://dsgmetaverse.com/images/tokens/DSG.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="meta__modal-body-stake">
                  <div className="body-stake">
                    <div className="flex justify-between flex-wrap">
                      <p>Stake</p>
                      <p>Balance: 27832000.39</p>
                    </div>
                    <div className="flex justify-between flex-wrap">
                      <p>Balance: 27832000.39456465</p>
                      <div className="flex justify-center">
                        <p className="btn-max">MAX</p>
                        <p>TIME</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="btn-cancel">Cancel</p>
                    <p className="btn-stake">Stake</p>
                  </div>
                  <p className="modal__des">
                    *The stake can be stake out after expiration of the time
                  </p>
                </div>
              )}
            </div>
            <div
              className="opacity-25 fixed inset-0 z-40 bg-black"
              onClick={() => setShowModal(false)}
            ></div>
          </>
        ) : null}
        <div className="meta">
          <div className="meta-top ">
            <div className="meta__top">
              <h1 className="meta__top-title">TIME Staking</h1>
              <p className="meta__top-description">
                TIME single token staking mining: both TIME and DSG tokens can
                be mined. The logic of acquiring TIME: 20% of the TIME tokens
                consumed by users are added to the staking pool every day for
                staking users to mine TIME. The logic of acquiring DSG: 15% of
                the swapped DSG are directly distributed to the staking pool,
                20% will go into value locked account, and will be released
                linearly in the next 6 months
              </p>
              <p className="meta__top-description">
                While staking TIME, you need to choose lock-up period. The sTIME
                acquired after the staking process is the certificate used for
                Metatime governance, it&apos;s also the certificate for
                calculating staking income. The longer the lock-up time, the
                more sTIME you can get from each TIME. Lock-up period vs. bonus
                ratio.
              </p>
              <div className="meta__buy grid grid-cols-1 xl:grid-cols-2">
                <div className="meta__buy-item  ">
                  <div className="bg__buy-item flex">
                    <div className="w-25 mr-1">
                      <p>Vesting period</p>
                      <p>Boost Factor</p>
                    </div>
                    <div className="w-15 mr-2">
                      <p>7 days</p>
                      <p>0.2</p>
                    </div>
                    <div className="w-15 mr-2">
                      <p>30 days</p>
                      <p>0.3</p>
                    </div>
                    <div className="w-15 mr-2">
                      <p>180 days</p>
                      <p>0.5</p>
                    </div>
                    <div className="w-15 mr-2">
                      <p>1 year</p>
                      <p>1</p>
                    </div>
                    <div className="w-15">
                      <p>2 years</p>
                      <p>2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="meta-slot flex justify-center w-full flex-wrap">
            <div className="meta-slot__data-pd md:w-full lg:w-1/2 xl:w-1/3 ">
              <div className="meta-slot__data ">
                <div className="meta-slot__time">
                  <p>Earn TIME&DSG</p>
                  <p>7 d Lock time</p>
                </div>
                <div className="meta-slot__header flex ">
                  <img
                    src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                    alt=""
                  />
                  <div className="slot__header-body ml-2">
                    <p>TIME</p>
                    <Link href="#" className="flex link-contract">
                      View Contract <FiExternalLink className="m-auto ml-1 " />
                    </Link>
                  </div>
                </div>
                <div className="meta-slot__body  w-full flex justify-between ">
                  <div className="xl:w-1/3 ">
                    <p>APR</p>
                    <p>135.99%</p>
                  </div>

                  <div className="xl:w-1/3">
                    <p>Boost Factor</p>
                    <p className="rate">0.2 X</p>
                  </div>
                  <div className="xl:w-1/3 text-right">
                    <p> Total staked</p>
                    <p>$ 35,755</p>
                  </div>
                </div>
                <div className="meta-slot__footer ">
                  <div className="flex justify-between">
                    <div className="flex slot__footer mb-3 ">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div className="slot__footer-body ml-1">
                        <p>Your staked TIME</p>
                        <p>0.000</p>
                      </div>
                    </div>

                    <AiOutlinePlusSquare
                      className="icon-add"
                      onClick={() => {
                        setShowModal(true);
                        setCurrentStatus("stake");
                      }}
                    />
                  </div>
                  <div className="flex slot__footer justify-between">
                    <div className="flex slot__footer slot__footer-item">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div className="slot__footer-body  ml-1">
                        <p>Your staked TIME</p>
                        <p>0.000</p>
                      </div>
                    </div>
                    <div className="flex  slot__footer-item">
                      <div className="slot__footer-body  mr-1">
                        <p>Rewards</p>
                        <p>0.000</p>
                      </div>
                      <img
                        src="https://dsgmetaverse.com/images/tokens/DSG.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex meta-slot__connect">
                  <p
                    className="btn__enable"
                    onClick={() => {
                      setShowModal(true);
                      setCurrentStatus("view");
                    }}
                  >
                    View
                  </p>
                  <p className="btn__enable">HarVest</p>
                </div>
              </div>
            </div>
            <div className="meta-slot__data-pd md:w-full lg:w-1/2 xl:w-1/3 ">
              <div className="meta-slot__data ">
                <div className="meta-slot__time">
                  <p>Earn TIME&DSG</p>
                  <p>30 d Lock time</p>
                </div>
                <div className="meta-slot__header flex ">
                  <img
                    src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                    alt=""
                  />
                  <div className="slot__header-body ml-2">
                    <p>TIME</p>
                    <Link href="#" className="flex link-contract">
                      View Contract <FiExternalLink className="m-auto ml-1 " />
                    </Link>
                  </div>
                </div>
                <div className="meta-slot__body  w-full flex justify-between ">
                  <div className="xl:w-1/3 ">
                    <p>APR</p>
                    <p>74.92%</p>
                  </div>

                  <div className="xl:w-1/3">
                    <p>Boost Factor</p>
                    <p className="rate">0.3 X</p>
                  </div>
                  <div className="xl:w-1/3 text-right">
                    <p> Total staked</p>
                    <p>$ 74,223</p>
                  </div>
                </div>
                <div className="meta-slot__footer ">
                  <div className="flex justify-between">
                    <div className="flex slot__footer mb-3 ">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div className="slot__footer-body ml-1">
                        <p>Your staked TIME</p>
                        <p>0.000</p>
                      </div>
                    </div>

                    <AiOutlinePlusSquare
                      className="icon-add"
                      onClick={() => {
                        setShowModal(true);
                        setCurrentStatus("stake");
                      }}
                    />
                  </div>

                  <div className="flex slot__footer justify-between">
                    <div className="flex slot__footer slot__footer-item">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div className="slot__footer-body  ml-1">
                        <p>Your staked TIME</p>
                        <p>0.000</p>
                      </div>
                    </div>
                    <div className="flex  slot__footer-item">
                      <div className="slot__footer-body  mr-1">
                        <p>Rewards</p>
                        <p>0.000</p>
                      </div>
                      <img
                        src="https://dsgmetaverse.com/images/tokens/DSG.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex meta-slot__connect">
                  <p
                    className="btn__enable"
                    onClick={() => {
                      setShowModal(true);
                      setCurrentStatus("view");
                    }}
                  >
                    View
                  </p>
                  <p className="btn__enable">HarVest</p>
                </div>
              </div>
            </div>
            <div className="meta-slot__data-pd md:w-full lg:w-1/2 xl:w-1/3 ">
              <div className="meta-slot__data ">
                <div className="meta-slot__time">
                  <p>Earn TIME&DSG</p>
                  <p>180 d Lock time</p>
                </div>
                <div className="meta-slot__header flex ">
                  <img
                    src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                    alt=""
                  />
                  <div className="slot__header-body ml-2">
                    <p>TIME</p>
                    <Link href="#" className="flex link-contract">
                      View Contract <FiExternalLink className="m-auto ml-1 " />
                    </Link>
                  </div>
                </div>
                <div className="meta-slot__body  w-full flex justify-between ">
                  <div className="xl:w-1/3 ">
                    <p>APR</p>
                    <p>117.57%</p>
                  </div>

                  <div className="xl:w-1/3">
                    <p>Boost Factor</p>
                    <p className="rate">0.5 X</p>
                  </div>
                  <div className="xl:w-1/3 text-right">
                    <p> Total staked</p>
                    <p>$ 82,845</p>
                  </div>
                </div>
                <div className="meta-slot__footer ">
                  <div className="flex justify-between">
                    <div className="flex slot__footer mb-3 ">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div className="slot__footer-body ml-1">
                        <p>Your staked TIME</p>
                        <p>0.000</p>
                      </div>
                    </div>

                    <AiOutlinePlusSquare
                      className="icon-add"
                      onClick={() => {
                        setShowModal(true);
                        setCurrentStatus("stake");
                      }}
                    />
                  </div>

                  <div className="flex slot__footer justify-between">
                    <div className="flex slot__footer slot__footer-item">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div className="slot__footer-body  ml-1">
                        <p>Your staked TIME</p>
                        <p>0.000</p>
                      </div>
                    </div>
                    <div className="flex  slot__footer-item">
                      <div className="slot__footer-body  mr-1">
                        <p>Rewards</p>
                        <p>0.000</p>
                      </div>
                      <img
                        src="https://dsgmetaverse.com/images/tokens/DSG.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex meta-slot__connect">
                  <p
                    className="btn__enable"
                    onClick={() => {
                      setShowModal(true);
                      setCurrentStatus("view");
                    }}
                  >
                    View
                  </p>
                  <p className="btn__enable">HarVest</p>
                </div>
              </div>
            </div>
            <div className="meta-slot__data-pd md:w-full lg:w-1/2 xl:w-1/3 ">
              <div className="meta-slot__data ">
                <div className="meta-slot__time">
                  <p>Earn TIME&DSG</p>
                  <p>365 d Lock time</p>
                </div>
                <div className="meta-slot__header flex ">
                  <img
                    src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                    alt=""
                  />
                  <div className="slot__header-body ml-2">
                    <p>TIME</p>
                    <Link href="#" className="flex link-contract">
                      View Contract <FiExternalLink className="m-auto ml-1 " />
                    </Link>
                  </div>
                </div>
                <div className="meta-slot__body  w-full flex justify-between ">
                  <div className="xl:w-1/3 ">
                    <p>APR</p>
                    <p>163.9%</p>
                  </div>

                  <div className="xl:w-1/3">
                    <p>Boost Factor</p>
                    <p className="rate">1 X</p>
                  </div>
                  <div className="xl:w-1/3 text-right">
                    <p> Total staked</p>
                    <p>$ 118,847</p>
                  </div>
                </div>
                <div className="meta-slot__footer ">
                  <div className="flex justify-between">
                    <div className="flex slot__footer mb-3 ">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div className="slot__footer-body ml-1">
                        <p>Your staked TIME</p>
                        <p>0.000</p>
                      </div>
                    </div>

                    <AiOutlinePlusSquare
                      className="icon-add"
                      onClick={() => {
                        setShowModal(true);
                        setCurrentStatus("stake");
                      }}
                    />
                  </div>

                  <div className="flex slot__footer justify-between">
                    <div className="flex slot__footer slot__footer-item">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div className="slot__footer-body  ml-1">
                        <p>Your staked TIME</p>
                        <p>0.000</p>
                      </div>
                    </div>
                    <div className="flex  slot__footer-item">
                      <div className="slot__footer-body  mr-1">
                        <p>Rewards</p>
                        <p>0.000</p>
                      </div>
                      <img
                        src="https://dsgmetaverse.com/images/tokens/DSG.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex meta-slot__connect">
                  <p
                    className="btn__enable"
                    onClick={() => {
                      setShowModal(true);
                      setCurrentStatus("view");
                    }}
                  >
                    View
                  </p>
                  <p className="btn__enable">HarVest</p>
                </div>
              </div>
            </div>
            <div className="meta-slot__data-pd md:w-full lg:w-1/2 xl:w-1/3 ">
              <div className="meta-slot__data ">
                <div className="meta-slot__time">
                  <p>Earn TIME&DSG</p>
                  <p>730 d Lock time</p>
                </div>
                <div className="meta-slot__header flex ">
                  <img
                    src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                    alt=""
                  />
                  <div className="slot__header-body ml-2">
                    <p>TIME</p>
                    <Link href="#" className="flex link-contract">
                      View Contract <FiExternalLink className="m-auto ml-1 " />
                    </Link>
                  </div>
                </div>
                <div className="meta-slot__body  w-full flex justify-between ">
                  <div className="xl:w-1/3 ">
                    <p>APR</p>
                    <p>173.77%</p>
                  </div>

                  <div className="xl:w-1/3">
                    <p>Boost Factor</p>
                    <p className="rate">2 X</p>
                  </div>
                  <div className="xl:w-1/3 text-right">
                    <p> Total staked</p>
                    <p>$ 224,197</p>
                  </div>
                </div>
                <div className="meta-slot__footer ">
                  <div className="flex justify-between">
                    <div className="flex slot__footer mb-3 ">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div className="slot__footer-body ml-1">
                        <p>Your staked TIME</p>
                        <p>0.000</p>
                      </div>
                    </div>

                    <AiOutlinePlusSquare
                      className="icon-add"
                      onClick={() => {
                        setShowModal(true);
                        setCurrentStatus("stake");
                      }}
                    />
                  </div>

                  <div className="flex slot__footer justify-between">
                    <div className="flex slot__footer slot__footer-item">
                      <img
                        src="https://sv.dsgmetaverse.com/images/tokens/0xc7184a87D9443A52F6E578E3C0A611468536487f.svg"
                        alt=""
                      />
                      <div className="slot__footer-body  ml-1">
                        <p>Your staked TIME</p>
                        <p>0.000</p>
                      </div>
                    </div>
                    <div className="flex  slot__footer-item">
                      <div className="slot__footer-body  mr-1">
                        <p>Rewards</p>
                        <p>0.000</p>
                      </div>
                      <img
                        src="https://dsgmetaverse.com/images/tokens/DSG.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex meta-slot__connect">
                  <p
                    className="btn__enable"
                    onClick={() => {
                      setShowModal(true);
                      setCurrentStatus("view");
                    }}
                  >
                    View
                  </p>
                  <p className="btn__enable">HarVest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MetaTime>
  );
}
