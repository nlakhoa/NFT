import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineQuestionCircle, AiFillCloseCircle } from "react-icons/ai";

export default function Mint() {
  const [status, setStatus] = useState("minted");
  const [showModal, setShowModal] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("");

  const Mint = styled.div`
    .meta__modal {
      max-width: 480px;
      max-height: 600px;
      border-radius: 12px;
      box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
      display: flex;
      flex-direction: column;
      padding: 18px;
      font-size: 18px;
      background-color: ${(props) => props.theme.bgItem};
      color: ${(props) => props.theme.textBody};
      z-index: 99999999999;
      position: fixed;
      right: calc(50% - 233px);
      top: calc(50% - 260px);
      min-width: 480px;
      .meta__modal-header {
        justify-content: space-between;
        font-weight: bold;
        border-bottom: 1px solid #ccc;
        padding-bottom: 8px;
        font-size: 24px;
        .header-icon {
          color: ${(props) => props.theme.borderBtn};
          font-size: 32px;
          cursor: pointer;
        }
        .header-icon:hover {
          opacity: 0.8;
        }
      }

      .meta__modal-body-stake {
        padding-top: 24px;
        .number-percent {
          color: ${(props) => props.theme.borderBtn};
        }
        .wallet-address{
            opacity:0.6;
          }
        .body-stake {
          background: ${(props) => props.theme.bgBodyTop};
          box-shadow: rgb(16 64 54 / 21%) 0px 1px 3px 0px inset;
          border-radius: 10px;
          margin-bottom: 6px;
          font-size: 18px;
          padding: 16px;
          font-weight: 500;
         
          .body-stake__body-bot {
            margin-top: 12px;
            .btn-max {
              line-height: 21px;
              padding: 6px 12px;
            }
          }
          .body-stake__body {
            overflow: hidden;
          }
          .btn-max {
            color: black;
            border: 2px solid black;
            background-color: ${(props) => props.theme.borderBtn};
            cursor: pointer;
            border-radius: 25px;
            font-size: 16px;
            margin: auto 12px;
            height: 36px;
            text-align: center;
            line-height: 36px;
          }
          .btn-max:hover {
            opacity: 0.8;
          }
          img {
            width: 64px;
            margin-right: 12px;
          }
        }
        .body-stake__bot {
          p:nth-child(1) {
            opacity: 0.6;
          }
          p:nth-child(2) {
            font-size: 24px;
            font-weight: bold;
            color: ${(props) => props.theme.borderBtn};
          }
        }
        .btn-claim {
          color: black;
          border: 2px solid ${(props) => props.theme.borderBtn};
          padding: 6px 12px;
          cursor: pointer;
          border-radius: 25px;
          margin: 12px auto 6px auto;
          max-width: 176px;
          font-size: 16px;
          text-align: center;
          font-weight: bold;
        }
        .btn-claim-active {
          background: ${(props) => props.theme.borderBtn};
        }
        .disable {
          border: 2px solid #ccc;
          background: #ccc;
        }
        .btn-claim:hover {
          opacity: 0.8;
        }
        .modal__des {
          font-size: 18px;
          margin-bottom: 36px;
        }
      }
    }

    .mint {
      background: ${(props) => props.theme.bgBodyTop};
      min-height: calc(100vh - 80px);
      color: ${(props) => props.theme.textBody};
      .mint-top,
      .mint-body {
        max-width: 1260px;
        margin: 0 auto;
        width: calc(100vw - 312px);
        .mint-top__title {
          padding-top: 32px;
          font-size: 80px;
          font-weight: bold;
          color: ${(props) => props.theme.textBody};
        }
        .mint-top__header {
          .mint-top__left {
            color: ${(props) => props.theme.borderBtn};
            .mint-top__left-title {
              font-size: 96px;
              font-weight: bold;
              img {
                width: 64px;
              }
            }
            .mint-top__left-des {
              font-size: 48px;
              font-weight: bold;
              img {
                width: 64px;
              }
            }
          }
          .mint-top__right {
            padding: 18px 36px;
            box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
            border-radius: 16px;
            background: ${(props) => props.theme.bgItemGL};
            color: white;
            p {
              font-size: 18px;
            }
            p:nth-child(2) {
              font-size: 28px;
              font-weight: bold;
            }
            div {
              margin-bottom: 12px;
            }
            .mint-top__right-header {
              font-weight: bold;
              .icon-question {
                margin: auto 12px;
                font-size: 24px;
              }
              p:nth-child(2) {
                font-size: 28px;
              }
            }
          }
        }
        .mint-top__body {
          margin-bottom: 36px;
          .mint-top__body-item {
            padding: 24px;
            box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
            border-radius: 16px;
            font-size: 16px;

            .body-item__header {
              padding: 16px;
              background: ${(props) => props.theme.bgItem};
              border-radius: 16px;
              min-height: 215px;
              color: ${(props) => props.theme.textBody};
              .body-item__header-item {
                margin: auto 12px;
                p {
                  font-size: 18px;
                }
                p:nth-child(2) {
                  font-size: 24px;
                  font-weight: bold;
                  color: ${(props) => props.theme.borderBtn};
                }
              }
              img {
                width: 76px;
              }
              p:nth-child(1) {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 12px;
              }
            }
            .body-item__header-right {
              padding: 24px;
              font-size: 18px;
              background: ${(props) => props.theme.bgItem};
              border-radius: 16px;
              margin-bottom: 24px;
              p:nth-child(2) {
                font-size: 24px;
                font-weight: bold;
                color: ${(props) => props.theme.borderBtn};
              }
            }
            .btn-enable {
              border: 2px solid ${(props) => props.theme.borderBtn};
              background: ${(props) => props.theme.borderBtn};
              color: black;
              padding: 6px 12px;
              cursor: pointer;
              border-radius: 25px;
              margin-top: 12px;
            }
            .btn-enable:hover {
              opacity: 0.8;
            }
            .disable {
              border: 2px solid #ccc;
              background: #ccc;
            }
          }
        }
      }

      .mint-body__nav {
        margin-bottom: 24px;
        padding: 0 24px;
        font-size: 18px;
        font-weight: 500;
        box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
        border-radius: 24px;
        .mint-body__nav-item {
          text-align: center;
          min-height: 60px;
          padding: 6px 0;
          cursor: pointer;
          font-style: italic;
        }
        .mint-body__nav-item:hover {
          opacity: 0.8;
        }
        .rich {
          line-height: 54px !important;
        }
        .active {
          border-bottom: 6px solid ${(props) => props.theme.borderBtn};
          color: ${(props) => props.theme.borderBtn};
        }
      }
      .exchange__table-bg {
        padding: 24px;
        box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
        border-radius: 20px;
        width: calc(100vw - 312px);
        max-width: 1260px;
        margin-top: 32px;
        background: ${(props) => props.theme.bgItem};
        .exchange__table {
          margin: 0 auto;
          border-radius: 20px;
          padding: 12px 24px;
          font-size: 18px;
          background: ${(props) => props.theme.bgBodyTop};

          .table__header {
            font-weight: bold;
          }
          .table__body {
            align-items: center;
            display: flex;
            flex-direction: column;
            min-height: 300px;
            text-align: center;
            .text-left {
              img {
                width: 30px;
                height: 30px;
              }
            }
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

          .exchange__table-item {
            box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
            padding: 16px;
            margin: 24px;
            border-radius: 16px;
            background: ${(props) => props.theme.bgItem};
            p:nth-child(2) {
              font-weight: bold;
            }
            .table-btn {
              color: white;
              border: 2px solid ${(props) => props.theme.borderBtn};
              background: ${(props) => props.theme.borderBtn};
              padding: 6px 12px;
              cursor: pointer;
              border-radius: 25px;
              margin-left: 8px;
              height: 36px;
              line-height: 22px;
            }
          }
          .exchange__table-body {
            img {
              width: 46px;
            }
            p {
              margin: auto 12px;
              font-weight: bold;
              font-size: 18px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 1023px) {
      .mint {
        .mint-top,
        .mint-body,
        .exchange__table-bg {
          width: calc(100vw - 180px);
          .mint-top__header .mint-top__left {
            .mint-top__left-title {
              font-size: 42px;
            }

            .mint-top__left-des {
              margin: 24px 12px 0 0;
              font-size: 32px;
              line-height: 66px;
            }
          }

          .exchange__table {
            font-size: 15px;
          }
        }
        .mint-top {
          .mint-top__body .mint-top__body-item .body-item__header {
            min-height: 160px;
          }
        }
      }
    }
    @media screen and (max-width: 739px) {
      .meta__modal {
        right: 5%;
        max-width: 90%;
        min-width: 0;
      }
      .mint {
        .mint-top,
        .mint-body,
        .exchange__table-bg {
          width: calc(100vw - 40px);
          padding: 12px;
          .exchange__table {
            font-size: 12px;
            .text-left {
              div {
                overflow: hidden;
              }
            }
          }
          .mint-top__title {
            font-size: 50px;
          }
          .mint-top__header .mint-top__left {
            margin-bottom: 12px;

            .mint-top__left-title {
              font-size: 42px;
            }

            .mint-top__left-des {
              margin: 24px 12px 0 0;
              font-size: 32px;
              line-height: 66px;
            }
          }
          .mint-top__header {
            flex-wrap: wrap;
          }
          .exchange__table {
            font-size: 15px;
            padding: 6px;
            .table__header {
              font-size: 12px;
              overflow: hidden;
            }
          }
        }
        .mint-top {
          .mint-top__body .mint-top__body-item .body-item__header {
            min-height: 160px;
          }
        }
        .mint-body__nav {
          font-size: 12px;
          padding: 0 8px;
          .mint-body__nav-item {
            line-height: 24px;
          }
        }
      }
    }
  `;
  const renderTable = () => {
    if (status === "minted") {
      return (
        <div className="exchange__table w-full">
          <div className="flex table__header mb-3 ">
            <div className="w-1/4">Wallet Address</div>
            <div className="w-1/4">Time</div>
            <div className="w-1/4 text-center">Minted amount(DSG)</div>
            <div className="w-1/4  text-right">Referrer</div>
          </div>
          <div className="table__body">
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/4">0xF27b...f369</div>
              <div className="w-1/4">2022-01-10 15:38</div>
              <div className="w-1/4 text-center">100.000</div>
              <div className="w-1/4 text-right">0xD2e1...008B</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/4">0xF27b...f369</div>
              <div className="w-1/4">2022-01-10 15:38</div>
              <div className="w-1/4 text-center">100.000</div>
              <div className="w-1/4 text-right">0xD2e1...008B</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/4">0xF27b...f369</div>
              <div className="w-1/4">2022-01-10 15:38</div>
              <div className="w-1/4 text-center">100.000</div>
              <div className="w-1/4 text-right">0xD2e1...008B</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/4">0xF27b...f369</div>
              <div className="w-1/4">2022-01-10 15:38</div>
              <div className="w-1/4 text-center">100.000</div>
              <div className="w-1/4 text-right">0xD2e1...008B</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/4">0xF27b...f369</div>
              <div className="w-1/4">2022-01-10 15:38</div>
              <div className="w-1/4 text-center">100.000</div>
              <div className="w-1/4 text-right">0xD2e1...008B</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/4">0xF27b...f369</div>
              <div className="w-1/4">2022-01-10 15:38</div>
              <div className="w-1/4 text-center">100.000</div>
              <div className="w-1/4 text-right">0xD2e1...008B</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/4">0xF27b...f369</div>
              <div className="w-1/4">2022-01-10 15:38</div>
              <div className="w-1/4 text-center">100.000</div>
              <div className="w-1/4 text-right">0xD2e1...008B</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/4">0xF27b...f369</div>
              <div className="w-1/4">2022-01-10 15:38</div>
              <div className="w-1/4 text-center">100.000</div>
              <div className="w-1/4 text-right">0xD2e1...008B</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/4">0xF27b...f369</div>
              <div className="w-1/4">2022-01-10 15:38</div>
              <div className="w-1/4 text-center">100.000</div>
              <div className="w-1/4 text-right">0xD2e1...008B</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/4">0xF27b...f369</div>
              <div className="w-1/4">2022-01-10 15:38</div>
              <div className="w-1/4 text-center">100.000</div>
              <div className="w-1/4 text-right">0xD2e1...008B</div>
            </div>
          </div>
        </div>
      );
    }
    if (status === "redemption") {
      return (
        <div className="exchange__table w-full">
          <div className="flex table__header mb-3 ">
            <div className="w-1/5">Wallet Address</div>
            <div className="w-1/5">Time</div>
            <div className="w-1/5 text-center">Redemption amount(DSG)</div>
            <div className="w-1/5 text-center ">Exit fee(DSG)</div>
            <div className="w-1/5 text-right">Total profit amount(DSG)</div>
          </div>
          <div className="table__body">
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">0x3690...96D9</div>
              <div className="w-1/5">2022-01-10 15:48</div>
              <div className="w-1/5 text-center">322.984</div>
              <div className="w-1/5 text-center">116.019</div>
              <div className="w-1/5 text-right">106.016</div>
            </div>{" "}
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">0x3690...96D9</div>
              <div className="w-1/5">2022-01-10 15:48</div>
              <div className="w-1/5 text-center">322.984</div>
              <div className="w-1/5 text-center">116.019</div>
              <div className="w-1/5 text-right">106.016</div>
            </div>{" "}
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">0x3690...96D9</div>
              <div className="w-1/5">2022-01-10 15:48</div>
              <div className="w-1/5 text-center">322.984</div>
              <div className="w-1/5 text-center">116.019</div>
              <div className="w-1/5 text-right">106.016</div>
            </div>{" "}
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">0x3690...96D9</div>
              <div className="w-1/5">2022-01-10 15:48</div>
              <div className="w-1/5 text-center">322.984</div>
              <div className="w-1/5 text-center">116.019</div>
              <div className="w-1/5 text-right">106.016</div>
            </div>{" "}
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">0x3690...96D9</div>
              <div className="w-1/5">2022-01-10 15:48</div>
              <div className="w-1/5 text-center">322.984</div>
              <div className="w-1/5 text-center">116.019</div>
              <div className="w-1/5 text-right">106.016</div>
            </div>{" "}
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">0x3690...96D9</div>
              <div className="w-1/5">2022-01-10 15:48</div>
              <div className="w-1/5 text-center">322.984</div>
              <div className="w-1/5 text-center">116.019</div>
              <div className="w-1/5 text-right">106.016</div>
            </div>{" "}
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">0x3690...96D9</div>
              <div className="w-1/5">2022-01-10 15:48</div>
              <div className="w-1/5 text-center">322.984</div>
              <div className="w-1/5 text-center">116.019</div>
              <div className="w-1/5 text-right">106.016</div>
            </div>{" "}
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">0x3690...96D9</div>
              <div className="w-1/5">2022-01-10 15:48</div>
              <div className="w-1/5 text-center">322.984</div>
              <div className="w-1/5 text-center">116.019</div>
              <div className="w-1/5 text-right">106.016</div>
            </div>{" "}
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">0x3690...96D9</div>
              <div className="w-1/5">2022-01-10 15:48</div>
              <div className="w-1/5 text-center">322.984</div>
              <div className="w-1/5 text-center">116.019</div>
              <div className="w-1/5 text-right">106.016</div>
            </div>
          </div>
        </div>
      );
    }
    if (status === "list") {
      return (
        <div className="exchange__table w-full">
          <div className="flex table__header mb-3 ">
            <div className="w-1/5"></div>
            <div className="w-1/5">Wallet Address</div>
            <div className="w-1/5">Total vDSG</div>
            <div className="w-1/5">Minted vDSG</div>
            <div className="w-1/5">Reward vDSG</div>
          </div>
          <div className="table__body">
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">#1</div>
              <div className="w-1/5">0xC4eb...805E</div>
              <div className="w-1/5">29735.176</div>
              <div className="w-1/5">12924.416</div>
              <div className="w-1/5">16813.460</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">#2</div>
              <div className="w-1/5">0xC4eb...805E</div>
              <div className="w-1/5">29735.176</div>
              <div className="w-1/5">12924.416</div>
              <div className="w-1/5">16813.460</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">#3</div>
              <div className="w-1/5">0xC4eb...805E</div>
              <div className="w-1/5">29735.176</div>
              <div className="w-1/5">12924.416</div>
              <div className="w-1/5">16813.460</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">#4</div>
              <div className="w-1/5">0xC4eb...805E</div>
              <div className="w-1/5">29735.176</div>
              <div className="w-1/5">12924.416</div>
              <div className="w-1/5">16813.460</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">#5</div>
              <div className="w-1/5">0xC4eb...805E</div>
              <div className="w-1/5">29735.176</div>
              <div className="w-1/5">12924.416</div>
              <div className="w-1/5">16813.460</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">#6</div>
              <div className="w-1/5">0xC4eb...805E</div>
              <div className="w-1/5">29735.176</div>
              <div className="w-1/5">12924.416</div>
              <div className="w-1/5">16813.460</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">#7</div>
              <div className="w-1/5">0xC4eb...805E</div>
              <div className="w-1/5">29735.176</div>
              <div className="w-1/5">12924.416</div>
              <div className="w-1/5">16813.460</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">#8</div>
              <div className="w-1/5">0xC4eb...805E</div>
              <div className="w-1/5">29735.176</div>
              <div className="w-1/5">12924.416</div>
              <div className="w-1/5">16813.460</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">#9</div>
              <div className="w-1/5">0xC4eb...805E</div>
              <div className="w-1/5">29735.176</div>
              <div className="w-1/5">12924.416</div>
              <div className="w-1/5">16813.460</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/5">#10</div>
              <div className="w-1/5">0xC4eb...805E</div>
              <div className="w-1/5">29735.176</div>
              <div className="w-1/5">12924.416</div>
              <div className="w-1/5">16813.460</div>
            </div>
          </div>
        </div>
      );
    }
    if (status === "Leaderboard") {
      return (
        <div className="exchange__table w-full">
          <div className="grid xl:grid-cols-3 gap-5">
            <div className="exchange__table-item">
              <div className="flex justify-between mb-2">
                <div>
                  <p>Friends Referred</p>
                  <p>0</p>
                </div>
                <p className="table-btn">View</p>
              </div>
            </div>
            <div className="exchange__table-item">
              <div className="flex mb-2">
                <div>
                  <p>Current vDSG Staked by Friends</p>
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="exchange__table-item">
              <div className="flex mb-2">
                <div>
                  <p>Monthly vDSG Reward</p>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex exchange__table-body">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NTQ3MTg4ODBBRTgxMUVDQTM1MEY2QjAwM0JGQURFNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NTQ3MTg4OTBBRTgxMUVDQTM1MEY2QjAwM0JGQURFNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg1NDcxODg2MEFFODExRUNBMzUwRjZCMDAzQkZBREU3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg1NDcxODg3MEFFODExRUNBMzUwRjZCMDAzQkZBREU3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bmGnDQAABMZJREFUeNrsWnmIVVUYvy9tMMMsDTXNGSRTtMytP9zKP0IliDLGpdx3XMs0cclE01Rc0iKHShQjLVssVNQ0hXHBIcEFtRQVSpyRUjHHPXV8/T78Xfg43jdz37vnvZ54Pvhxz93OO79zvvNt98Xi8bh3P8kD3n0mjrAj7Ag7wo6wI+wIO8IZk8pRO5i9u5c+7QSMAl4EHovY9W3gCLAGWAz8E/TQlHZf/y8rnAN8CWwBXrNA1h/bM8A04CjQMZtU+gugXxo1sRawEWgWtaNY2GwJqluDM17JuNUI+FydlwAfAnuBGxFJ9gf0nikSLTaeKwN+g2qft0IYRGM4fABMBB6soL9zQEug2OLqzgEmVfDMTWAe8D6Ix6Oq9DhgagiyvmoXW1bnWSRUnsjY3gPetbGH3zHUp9SAluNp2L9XgNPq/Lrx+7fUvbdtuKV6qj0AKrPSUPkLOFTPoCudTDfli+zxVQFjtWKlL2dhLHHVduBxDXhI+duoIn31AfKADbS8UeRR1S61TbiGhchuM/CCHygB3RlNpSp6O12yodKnVLtuRMLdSVZcx2Fxi8D8iCFurhEDRCb8p2o/lcKAHqdr+Rko4LXvgNdp9RswSJGguGsK/TdOxkuEmdljqt06BRXeBjxnXJdA5gRJ9uV9wZsMUb9K4jeeV+3fbazwDj2bcEN5SQ7GJzudhFqrgYnf7AyMBLbz2rAk+6+tzgttEC40nPuAJAZ0UbXPAquBfeqapHy/AD8ANVNwM0MNC70nMmEEGpeZqfgyHqv8RMgByUp+z/YSYEQCKytq/yxDyFkh+24FDFLn32CsZbYCj49UuxqwCaRzQ74rPncr2xMC7ndQad8bwM4QfbYB1ikbJBq40Fo+jJmT/aVDyuZiEUFafGrVCl6/oaznQWXMGrJ9SD17JGRoWWSEkXMxxhO2CwAjjD2SQ4MTJovy3dlJoIfkr7T+sqcfUXlzg5B5spa1NIh2Kx7cyy8Bn9F/BkmlBNeP8vgW8C2LBhJ09OQK5zAYSbTCsQRZlKSt+WH2btIVDyNDqo/Dq3Q5+crCLgcGB7xSkyvRnpO1ivt6AvfvdRYYPkkQuPytFucnYj1wIdkiXizqB3GQ/9S7U6n03Uw9xt9BkkdXpSuQMnnnuWJBMkZNhFQyxUOcUZqX8SKe/kWpVg4v59mT3t3l1lPlkK0iblCd79JkUxEbhHcDv6rzGSGNTxiZRq3w5eOoHdoq004y/PSPFqog+Ua/Rdy7WUG4kNbblxY0SnVS7K+3RE7KOl+lMYxnC2GRsUb1QgL7/fS7yaSSyxjk+P5dSA4MGZRklPC/wMsG6Tr0uweYBdVN4Lvbcn/+YcTHYpWHMH+2IpU9u1LK4KTAyKokFPW/ThTTWt/iPn8aeDigr7OMw7fYHKBtwn4NbCAN10IS0vIkkUjKaA8kXDxne3Dp/D4skVBToBvJV5TnSilpJidodDrIpmuFtYjariGk8tmEk7CUQYXIImpCiZcByeQ/AK6x2rGSBs5TKWNJpgbh/vJgSWp55dewdRqZy0AlSCOO2Qg20k24C8svYT/LzCCCRNS/b7ar9CuenW9QIl3vhT28AvjLkoVfYHtwMfePeEfYEXaEHWFH2BF2hB3hNMl/AgwAzsMg0RLJoR8AAAAASUVORK5CYII="
              alt=""
            />
            <p>vDSG Referral Leaderboard</p>{" "}
          </div>
          <div className="flex table__header mb-3 ">
            <div className="w-1/3">Wallet Address</div>
            <div className="w-1/3">Total vDSG by Referee</div>
            <div className="w-1/3  text-right">Approx. Monthly vDSG Boost</div>
          </div>
          <div className="table__body">
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/3 flex">
                <img
                  src="https://dsgmetaverse.com/images/member/gold-medal.png"
                  alt=""
                />{" "}
                <span>0x7377...C86e</span>
              </div>
              <div className="w-1/3">0xC4eb...805E</div>
              <div className="w-1/3 text-right">29735.176</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/3 flex">
                <img
                  src="https://dsgmetaverse.com/images/member/silver-medal.png"
                  alt=""
                />{" "}
                <span>0x7077...dD09</span>
              </div>
              <div className="w-1/3">0xC4eb...805E</div>
              <div className="w-1/3 text-right">29735.176</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/3 flex">
                <img
                  src="https://dsgmetaverse.com/images/member/bronze-medal.png"
                  alt=""
                />{" "}
                <span>0xCb6A...38B4</span>
              </div>
              <div className="w-1/3">0xC4eb...805E</div>
              <div className="w-1/3 text-right">29735.176</div>
            </div>
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/3">
                #4 <span>0x07ae...Da8f</span>
              </div>
              <div className="w-1/3">0xC4eb...805E</div>
              <div className="w-1/3 text-right">29735.176</div>
            </div>{" "}
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/3">
                #5 <span>0xeA9B...13B1</span>
              </div>
              <div className="w-1/3">0xC4eb...805E</div>
              <div className="w-1/3 text-right">29735.176</div>
            </div>{" "}
            <div className="flex justify-between w-full text-left mb-4">
              <div className="w-1/3">
                #6 <span>0xD2e1...008B</span>
              </div>
              <div className="w-1/3">0xC4eb...805E</div>
              <div className="w-1/3 text-right">29735.176</div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Mint>
      {showModal ? (
        <>
          <div className="meta__modal">
            <div className="meta__modal-header flex ">
              <h4>
                {currentStatus === "invite" ? "Mint vDSG" : "Redeem vDSG"}
              </h4>
              <AiFillCloseCircle
                className="header-icon"
                onClick={() => setShowModal(false)}
              />
            </div>
            {currentStatus === "invite" ? (
              <div className="meta__modal-body-stake">
                <div className="body-stake ">
                  <div className="flex body-stake__body-top justify-between">
                    <p>Stake</p>
                    <p>Balance: 91.849</p>
                  </div>
                  <div className="flex body-stake__body-bot justify-between">
                    <p>10.1</p>
                    <p className="btn-max">MAX</p>
                    <p>vDSG</p>
                  </div>
                </div>
                <div className="body-stake ">
                  <p className="wallet-address">Please enter a referrer wallet address </p>
                </div>
                <p className="wallet-address mx-1">
                  *If you do not enter an address, you will be bound to the protocol address. Protocol address DOES NOT have redeem function.
                </p>
                <div className="flex justify-between mx-1 my-2">
                  <p className="wallet-address">Radio</p>
                  <p><b>1 vDSG = 100 DSG</b></p>
                </div>
                <div className="flex justify-between mx-1 ">
                  <p className="wallet-address">Receive </p>
                  <p>0.101 vDSG</p>
                </div>
                <div className="flex justify-around mb-2">
                  <p className="btn-claim disable">Cancel</p>
                  <p className="btn-claim disable">Confirming</p>
                </div>
              </div>
            ) : (
              <div className="meta__modal-body-stake">
                <div className="body-stake ">
                  <div className="flex body-stake__body-top justify-between">
                    <p>Unstake</p>
                    <p>Balance: 0.101</p>
                  </div>
                  <div className="flex body-stake__body-bot justify-between">
                    <p>0</p>
                    <p className="btn-max">MAX</p>
                    <p>vDSG</p>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <p className="flex">
                    Current Exit Fee Rate{" "}
                    <AiOutlineQuestionCircle className="my-auto ml-1" />
                  </p>
                  <p className="number-percent">36.08%</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Receive</p>
                  <p>
                    <b>0.000 DSG</b>
                  </p>
                </div>
                <p>
                  *Unstaking will return the DSG according to you share minus
                  the penalty fee.
                </p>
                <div className="flex justify-around mb-2">
                  <p className="btn-claim">Cancel</p>
                  <p className="btn-claim disable">Confirm</p>
                </div>
              </div>
            )}
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>
        </>
      ) : null}
      <div className="mint">
        <div className="mint-top ">
          <h3 className="mint-top__title ">Total current vDSG</h3>
          <div className="mint-top__header flex w-full">
            <div className="flex  justify-between xl:w-3/5 lg:w-3/5 sm:w-full">
              <div className="mint-top__left">
                <div className="mint-top__left-title flex">
                  <p>408,769</p>
                  <img
                    src="https://dsgmetaverse.com/images/member/vDSG.svg"
                    alt=""
                  />
                </div>
                <div className="mint-top__left-des flex">
                  <p>8,434,653</p>
                  <img
                    src="https://dsgmetaverse.com/images/member/USDT-l.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mint-top__right  xl:w-2/5 lg:w-3/5 sm:w-full">
              <div className="mint-top__right-header">
                <p className="flex ">
                  Your Real-Time APY
                  <AiOutlineQuestionCircle className="icon-question" />
                </p>
                <p>102.38%</p>
              </div>
              <div>
                <p>Total Number of vDSG Members</p>
                <p>7313</p>
              </div>
              <div>
                <p>Current Exit Fee Rate</p>
                <p>35.91 %</p>
              </div>
            </div>
          </div>
          <div className="mint-top__body mt-4 grid xl:grid-cols-3 gap-5">
            <div className="mint-top__body-item">
              <div className="body-item__header">
                <p>Mint vDSG</p>
                <p>
                  Users can forge one vDSG by pledging 100 DSG. vDSG is not only
                  the membership certificate of the platform, but also the value
                  capture tool of the platform.
                </p>
              </div>
              <div className="flex justify-around">
                <p className="btn-enable">Enable</p>
                <p
                  className="btn-enable"
                  onClick={() => {
                    setCurrentStatus("Redeem");
                    setShowModal(true);
                  }}
                >
                  Redeem
                </p>
              </div>
            </div>
            <div className="mint-top__body-item">
              <div className="body-item__header flex">
                <img
                  src="https://dsgmetaverse.com/static/media/vDSG.8e365f2e.svg"
                  alt=""
                />

                <div className="body-item__header-item">
                  <p>My vDSG</p>
                  <p>0.000</p>
                </div>
              </div>
              <div className="flex justify-around">
                <p
                  className="btn-enable"
                  onClick={() => {
                    setCurrentStatus("invite");
                    setShowModal(true);
                  }}
                >
                  Invite
                </p>
                <p className="btn-enable ">Member reward</p>
              </div>
            </div>
            <div className="mint-top__body-item">
              <div className="body-item__header-right">
                <p>My minted vDSG</p>
                <p>0.000</p>
              </div>
              <div className="body-item__header-right">
                <p>My reward vDSG</p>
                <p>0.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mint-body w-full">
          <ul className="mint-body__nav xl:w-1/2 lg:w-full flex justify-around">
            <li
              className={
                status === "minted"
                  ? "mint-body__nav-item w-1/4 active"
                  : "mint-body__nav-item w-1/4"
              }
              onClick={() => setStatus("minted")}
            >
              Recently minted
            </li>
            <li
              className={
                status === "redemption"
                  ? "mint-body__nav-item w-1/4 active"
                  : "mint-body__nav-item w-1/4"
              }
              onClick={() => setStatus("redemption")}
            >
              Recently redemption
            </li>
            <li
              className={
                status === "Leaderboard"
                  ? "mint-body__nav-item w-1/4 active"
                  : "mint-body__nav-item w-1/4"
              }
              onClick={() => setStatus("Leaderboard")}
            >
              Refernal Leaderboard
            </li>
            <li
              className={
                status === "list"
                  ? "mint-body__nav-item rich w-1/4 active"
                  : "mint-body__nav-item rich w-1/4"
              }
              onClick={() => setStatus("list")}
            >
              Rich list
            </li>
          </ul>
          <div className="exchange__table-bg">{renderTable()}</div>
        </div>
      </div>
    </Mint>
  );
}
