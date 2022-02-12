import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";

export default function TradeNFT() {
  const { t } = useTranslation();
  const [starChecked, setStarChecked] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const handleChange = () => {
    setToggleChecked(!toggleChecked);
  };

  const TradeBody = styled.div`
    .tradeNFT {
      .tradeNFT__top-bg {
        background-color: ${(props) => props.theme.bgBodyTop};

        .tradeNFT__top {
          width: calc(100vw - 312px);
          max-width: 1160px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 0;
          color: #6c6c6d;
          font-size: 16px;

          .tradeNFT__top-title {
            font-size: 32px;
            font-weight: bold;
            color: ${(props) => props.theme.textBody};
          }

          .tradeNFT__top-description {
            margin: 18px 0 56px 0;
          }

          .tradeNFT__top-search {
            height: 54px;
            display: flex;

            .tradeNFT__top-input {
              height: 100%;
              width: 360px;
              background: ${(props) => props.theme.bgBodyTop};
              border-top-left-radius: 25px;
              border-bottom-left-radius: 25px;
              font-size: 14px;
            }

            .tradeNFT__top-input:focus {
              outline: none !important;
              box-shadow: none !important;
            }

            .tradeNFT__top-btn {
              background-color: rgb(255, 232, 4);
              border-top-right-radius: 25px;
              border-bottom-right-radius: 25px;
              padding: 17px 18px 17px 14px;
              font-size: 14px;
              line-height: 20px;
              color: rgb(26, 26, 27);
              font-weight: 600;
              display: flex;
              align-items: center;
              // "#2ECA45":
            }
          }
        }
      }

      .tradeNFT__bot-bg {
        background: ${(props) => props.theme.bgHeader};
        height: 800px;

        .tradeNFT__bot {
          width: calc(100vw - 312px);
          max-width: 1160px;
          margin: 0 auto;
          padding: 60px 0 30px 0;
          color: ${(props) => props.theme.textBody};

          .tradeNFT__bot-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;

            .tradeNFT__bot-left {
              justify-content: space-between;
              display: flex;
              margin: auto 0;

              img {
                height: 30px;
                margin: auto 12px auto 0;
              }

              .tradeNFT__bot-title {
                font-weight: bold;
                font-size: 24px;

                span {
                  font-size: 14px;
                  color: #6c6c6d;
                }
              }
            }

            .tradeNFT__bot-right {
              img {
                height: 17px;
                margin: auto 12px auto 0;
              }

              span {
                font-size: 16px;
                margin: auto 0;
              }

              .btn-toggle {
                margin: auto 0 auto 24px;
              }
            }
          }

          .tradeNFT__bot-body {
            .tradeNFT__bot-card {
              border-radius: 8px;
              padding: 9px;
              box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;

              .card__header {
                justify-content: space-between;
                padding: 9px;

                .card__header-left {
                  font-size: 12px;
                  padding: 2px 5px 3px;
                  border: 1px solid #26adff;
                  color: #26adff;
                  border-radius: 8px;
                  padding-left: 17px;
                  background-image: url("https://app.dodoex.io/static/media/Exchange.6e62ca42.svg");
                  background-position: 5px center;
                  background-size: 10px 10px;
                  background-repeat: no-repeat;
                }

                .card__header-right {
                  margin: auto 0;

                  img {
                    height: 16px;
                    cursor: pointer;
                  }
                }
              }

              .card__img {
                background-color: ${(props) => props.theme.bgHeader};
                position: relative;

                .card__img-body {
                  width: 100%;
                  padding: 36px 0;
                  border-radius: 8px;
                  cursor: pointer;
                }

                .card__img-price {
                  position: absolute;
                  z-index: 11;
                  left: 0px;
                  bottom: 0px;
                  width: 100%;
                  height: 50px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 0px 10px;
                  padding: 0 10px;

                  .card__img-price-left {
                    font-size: 14px;
                    opacity: 0.7;
                  }

                  .card__img-price-right {
                    font-size: 14px;
                    position: relative;

                    .card__img-number {
                      width: 52px;
                      height: 52px;
                    }

                    span {
                      position: absolute;
                      top: 29%;
                      z-index: 100;
                      color: black;
                      right: 40%;
                      font-weight: bold;
                    }
                  }
                }
              }

              .card__body {
                font-size: 12px;
                padding: 15px;

                .card__body-title {
                  font-size: 14px;
                  font-weight: bold;
                  margin-bottom: 24px;

                  img {
                    height: 14px;
                    width: 14px;
                    margin-left: 6px;
                  }
                }

                .card__body-market {
                  justify-content: space-between;
                  color: #6c757d;

                  p {
                    font-size: 18px;
                    font-weight: bold;
                    color: ${(props) => props.theme.textBody};
                  }
                }

                .card__body-price {
                  justify-content: space-between;
                  color: #6c757d;

                  p {
                    font-size: 18px;
                    font-weight: bold;
                    color: #00fad9;
                  }
                }

                .card__body-vat {
                  color: #6c757d;
                  justify-content: end;
                }
              }
            }
          }
        }
      }

      .form-switch {
        display: inline-block;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }

      .form-switch i {
        position: relative;
        display: inline-block;
        margin-right: 0.5rem;
        width: 46px;
        height: 26px;
        background-color: #e6e6e6;
        border-radius: 23px;
        vertical-align: text-bottom;
        transition: all 0.3s linear;
      }

      .form-switch i::before {
        content: "";
        position: absolute;
        left: 0;
        width: 42px;
        height: 22px;
        background-color: ${(props) => props.theme.bgBodyTop};
        border-radius: 11px;
        transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
        transition: all 0.25s linear;
      }

      .form-switch i::after {
        content: "";
        position: absolute;
        left: 0;
        width: 22px;
        height: 22px;
        background-color: #fff;
        border-radius: 11px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
        transform: translate3d(2px, 2px, 0);
        transition: all 0.2s ease-in-out;
      }

      .form-switch:active i::after {
        width: 28px;
        transform: translate3d(2px, 2px, 0);
      }

      .form-switch:active input:checked + i::after {
        transform: translate3d(16px, 2px, 0);
      }

      .form-switch input {
        display: none;
      }

      .form-switch input:checked + i {
        background-color: #4bd763;
      }

      .form-switch input:checked + i::before {
        transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
      }

      .form-switch input:checked + i::after {
        transform: translate3d(22px, 2px, 0);
      }
    }
    @media screen and (max-width: 1023px) {
      .tradeNFT {
        overflow: hidden;
        .tradeNFT__top-bg {
          background-color: ${(props) => props.theme.bgBodyTop};

          .tradeNFT__top {
            /* width: 100%;
            text-align: center; */
            padding:32px  12px;
            min-width: calc(100vw - 200px);
            .tradeNFT__top-description {
            }
          }
        }
        .tradeNFT__bot-bg {
          .tradeNFT__bot {
            padding:32px  0;
            min-width: calc(100vw - 200px);
          }
        }
      }
    }
    @media screen and (max-width: 739px) {
      .tradeNFT {
        overflow: hidden;
        .tradeNFT__top-bg {
          background-color: ${(props) => props.theme.bgBodyTop};

          .tradeNFT__top {
            width: 100%;
            text-align: center;

            .tradeNFT__top-description {
              font-size: 12px;
            }
            .tradeNFT__top-search {
              width: 90%;
            }
          }
        }
        .tradeNFT__bot-bg {
          .tradeNFT__bot {
            width: 100%;
            margin: 0 12px;
            padding: 12px 0;
            .tradeNFT__bot-header{
              .tradeNFT__bot-right{
                span{
                  font-size: 12px;

                }
              }
            }
          }
        }
      }
    }
  `;
  return (
    <TradeBody>
      <div className="tradeNFT">
        <div className="tradeNFT__top-bg">
          <div className="tradeNFT__top">
            <h1 className="tradeNFT__top-title">{t("tradeNFT.titleTop")}</h1>
            <p className="tradeNFT__top-description">
              {t("tradeNFT.description")}
            </p>
            <div className="tradeNFT__top-search">
              <input
                type="text"
                className="tradeNFT__top-input"
                placeholder={t("tradeNFT.placeholderInput")}
              />
              <button className="tradeNFT__top-btn">
                {t("tradeNFT.search")}

                <FiArrowRight
                  className="icon-next"
                  style={{
                    width: "16px",
                    height: "16px",
                    color: "black",
                    marginLeft: "6px",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="tradeNFT__bot-bg">
          <div className="tradeNFT__bot">
            <div className="tradeNFT__bot-header">
              <div className="tradeNFT__bot-left">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
               
                <p className="tradeNFT__bot-title">
                  {t("tradeNFT.explore")} <span> 1 {t("tradeNFT.result")}</span>
                </p>
              </div>
              <div className="tradeNFT__bot-right flex">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAFm0lEQVR4Ab2YY5ybTRTF961t27Zt27Zt27Zt27a7tm1W2U0ezn1zZlU3+LUfTjjP3P+ci8Ci7bROZmnnBUrzyJ/SmbuP6ReWoxSq96wWzLXtBdWj+T3Fd9Roc4BMu8iC/iOfab3IpXI4uRRWyLWITK5lBdVn8Eo49M9AZL911VTnGn6qezWJeTaOg1SPujpyqxqrBMzo909AfL9Qep4O97qq6tlCKwXNESHFq4MOr5FHa1v18818fx1EdZ/WXXWpEwsIXcRlOS42msSPG0iMmMmSYHxGzUD6/hoId8O57W0EE0O2SbFaHYlR60iK7E9y1EgSgoYozK25BFeIrHP9NRB0CTk3jFG8BgtwQvh4WA/REyBJEj17SIAxtlZ+/+YwStmqN6VFJzyPEjKRS7cD5FRHFcLOSFqNA4f4XoJvF4U5t2Tk0fsCrjU0RT9Yj45gbmOGkGu/pQiMwkQ6yLndE9WuVqTi1lPQxjxgSIUc0Umvrt8qvD2Jrm0kOEeuPY+QW9/1iuvAediTOxpxphji/BRkmQ2l5EVo2/IegjGHOhJOzhwbMpxOdeuuQoAQAzeKSIka3gJBfyq4ojq30+FaCPvwPW0bxpFDI39m1eKO4jh08tfdxYcTd+Btlc9kXV5R7RsJ2ETynSmhIIXwXaoQsYWhKOMLc64eoh1Afik5bBCJYWtUMXyjyu+DV8jYDwfB/vS8rEB3CmvpdZNXyAAHwVgGIXtbSlEdW2ohBJeiF5ES0Ts+aGhjLhbaAEp4/nslg7Xj+yCVaHFezE+rfGZPK32hm7lFsux0HDXIP7ToffuzAIF16AhcxEKq61UrQXXMUK1vRIHlSHxeUgsY7sqL5ndgRtKQAqFi2UAHR/jJg6sSC6pmvrAPDhVUlcinBJF7Noq9nV2nPkwAsRkyF+WR1C30pvsBelZFhisYWCBnQeXNFvln5+IQ3nlIepmaaa6V0tC9UgI9bv4aBftN++IFetrmLmDgjOxRklFgIaLAEmaopB4gI5F7Ku6E/C41fbpSUKfeqiDSg/ru5L2p9k/nCHqcwzysmgwTkJsAZIrgAADINSPJr1N9AyG7rGj628nKnXnW+QzdqSLKT2toJcciCqwFkMHCeueMRJYWRM8tSLyekn26VJhDIB1wwqAR/5Fcs9LLgevpSuVPyvWKGtmxSjyMf+bfC2nwTEdkpwd4HS/hbGpVc6KwFvvggHDdqM+az/Q5J91tZknXq2gxVcnFgrjcUiLnycJzKPF9R73ecQjuhnQ9ncIulhHUx10v4PPK6A892EdXq4WrD1rFMa8mCGC4ElICqXdSMPlycYHut7mH7jQahD0fP4Gf5GUXLW89h4QgDgbIPgHmXTwMB7laN0DxO1TOKJDapyg13et2lM6UEVXLzgIKLzHnZItAiUoM/BO94+LrxRuFBdQb2czuYhQIL9ZrzV6zk3pHbFpI9DYl0SOLeL1LCISCtE6As8Tzb/U9CA5FT0fMNgqEz5Pz9bzpVHmN+r6aRJYJEM8RPBlAuJuGd4R4OZ8OE5O/bvuV7OIhdZfyCTgU3eu3Db+HDAfx2VGZTtQMBghGcWLOoUSAL2fyC9rjJQWsQRDxTCmteDuHRK+TYQGD54DFGnaj20mk3XiQk6U06rGqn4Qr2SS0Ie4TAfgJL7Z4r7ydOQQnpTPVYxKBsA6w0r0UTHMmkyQeqfqZDhcTjQbh0/V0cwfaU1SLEwNGPFJeIx8pE8eOldUhbcrjkYuxLqm4rRd3pCvtnuJ9COshQGAPvteDIavwSWswCL46IhAdqhRL24vqaH8JkT8+09gRm6ENf5ZrQXyfE20Pp7Ae13EA7HGkXgQ+X4yeI2F0P2Oi7QhOlnN6wIFEgN8Jv2nY2xl96XrvfXS23UO61OkmnuOAJv+uSbTSFOHnCMa6If8S/A86gA+REjaeBgAAAABJRU5ErkJggg=="
                  alt=""
                />
                <span>{t("tradeNFT.myFavorites")}</span>
                <div className="btn-toggle">
                  <label className="form-switch">
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      checked={toggleChecked}
                    />
                    <i></i>
                  </label>
                </div>
              </div>
            </div>
            {!toggleChecked && (
              <div className="tradeNFT__bot-body grid xl:grid-cols-4 md:grid-cols-3  grid-cols-2">
                <div className="tradeNFT__bot-card">
                  <div className="card__header flex">
                    <div className="card__header-left flex">
                      <span>{t("tradeNFT.retail")}</span>
                    </div>
                    <div className="card__header-right ">
                      {starChecked ? (
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAFm0lEQVR4Ab2YY5ybTRTF961t27Zt27Zt27Zt27a7tm1W2U0ezn1zZlU3+LUfTjjP3P+ci8Ci7bROZmnnBUrzyJ/SmbuP6ReWoxSq96wWzLXtBdWj+T3Fd9Roc4BMu8iC/iOfab3IpXI4uRRWyLWITK5lBdVn8Eo49M9AZL911VTnGn6qezWJeTaOg1SPujpyqxqrBMzo909AfL9Qep4O97qq6tlCKwXNESHFq4MOr5FHa1v18818fx1EdZ/WXXWpEwsIXcRlOS42msSPG0iMmMmSYHxGzUD6/hoId8O57W0EE0O2SbFaHYlR60iK7E9y1EgSgoYozK25BFeIrHP9NRB0CTk3jFG8BgtwQvh4WA/REyBJEj17SIAxtlZ+/+YwStmqN6VFJzyPEjKRS7cD5FRHFcLOSFqNA4f4XoJvF4U5t2Tk0fsCrjU0RT9Yj45gbmOGkGu/pQiMwkQ6yLndE9WuVqTi1lPQxjxgSIUc0Umvrt8qvD2Jrm0kOEeuPY+QW9/1iuvAediTOxpxphji/BRkmQ2l5EVo2/IegjGHOhJOzhwbMpxOdeuuQoAQAzeKSIka3gJBfyq4ojq30+FaCPvwPW0bxpFDI39m1eKO4jh08tfdxYcTd+Btlc9kXV5R7RsJ2ETynSmhIIXwXaoQsYWhKOMLc64eoh1Afik5bBCJYWtUMXyjyu+DV8jYDwfB/vS8rEB3CmvpdZNXyAAHwVgGIXtbSlEdW2ohBJeiF5ES0Ts+aGhjLhbaAEp4/nslg7Xj+yCVaHFezE+rfGZPK32hm7lFsux0HDXIP7ToffuzAIF16AhcxEKq61UrQXXMUK1vRIHlSHxeUgsY7sqL5ndgRtKQAqFi2UAHR/jJg6sSC6pmvrAPDhVUlcinBJF7Noq9nV2nPkwAsRkyF+WR1C30pvsBelZFhisYWCBnQeXNFvln5+IQ3nlIepmaaa6V0tC9UgI9bv4aBftN++IFetrmLmDgjOxRklFgIaLAEmaopB4gI5F7Ku6E/C41fbpSUKfeqiDSg/ru5L2p9k/nCHqcwzysmgwTkJsAZIrgAADINSPJr1N9AyG7rGj628nKnXnW+QzdqSLKT2toJcciCqwFkMHCeueMRJYWRM8tSLyekn26VJhDIB1wwqAR/5Fcs9LLgevpSuVPyvWKGtmxSjyMf+bfC2nwTEdkpwd4HS/hbGpVc6KwFvvggHDdqM+az/Q5J91tZknXq2gxVcnFgrjcUiLnycJzKPF9R73ecQjuhnQ9ncIulhHUx10v4PPK6A892EdXq4WrD1rFMa8mCGC4ElICqXdSMPlycYHut7mH7jQahD0fP4Gf5GUXLW89h4QgDgbIPgHmXTwMB7laN0DxO1TOKJDapyg13et2lM6UEVXLzgIKLzHnZItAiUoM/BO94+LrxRuFBdQb2czuYhQIL9ZrzV6zk3pHbFpI9DYl0SOLeL1LCISCtE6As8Tzb/U9CA5FT0fMNgqEz5Pz9bzpVHmN+r6aRJYJEM8RPBlAuJuGd4R4OZ8OE5O/bvuV7OIhdZfyCTgU3eu3Db+HDAfx2VGZTtQMBghGcWLOoUSAL2fyC9rjJQWsQRDxTCmteDuHRK+TYQGD54DFGnaj20mk3XiQk6U06rGqn4Qr2SS0Ie4TAfgJL7Z4r7ydOQQnpTPVYxKBsA6w0r0UTHMmkyQeqfqZDhcTjQbh0/V0cwfaU1SLEwNGPFJeIx8pE8eOldUhbcrjkYuxLqm4rRd3pCvtnuJ9COshQGAPvteDIavwSWswCL46IhAdqhRL24vqaH8JkT8+09gRm6ENf5ZrQXyfE20Pp7Ae13EA7HGkXgQ+X4yeI2F0P2Oi7QhOlnN6wIFEgN8Jv2nY2xl96XrvfXS23UO61OkmnuOAJv+uSbTSFOHnCMa6If8S/A86gA+REjaeBgAAAABJRU5ErkJggg=="
                          alt=""
                          onClick={() => setStarChecked(!starChecked)}
                        />
                      ) : (
                        <img
                          src="https://app.dodoex.io/static/media/star-not.0ff517ed.svg"
                          alt=""
                          onClick={() => setStarChecked(!starChecked)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="card__img ">
                    <img
                      src="https://cmp.dodoex.io/J1Yo-mPUHhtiAk8UAIsMz85NcZ86k321-o5ssjx3I2A/rs:fit:260:260:0/g:no/aHR0cHM6Ly9pcGZzLmRvZG9leC5pby9pcGZzL1FtZHZ4UXlvdTFMbzRFbmJQdHM1TFloa0ZZb2V4NHdTcFZ4MmN6Z3hFajVKM3Y.webp"
                      alt=""
                      className="card__img-body"
                    />
                    <div className="card__img-price flex">
                      <p className="card__img-price-left">1NFT</p>
                      <div className="card__img-price-right">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAC9FBMVEVHcEzn5+v+/fr8+Ob4+f7m6e/l5+z8/f////zx7/rk7f399OT9+e/9+/j5/fPW0fbt/vzRzfm4uP7p5fL8/vj7+PTk+v788+PJ9/7r4fv8+OX1+/fL4v/i1OrM8v/99Or///b/++Xc6/788+f27/Pl//rV/f3i0Pr//uz89fD9+er//un//cD//sz//tP/+u368fT//KD//rn/+pn//cb//uT//t///tnl3rn//Kb5zq/p17b26ff//qz//bLP99i5Yfni5L3f6sLl+PD8+eHa7sfCdPv/85j+16q/avu9+P7+9bGzWvb/6aL/4KTJ+d/T88/dtPn/9KP19fLv1/b/7Jv8+tr79b349cf067/y4PnXpfnt9Pb+7Kys+/742LP84q3Smfrtz7PC7f+i9v/Gffrm0Pvy4Oyf7P/38uj67bf44rb46+7x+OvJhPvnxfbI+fzy07Ta+fLq+OTq0uzCm//y6+LNjvzw3rnT2/+06f+q1f/r9djKj/Hfw/yuxf/G4v+8fu3ez+DRtP7t4r/Hrv/By//m3OO9jOfjxOzdsu/Qwv+0e/7Z9uC+v//Dm+XJrd/QqenavOW6sv/Rn+3r5eL33snSwN6X+P+J/P6N7f+E3f9/9v+h//ax//KDcf7j+dZesv91hf9g1//k8cvd/Nxr7/+//uv///9v+f+Q/f2r//mDyv9RwP+OYvyua/2rWfphx/9m9//B/vB76/+V1f9Z6v9zw/9utf9y0v+Lh//r9s5xpP/u78d3/P9d8v+fXfyAr/9zlf+dl/+hgf9R2f+Otv+a3/+fuP+acv7W/eBY4v/Q++KX//zO/eidyP+A/f5u4f9Osf9Yof+e/v2VqP9ak//p6cD++/OPxP+5//NSzv9ehP/m9Pql/vyJmv/D/PnY9dZucv7V6v+znv/h5P6rr/+r4v/4+Oi+2P/k2v3b8s63cPCx//ew8//Vzf7H/u20/P30+N3Q+vbs5/zc9PyvjP/399LQ9P28if/f+OXF/OY/1V9xAAAAKHRSTlMAC/o4/RAk/v7+/o3f85J6/ZA8tt/n4nqD4Uu/ufe5v7e93rbcs7m5iQbPfAAACiRJREFUeF6c0uVzE2sUx/EWNtkUKJWBEKADM2WAf3kl7u7unrq74O4u977hnPNsZFLvry87+cx39+zACVPrHmhHOZ53u3me29fe0akHzj+VTsu5+8a7uUmd6lycTus+arx25Mxx9/kjOdY5MXgW7naX40e/fxX0nlLJGZc+/dnv+cfEqZ/8Kt/BnogejycaLcGSydnZRqNhe/2zTXJjp+IuDivc6BOvuLRURDBKYLIB290NBFr7Cnlp/BR5bc5omCcQRQIpkcCVlfRzJvInRQ5eU7gdo6EXZCJ4CriyalHIyWOPo75AHL/gMhLoJVBJxMIuuLpR4UgcUh/z+jQs738Xgn2JBNp6wI29tyRyR77IW+y6/80R6DPMA9gWnVFn0gmgzbYbCQQsDNxbx1/w/PhxfRrHTBs0dEAUS04oRC8SsFgsDNyz0mMfLqoVzzE3t+CK7Rh9lIggik7c8jIURiIRAPMIwp4NIcipD7kv3WPL7IDCDkhnYYnoJRUwDYX5jSpwsJd0mYO3vkJ9ZgZ+ie2AaFgDEB5aXyzqPVQIy2QiqXQ6nc9Xq1arFUVqvHno96zJEbhAoK8DooiJ5PWAVfBgJnqPY30HceNyCM4o4EffozUQRRL1cX0cRmIqlVIKYSaTKWjiDx5mGL1vBDp6QUoET1+Me+KQKGcIrFQIzIIHYPAF1vzo9S6j9ybXXwjPTKIIIhXKy7Kc8ftTFdjjx9lsFjgAg5/7HlqlwYMUumCMgY86IJIIkuevNNFj4HQQxwHAqTrgXQz8DSA7slIIIoIkAijpJRlEvwxis7K+TuD0NILl4F8UHra9QQzcKhRydrPZPINfTRtEkUhJBC8uybCEf3u72QSwVqvXp2Fl3Du8y6AC3kO+UCjYQXT0gdgoiIIoSrSWnEhsM7BWq2VJJDDUm0iBmwDazU8ZGGMg3XlN8HoFQSBRBhDFqSkC67BQKFQOwzCRY94NCtzctNvt781PCXR1QSCB80oC/LWkViuRWFxcnJp6heCvegjBUDhcDn9AZYTA6xj4j4y6eU0rjeI4XoamdeyEMquh6y6G+Q8ECxpDCglCFGY1gpDUBAvFvIDxLb7hC5LkJqSGMMxi6GIgA12MMMxf0EJLCekmRRASlGjk3mtMrFHUbPo757k32ukX3H441/M8TxEgTVj5YDm8uRmCTEJEXi88Hfx0/qba7b7d2iKPuwbDF3CMzzSDqlqpWA5HQayFRQ88iF6IETHhefVNt9sFiKz2gr3gorWM6Yc6WCzaiho4C/AAjwNAEk89x8ee3z0eLwXvv8jHOLzzapXBrel/rFa73V4o8OHWnplfTEWIU6rqsFgsOsgjsnjq4bx1b70eiUTi8bgA+30Cp60I5G/aN9M7uGYqTthsNOEIKEQ3k27ymvB0MA+w2u/3nz6dhsigS+z5HjxD2jQBcGpKdTgECJHWcuF+7dZqonoYIoP5fL5a9QPcGoq853t8aAwmDXQwOEsTHvxJa2m9FmTzFpQjcjy+TaAf4MLCyIh3+eA85r+QRIBTDOojXpQuWpS71WyBCzfDSJYj2ew2xIwfom9UfEKXhXfy3AzvW7DUKrUEyaLw6rKcjQMkzx/w+QhEBC7yVsbxxWtmfUTH/0SgrZnWDPcMhRMyQEyYyWcy/oDfNxyxYXcC/J6XvG82fwv+iwtdLs2UydK9RCIhJ7LZ7OZ2JgXQHwjoYgNglNdswPlOa6AQAUK8AVgulcszZfzI+1rcBDg3N6eJIBuNBoH3+akxA4Ro09fCM16RyC1TvWc99kLochNgKuUaiskGxCSDf6N5sz7iKEjdcss9dIZCiVD2UogZTVyA2KDIEqAuirON+4yOjtpXbWq51+4xR6CYkERnyuUSYtS3kEwmdZA/eQiSiBdCAsgip4tUTYCxWMrp1MRoNMpi7vY/3KcRTdpe6MmpSIcSi1yn3aHOOuDOajVFUQiMORGTAJPUDoPfQQXIM06QaFNVVapIaLDKdVY7nLFjNNaQElKUxcUYEuIeidFcLrnLx2Yc7JoA8UQUbTbxzrIn6SLME3AAQSrwkAA3AO7twUMv+WDj6hlezKMVszmYnkjj5Ubr0quBNECTq5PohDNS17VrRZBLCOLGBpE7O7mcAuqReBzIW1kJBtPwbOSp668G7A0mQZ6cCNJ4jVj8VdHAJYC7uwL80ondtCZ2hnEcbpxGz8FMSpmEQIfSGToL399N8MzRzQgKB10cR6MSUbqoJKMMwRC6mJUMSLqJDST5Al34HUo/R910f9YiCF31f9/P40lOxZH0d/YX98NZPC8qqBe853k07ZzAtyR+/utPItFgMHg3eMednPx9ouKbq/N5c95sNt8jJiES+dv19bWH9z33BJ1r+M7f/sIzYsuHB3Lw6R8y++A4iCpAeACbAN9//Hh1dcXgeHw9JskttwDtJ4DtNsTG5wZEnHPkjP1BnxIi0lV9rvOM1MUFyBs0Ho+/l1v9G4B+TcOM7XMasdFoLMHZjED2+hWkqhVVh6g3dYgCvMCMAlQBvZHbqEdDmLD9AZFYx7f4tAA5s2YkVkiMVWKxmBrTRd1mtyvI4c3N/f1YbKNyo78j0QYRvPpisQBIpGVZldOlqNOHes0uAji8GA7v70fkbNtHEQaLQjyD16jXAdok5T/1+yGKej291+t1qRE8gNiiPPsPh6W2VtTgdTrwPpydHTeO60uyVpvl8yQG/JYf2SQCeTsajYZIHJY4Rf6WYrEIsQOPRSLJE2I+YAXYezCl2GWxAsTz+MDZJq9DtVosolA9VQ/zjLU8kZT/IYinvcvL21sa0gPjxeMjcRQggkeiAZFKpcLhcCRSY1KaUX/UNk9ZBMgDbjkO7Xfgyp0yRGS0DMPAiDQkxAWR5DEIkckAPETiJQkvndeKaZHEcqncYpFKGBAFSVPmDyUJkYIYkKJHHA6dF588OFQqlVpmyxRiIhEKhWjdBB5hxnQ6CFBGuEVgZYK8/72aKXcslpBJGVnDyBmPyMhR7TCfzgeDwSUYxZ+H2Cfv+erlUemQxyBIw8xmc7lcInGcIJCHPDqEmA4EfUiQAK3BhHrGkHPRUwFWzSoGjJsZM2MApXXLGY8gHmLVQZBUwEeiQt7uygVcitVSlUWUyWR4SBskkUEUZc/ySW9vzRNBtFzlCoVCMh4345KEGFodkQuw59pa9wg0LbFnFsxk0owzmJUzOkeUojWhFPcXnllILFBJzChIgLYoQFsU3rM1D0FCPBZgEi3BnPO/2GueCu+7tU9VWDWqCbCwIjrBoE+R8218TFMMe0S0DvRNOJf7i899OxMuYMKjBJhdBTEet7fpLdY7EQVNG8ysguBEu094Mp2mWGQw6wBt7jn93s15FUkqvnDGnjAhQdKc421u+zVIG01HUiF4qXCEV2r38ikP7ls/Mrk+5RW4p3Wwv57bPwDw9La9O65VTNnbxXD/O/fB6x2XoigkKa69V173BuBf76xZ+sBHraMAAAAASUVORK5CYII="
                          alt=""
                          className="card__img-number"
                        />
                        <span>x8</span>
                      </div>
                    </div>
                  </div>
                  <div className="card__body">
                    <p className="card__body-title flex">
                      PENG1101
                      <img
                        src="	https://app.dodoex.io/static/media/i.1fc90fb5.svg"
                        alt=""
                      />
                    </p>
                    <div className="card__body-market flex">
                      <span>{t("tradeNFT.marketCap")}</span>
                      <p>$0.65</p>
                    </div>
                    <div className="card__body-price flex">
                      <span>{t("tradeNFT.price")}</span>
                      <p>$0.0065</p>
                    </div>
                    <div className="card__body-vat flex">
                      <span>0.00%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </TradeBody>
  );
}
