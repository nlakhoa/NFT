import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeStatusModal } from "../../store/actions/homeAction";
import { Link } from "react-router-dom";
export default function DinoMoney() {
  const dispatch = useDispatch();
  const changeStatusModals = () => {
    dispatch(changeStatusModal());
  };
  const { t } = useTranslation();
  const DinoMoney = styled.div`
    .dino-money {
      min-height: calc(100vh - 80px);
      background-color: ${(props) => props.theme.bgHeader};

      .dino-money-top {
        padding: 40px 0;
        background-color: ${(props) => props.theme.bgHeaderItem};

        .dino-money__top {
          width: calc(100vw - 312px);
          max-width: 1160px;
          margin: 0 auto;
          color: ${(props) => props.theme.textBody};

          .dino-money__top-title {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .dino-money__top-description {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 40px;
          }

          .dino-money__buy {
            gap: 56px;

            .dino-money__buy-item {
              background: linear-gradient(
                90deg,
                rgb(38, 173, 255) 0%,
                rgb(255, 70, 131) 100%
              );
              border: transparent;
              padding: 3px;
              border-radius: 18px;

              .bg__buy-item {
                padding: 30px;
                background: ${(props) => props.theme.bgHeader};
                color: white;
                border-radius: 18px;
                justify-content: space-between;
                /* min-height: 154px; */
                font-size: 18px;
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

                .dino-money__buy-item-body {
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

      .dino-money-money,
      .dino-money-slot {
        color: ${(props) => props.theme.textBody};
        width: calc(100vw - 312px);
        max-width: 1160px;
        margin: 0 auto;
        padding: 40px 0;
        .dino-money-money__title {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 24px;
        }
        .dino-money-money__data {
          background-color: ${(props) => props.theme.bgBodyTop};
          border-radius: 18px;
          box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
          .dino-money-money__data-img {
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
      .dino-money-slot {
        .dino-money-slot__title {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 24px;
        }
        .dino-money-slot__des {
          font-size: 16px;
          margin-bottom: 24px;
        }
        .dino-money-slot__data {
          background-color: ${(props) => props.theme.bgBodyTop};
          border-radius: 18px;
          box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
          .dino-money-slot__btn {
            padding: 12px 24px;
            font-weight: 600;
            font-size: 18px;
            background-color: ${(props) => props.theme.borderBtn};
            color: ${(props) => props.theme.textBody};
            text-align: center;
            border-top-left-radius: 18px;
            border-bottom-right-radius: 18px;
          }
          .dino-money-slot__btn-body {
            font-size: 16px;
            padding: 30px 0;
            text-align: center;
            margin-bottom: 32px;
            .dino-money-slot__body {
              margin-bottom: 12px;
            }
            .dino-money-slot__btn-connect {
              color: ${(props) => props.theme.textBtn};
              border: 2px solid ${(props) => props.theme.borderBtn};
              background-color: ${(props) => props.theme.bgBtn};
              border: 2px solid yellow;
              padding: 6px 12px;
              cursor: pointer;
              border-radius: 25px;
              margin-left: 8px;
              width: 100%;
              font-size: 14px;
            }
          }
        }
      }
    }

    @media screen and (max-width: 1023px) {
      .dino-money {
        .dino-money-top {
          .dino-money__top {
            padding: 12px;
            min-width: calc(100vw - 200px);
          }
        }
        .dino-money-money,.dino-money-slot{
          padding: 12px;
            min-width: calc(100vw - 200px);
        }
       
      }
    }
    @media screen and (max-width: 767px) {
      .dino-money {
        .dino-money-top,
        .dino-money-money,
        .dino-money-slot {
          padding: 12px;
        }
        .dino-money-top {
          .dino-money__top,
          .dino-money-money {
            margin: 0 12px;
            .dino-money__top-title {
              font-size: 28px;
            }
            .dino-money__top-description {
              font-size: 12px;
            }
            .dino-money__buy {
              .dino-money__buy-item {
                .bg__buy-item {
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
    }
  `;

  return (
    <DinoMoney>
      <div className="dino-money">
        <div className="dino-money-top ">
          <div className="dino-money__top">
            <h1 className="dino-money__top-title">
              {t("dinomoney.Stakemoney")}
            </h1>
            <p className="dino-money__top-description">
              {t("dinomoney.Money-hungry")}
            </p>
            <div className="dino-money__buy grid grid-cols-1 xl:grid-cols-2">
              <div className="dino-money__buy-item  ">
                <div className="bg__buy-item flex">
                  <div className="bg__buy-item-left">
                    <p className="bg__buy-item-left-top">
                      {t("dinomoney.distributed")}
                    </p>
                    <p>0.533 BNB</p>
                  </div>
                  <div className="bg__buy-item-right">
                    <p className="bg__buy-item-right-top">
                      {t("dinomoney.Myearnings")}
                    </p>
                    <p>0.000 BNB</p>
                    <span
                      className="right-connect__body"
                      onClick={() => changeStatusModals()}
                    >
                      {t("header.connect")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="dino-money__buy-item  ">
                <div className="bg__buy-item flex">
                  <div className="bg__buy-item-left">
                    <p className="bg__buy-item-left-top">
                      {t("dinomoney.distributed")}
                    </p>
                    <p>0.533 BNB</p>
                    <Link to="/nftmarket" className="right-connect__body">
                      {t("dinomoney.buy")}
                    </Link>
                  </div>
                  <div className="bg__buy-item-right">
                    <p className="bg__buy-item-right-top">
                      {t("dinomoney.Myearnings")}
                    </p>
                    <p>0.000 BNB</p>
                    <span
                      className="right-connect__body"
                      onClick={() => changeStatusModals()}
                    >
                      {t("header.connect")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dino-money-money">
          <h3 className="dino-money-money__title">{t("dinomoney.Mymoney")}</h3>
          <div className="dino-money-money__data">
            <div className="dino-money-money__data-img">
              <img src="https://dsgmetaverse.com/images/no-data.png" alt="" />
            </div>
            <p>{t("dinomoney.NoData")}</p>
          </div>
        </div>
        <div className="dino-money-slot">
          <h3 className="dino-money-slot__title">{t("dinomoney.Mymoney")}</h3>
          <h3 className="dino-money-slot__des">{t("dinomoney.After")}</h3>
          <div className="dino-money-slot__data">
            <span className="dino-money-slot__btn">{t("dinomoney.Enable")}</span>
            <div className="dino-money-slot__btn-body">
              <p className="dino-money-slot__body">
                {t("dinomoney.collecting")}
              </p>
              <span className="dino-money-slot__btn-connect">
                {t("dinomoney.connect")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </DinoMoney>
  );
}
