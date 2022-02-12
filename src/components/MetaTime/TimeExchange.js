import MobileStepper from "@mui/material/MobileStepper";
import React from "react";
import styled from "styled-components";

export default function TimeExchange() {
  const Exchange = styled.div`
    .exchange {
      min-height: calc(100vh - 80px);
      background-color: ${(props) => props.theme.bgHeader};
      .exchange-top,
      .exchange-mid {
        max-width: 1260px;
        margin: 0 auto;
        width: calc(100vw - 312px);
        color: ${(props) => props.theme.textBody};
        .exchange__title {
          padding: 32px 24px;
          font-size: 40px;
          font-weight: bold;
        }
        .exchange__round {
          height: 280px;
          background: url("https://dsgmetaverse.com/images/time/TimeHeaderBg.png");
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 12px;
          color: white;
          .exchange__round-bot {
            margin: 0 12px;
            .exchange__round-bot-item,
            .exchange__round-bot-item-left {
              .mid {
                margin: auto 12px;
              }
              img {
                height: 32px;
                width: 32px;
              }
              .img-dsg {
                margin-left: 28px;
              }
            }

            .exchange__round-bot-item-left {
              margin-left: 76px;
            }
          }
          .exchange__round-left,
          .exchange__round-right {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            min-width: 250px;
            height: 200px;
            justify-content: center;
            .img-infinite {
              height: 176px;
              width: 165px;
              position: absolute;
              background: url("https://b.kisscc0.com/20180813/rpe/kisscc0-science-and-technology-computer-icons-circle-tech-rings-5b7120c762f216.8312688915341406154053.png");
              background-repeat: no-repeat;
              background-size: contain;
              text-align: center;
              display: flex;
              left: 20%;
              top: 10%;
              z-index: 0;
              animation: 60s linear 0s infinite normal none xoayvong;
            }
            h1,
            p {
              z-index: 10;
            }
            h1 {
              font-weight: bold;
              font-size: 28px;
            }
          }
          .exchange__round-mid {
            margin: auto 0;
          }
        }
      }

      .exchange-mid {
        margin: 24px auto 120px auto;
        .exchange-mid__left {
          border-radius: 18px;
          margin: 12px auto;
          max-height: 440px;
          background: url("https://dsgmetaverse.com/images/time/TimeEchangeBg.png");
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          .exchange-mid__left-body {
            bottom: 60px;
            position: absolute;
            left: 32px;
            color: white;
            font-size: 18px;
            .exchange-mid__left-top {
              margin-bottom: 16px;
              p:nth-child(2) {
                span {
                  font-weight: bold;
                }
              }
            }
          }
        }

        .exchange-mid__mid {
          margin: 12px auto;
          padding: 16px 24px;
          max-width: 440px;
          width: 100%;
          min-width: 300px;
          position: relative;
          border-radius: 20px;
          box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
          color: black;
          font-size: 18px;
          background: white;
          .exchange-mid__mid-header {
            margin-bottom: 12px;
          }
          .mid__loading {
            position: relative;
            background-color: rgb(249, 247, 248);
            box-shadow: rgb(16 64 54 / 21%) 0px 1px 3px 0px inset;
            overflow: hidden;
            border-radius: 32px;
            height: 8px;
            margin-bottom: 12px;

            .loading__current {
              width: 5.75591%;
              border-top-left-radius: 32px;
              border-bottom-left-radius: 32px;
              position: absolute;
              top: 0px;
              left: 0px;
              background-color: ${(props) => props.theme.borderBtn};
              height: 100%;
              transition: width 200ms ease 0s;
            }
          }

          .mid__input-top {
            padding: 16px 24px;
            background: rgb(245, 245, 245);
            box-shadow: rgb(16 64 54 / 21%) 0px 1px 3px 0px inset;
            border-radius: 10px;
            margin-bottom: 6px;

            .mid__header {
              margin-bottom: 12px;
              p:nth-child(2) {
                color: ${(props) => props.theme.borderBtn};
              }
            }
            .mid__body {
              .mid_input {
                color: ${(props) => props.theme.borderBtn};
                padding: 0px;
                width: auto;
                flex: 1 1 0%;
                background-color: transparent;
                border-radius: 16px;
                box-shadow: none;
                display: block;
                font-size: 16px;
                height: 40px;
                outline: 0px;
                border: none;
              }
              img {
                width: 28px;
                height: 28px;
              }
            }
            .mid__input-title {
              margin-left: 12px;
              p:nth-child(1) {
                color: ${(props) => props.theme.borderBtn};
              }
              img {
                width: 40px;
                height: 40px;
                margin: auto 12px;
              }
            }
            .mid__input-top-title {
              color: rgb(86, 96, 78);
              font-weight: 400;
              line-height: 1.5;
              font-size: 14px;
            }
          }
          .mid__description {
            color: rgb(86, 96, 78);
            font-weight: 400;
            line-height: 1.5;
            font-size: 14px;
          }
          .mid__approve {
            color: white;
            border: 2px solid ${(props) => props.theme.borderBtn};
            background: ${(props) => props.theme.borderBtn};
            padding: 6px 12px;
            cursor: pointer;
            border-radius: 25px;
            margin-left: 8px;
            text-align: center;
            margin-top: 12px;
          }
          .mid__approve:hover {
            opacity: 0.9;
          }
        }

        .exchange-mid__right {
          margin: 12px auto;
          .mid-right__bg {
            height: 176px;
            width: 165px;
            background: url("https://b.kisscc0.com/20180813/rpe/kisscc0-science-and-technology-computer-icons-circle-tech-rings-5b7120c762f216.8312688915341406154053.png");
            background-repeat: no-repeat;
            background-size: contain;
            margin: 12px auto;
            animation: 60s linear 0s infinite normal none xoayvong;
            cursor: pointer;
          }
          p {
            font-size: 42px;
            font-weight: bold;
            text-align: center;
          }
        }
      }
      .exchange-vesting {
        margin: 24px auto 120px auto;
        max-width: 1260px;
        margin: 0 auto;
        width: calc(100vw - 312px);
        color: rgb(0, 0, 0);
        position: relative;

        .exchange-vesting__bg {
          height: 440px;
          width: 440px;
          margin: auto;
          opacity: 0.5;
          background: url("https://b.kisscc0.com/20180813/rpe/kisscc0-science-and-technology-computer-icons-circle-tech-rings-5b7120c762f216.8312688915341406154053.png");
          background-repeat: no-repeat;
          background-size: contain;
          margin-bottom: 32px;
        }
        .exchange-vesting__text {
          position: absolute;
          top: 0;
          left: 36%;
          top: 43%;
          font-size: 36px;
          font-weight: bold;
          color: ${(props) => props.theme.textBody};
        }
      }

      .exchange__claim,
      .exchange__table {
        max-width: 1260px;
        margin: 0 auto;
        width: calc(100vw - 312px);
        color: rgb(0, 0, 0);
        margin-bottom: 32px;
        border-radius: 20px;
        box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
        color: rgb(40, 52, 51);
        padding: 12px 24px;
        font-size: 16px;
        background: white;
        img {
          height: 42px;
          width: 42px;
          margin: auto 12px;
        }
        .btn-claim {
          color: white;
          border: 2px solid ${(props) => props.theme.borderBtn};
          background: ${(props) => props.theme.borderBtn};
          padding: 6px 12px;
          cursor: pointer;
          border-radius: 25px;
          height: 36px;
          margin: auto 12px;
          line-height: 20px;
        }
      }

      .exchange__table {
        margin-bottom: 46px;
        .table__body {
          align-items: center;
          display: flex;
          flex-direction: column;
          min-height: 300px;
          text-align: center;
          img {
            height: 80px;
            width: auto;
          }
          .table__body-item {
            margin-top: 36px;
          }
        }
        .table__footer {
          p {
            width: 28px;
            height: 28px;
            color: rgb(0, 0, 0);
            border: 1px solid rgb(40, 52, 51);
            cursor: pointer;
            font-size: 16px;
            border-radius: 5px;
            margin: 0px 5px;
            text-align: center;
            font-weight: bold;
          }
          p:nth-child(1) {
            margin-left: 12px;
          }
          p:nth-child(2) {
            background: ${(props) => props.theme.borderBtn};
          }
        }
      }
      @keyframes xoayvong {
        from {
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
          -o-transform: rotate(360deg);
        }
      }
    }
    @media screen and (max-width: 1023px) {
      .exchange {
        .exchange-top,
        .exchange-mid,
        .exchange-vesting,
        .exchange__claim,
        .exchange__table {
          width: calc(100vw - 180px);
        }
      }
    }

    @media screen and (max-width: 767px) {
      .exchange {
        .exchange-top,
        .exchange-mid,
        .exchange-vesting,
        .exchange__claim,
        .exchange__table {
          .exchange-mid__mid .mid__input-top .mid__body .mid_input {
            font-size: 13px;
          }
          width: 100%;
          margin: 24px auto 20px auto;
          .exchange__round {
            .exchange__round-bot {
              margin: 0;
              .exchange__round-bot-item-left {
                margin-left: 6px;
              }
            }
            .exchange__round-right {
              display: none;
            }
            .exchange__round-bot-item {
              display: none;
            }
            .exchange__round-bot-item-left {
              margin: 0;
            }
          }
          .exchange-vesting__bg {
            width: 300px;
            height: 300px;
          }
          .exchange-vesting__text {
            left: 25%;
            top: 36%;
          }
          .btn-claim {
            font-size: 12px;
          }
        }
        .exchange__table {
          margin-bottom: 60px;
        }
      }
    }
  `;
  return (
    <Exchange>
      <div className="exchange">
        <div className="exchange-top">
          <h1 className="exchange__title">TIME Exchange</h1>
          <div className="exchange__round">
            <div className="flex justify-around">
              <div className="exchange__round-left">
                <div className="img-infinite"></div>
                <h1>Current Round</h1>
                <p>Rate</p>
              </div>
              <div className="exchange__round-mid">
                <img
                  src="	https://dsgmetaverse.com/images/time/arrow.png"
                  alt=""
                />
              </div>
              <div className="exchange__round-right">
                {" "}
                <div className="img-infinite"></div>
                <h1>Next Round</h1>
                <p>Rate</p>
              </div>
            </div>
            <div className="flex exchange__round-bot justify-between">
              <div className="flex exchange__round-bot-item-left">
                <div className="left">
                  <img
                    src="	https://dsgmetaverse.com/images/tokens/DSG.png"
                    alt=""
                    className="img-dsg"
                  />
                  <p>1 DSG</p>
                </div>
                <div className="mid">
                  <p>=</p>
                </div>
                <div className="right">
                  <img
                    src="	https://dsgmetaverse.com/images/tokens/TIME.svg"
                    alt=""
                  />
                  <p>66,666,666.67 TIME</p>
                </div>
              </div>
              <div className="flex exchange__round-bot-item">
                <div className="left">
                  <img
                    src="	https://dsgmetaverse.com/images/tokens/DSG.png"
                    alt=""
                    className="img-dsg"
                  />
                  <p>1 DSG</p>
                </div>
                <div className="mid">
                  <p>=</p>
                </div>
                <div className="right">
                  <img
                    src="	https://dsgmetaverse.com/images/tokens/TIME.svg"
                    alt=""
                  />
                  <p>55,555,555.56 TIME</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="exchange-mid flex w-full flex-wrap">
          <div className="exchange-mid__left xl:w-2/5 lg:w-1/2">
            <div className="exchange-mid__left-body">
              <div className="exchange-mid__left-top">
                <p>DSG exchanged into TIME</p>
                <p>
                  <span>10,860,867.48 </span>
                  DSG
                </p>
              </div>
              <div className="exchange-mid__left-top">
                <p>DSG burnt through TIME exchange</p>
                <p>
                  <span>5,430,433.74 </span>
                  DSG
                </p>
              </div>
            </div>
          </div>
          <div className="exchange-mid__mid xl:w-2/5 lg:w-1/2 ">
            <p className="exchange-mid__mid-header">
              $TIME left from this round
            </p>
            <div className="mid__loading">
              <div className="loading__current"></div>
            </div>
            <div className="flex justify-between mb-3">
              <p className="mid-header">57.3982T</p>
              <p className="mid-header">1000T</p>
            </div>
            <div className="mid__input-top">
              <div className="mid__header flex justify-between">
                <p>Exchange</p>
                <p>MAX</p>
              </div>
              <div className="mid__body flex">
                <input
                  type="text"
                  className="mid_input"
                  placeholder="Please enter exchange amount"
                />
                <div className="flex m-auto">
                  <img
                    src="https://dsgmetaverse.com/images/tokens/DSG.png"
                    alt=""
                  />
                  <p> DSG</p>
                </div>
              </div>
            </div>
            <div className="w-full flex mb-3">
              <p className="w-1/2">DSG Balance: 0</p>
              <p className="w-1/2">TIME Balance: 0</p>
            </div>
            <div className="mid__input-top">
              <div className="mid__input-title flex justify-center mb-3">
                <img
                  src="https://dsgmetaverse.com/images/tokens/TIME.svg"
                  alt=""
                />
                <div>
                  <p>0</p>
                  <p>Available TIME</p>
                </div>
              </div>
              <div className="mid__body ">
                <div className="flex justify-between mid__input-top-title">
                  <p>Circulation</p>
                  <p>TIME to be vested</p>
                </div>
                <div className="flex justify-between">
                  <p>0</p>
                  <p>0</p>
                </div>
              </div>
            </div>
            <p className="mid__description">
              *Vesting rules: You will receive 20% TIME tokens immediately, and
              the rest 80% will be vested linearly within the next a year
            </p>
            <p className="mid__approve">Approve</p>
          </div>
          <div className="exchange-mid__right xl:w-1/5 lg:w-1/2 ">
            <div className="mid-right__bg"></div>
            <p>FAQ</p>
          </div>
        </div>
        <div className="exchange-vesting">
          <div className="exchange-vesting__bg"></div>
          <p className="exchange-vesting__text">My Vesting TIME</p>
        </div>
        <div className="exchange__claim">
          <div className="flex justify-between">
            <div className="flex">
              <img
                src="https://dsgmetaverse.com/images/tokens/TIME.svg"
                alt=""
              />
              <div>
                <p>Unclaimed income</p>
                <p>0</p>
              </div>
            </div>
            <p className="btn-claim">Claim all</p>
          </div>
        </div>

        <div className="exchange__table w-full">
          <div className="flex">
            <div className="w-1/4">Round</div>
            <div className="w-1/4">Vesting end TIME</div>
            <div className="w-1/4">Vesting $TIME</div>
            <div className="w-1/4">Claimable $TIME</div>
          </div>
          <div className="table__body">
            <div className="table__body-item">
              <img src="https://dsgmetaverse.com/images/no-data.png" alt="" />
              <p>No Data</p>
            </div>
          </div>
          <div className="table__footer flex justify-center">
            <span>Total 1 page</span>
            <div className="footer__btn flex">
              <p>{`<`}</p>
              <p>1</p>
              <p>{`>`}</p>
            </div>
          </div>
        </div>
      </div>
    </Exchange>
  );
}
