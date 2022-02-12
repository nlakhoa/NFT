import React, { useState, useEffect } from "react";
import { BiCheck } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function CreateNFT() {
  const [statusCheck, setStatusCheck] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [nameNft, setNameNft] = useState("");
  const [quantity, setQuantity] = useState();
  const [preview, setPreview] = useState();
  const { t } = useTranslation();
  const handleInput = (e) => {
    let value = e.target.value;
    setNameNft(value);
  };
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const CreateBody = styled.div`
    .createNFT {
      min-height: calc(100vh - 80px);
      background-color: ${(props) => props.theme.bgHeader};

      .createNFT-top {
        padding: 40px 0;
        background-color: ${(props) => props.theme.bgBodyTop};

        .createNFT__top {
          width: calc(100vw - 312px);
          max-width: 1160px;
          margin: 0 auto;
          color: ${(props) => props.theme.textBody};

          .createNFT__back {
            font-size: 18px;
            color: #6c6c6d;
            margin: 12px 0;
            cursor: pointer;
          }

          .createNFT__top-title {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .createNFT__top-header {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 12px;
          }

          .createNFT__buy {
            gap: 18px;
            margin-bottom: 24px;

            .createNFT__create-item {
              .bg__buy-item {
                padding: 30px;
                background: ${(props) => props.theme.bgHeader};
                ${(props) => props.theme.textBody};
                border-radius: 18px;
                justify-content: space-between;
                position: relative;
                overflow: hidden;
                background-color: ${(props) => props.theme.bgHeader};
                cursor: pointer;
                box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;

                .icon-check {
                  display: none;
                }

                .btn-create {
                  margin: auto 0;
                  padding: 12px 32px;
                  background: white;
                  color: black;
                  font-weight: bold;
                  border-radius: 11px;
                  font-size: 18px;
                  font-size: 14px;
                  cursor: pointer;
                }

                img {
                  height: 40px;
                  margin: auto 0;
                }

                .createNFT__buy-item-body {
                  margin-left: 12px;
                  color: ${(props) => props.theme.textBody};
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

            .active {
              border: 1px solid yellow;

              .bg__icon-check {
                position: absolute;
                top: 0px;
                right: 0px;
                width: 30px;
                height: 30px;
                overflow: hidden;

                span {
                  position: absolute;
                }

                .icon-check {
                  display: block;
                  position: absolute;
                  top: -2px;
                  right: -1px;
                  z-index: 1;
                  color: black;
                  height: 20px;
                }

                span::before {
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  content: "";
                  display: block;
                  width: 0px;
                  height: 0px;
                  border-style: solid;
                  border-width: 0px 30px 30px 0px;
                  border-color: transparent rgb(255, 232, 4) transparent
                    transparent;
                }
              }
            }

            .createNFT__populate-left {
              .createNFT__populate-left-header {
                font-size: 12px;
                color: #85858d;
                margin-bottom: 12px;
              }

              .image-upload {
                display: flex;
                flex-direction: column;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: center;
                justify-content: center;
                height: 340px;
                background-color: rgba(42, 42, 45, 0.5);
                border: 1px dashed rgb(96, 96, 102);
                border-radius: 12px;
                color: rgb(255, 255, 255);
                font-size: 12px;
                box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
                .image-upload__body {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }

                img {
                  width: 40px;
                  margin-bottom: 12px;
                }

                input {
                  display: none;
                }

                .btn__input {
                  font-size: 16px;
                  margin: auto;
                  background: #373739;
                  margin-top: 24px;
                  border-radius: 8px;
                  padding: 8px 12px;
                  cursor: pointer;
                }
              }
            }

            .createNFT__populate-right {
              grid-column: span 2;
              font-size: 12px;
              color: ${(props) => props.theme.textBody};

              .createNFT__populate-right-item {
                margin-bottom: 12px;

                .populate-right-header {
                  margin-bottom: 12px;
                }

                input {
                  width: 100%;
                  background: ${(props) => props.theme.bgMenuSecond};
                  border-radius: 8px;
                  height: 48px;
                  font-size: 14px;
                  border: none;
                }

                input:focus {
                  outline: none !important;
                  box-shadow: none !important;
                }
              }

              .default {
                input {
                  ${(props) => props.theme.textBody};
                }
              }
            }
          }

          .confirm {
            display: flex;
            justify-content: center;

            .btn-confirm {
              width: 280px;
              padding: 12px;
              text-align: center;
              border-radius: 15px;
              font-size: 18px;

              background: rgb(55, 55, 57);
              color: rgb(26, 26, 27);
              /* cursor: not-allowed; */
            }

            .active {
              width: 280px;
              padding: 12px;
              background: yellow;
              color: black;
              font-size: 18px;
              text-align: center;
              font-weight: bold;
              border-radius: 15px;
              cursor: pointer;
            }
          }
        }
      }

      .createNFT-bot {
        padding: 40px 0;

        .createNFT__bot {
          max-width: 1024px;
          margin: 0 auto;
          ${(props) => props.theme.textBody};

          .createNFT__bot-list {
            margin: 24px 0;
            justify-content: space-between;

            .group-search {
              position: relative;
              margin-left: 15px;
              padding-left: 15px;

              .search {
                border-radius: 25px;
                font-size: 14px;
                border: 1px solid #ccc;
                width: 282px;
                height: 36px;
                background-color: transparent;
              }

              .search:focus {
                outline: none !important;
                box-shadow: none !important;
              }

              .search-icon {
                position: absolute;
                top: 8px;
                right: 16px;
                font-size: 16px;
              }
            }
          }

          .fragment-name {
            font-size: 14px;
            color: #606066;
            padding: 40px 0;
            justify-content: space-between;
          }

          .match {
            width: 100%;
            margin: 60px 0;

            img {
              height: 20px;
              margin: 0 auto;
            }

            p {
              text-align: center;
            }
          }
        }
      }
    }

    @media screen and (max-width: 1023px) {
      .createNFT {
        .createNFT-top {
          .createNFT__top {
            padding: 12px;
            min-width: calc(100vw - 200px);
          }
        }
      }
    }
    @media screen and (max-width: 767px) {
      .createNFT {
        .createNFT-top {
          .createNFT__top {
            padding: 12px;
            width: 100%;
          }
        }
      }
    }
  `;
  return (
    <CreateBody>
      <div className="createNFT">
        <div className="createNFT-top ">
          <div className="createNFT__top">
            <p className="createNFT__back flex" onClick={goBack}>
              <IoMdArrowRoundBack
                style={{ height: "24px", margin: "auto 12px" }}
              />
              {t("createNFT.goBack")}
            </p>
            <h1 className="createNFT__top-title">{t("createNFT.createNFT")}</h1>
            <p className="createNFT__top-header">{t("createNFT.select")}</p>
            <div className="createNFT__buy grid grid-cols-1 xl:grid-cols-3">
              <div
                className="createNFT__create-item"
                onClick={() => setStatusCheck("Single")}
              >
                <div
                  className={
                    statusCheck === "Single"
                      ? "bg__buy-item active flex"
                      : "bg__buy-item  flex"
                  }
                >
                  <div className="flex">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="bg__icon-check">
                      <span></span>
                      <BiCheck className="icon-check" />
                    </div>
                    <div className="createNFT__buy-item-body">
                      <p>{t("createNFT.single")}</p>
                      <span>{t("createNFT.singleBody")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="createNFT__create-item"
                onClick={() => setStatusCheck("Multiple")}
              >
                <div
                  className={
                    statusCheck === "Multiple"
                      ? "bg__buy-item active flex"
                      : "bg__buy-item  flex"
                  }
                >
                  <div className="flex">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="bg__icon-check">
                      <span></span>
                      <BiCheck className="icon-check" />
                    </div>
                    <div className="createNFT__buy-item-body">
                      <p>{t("createNFT.multiple")}</p>
                      <span>{t("createNFT.multipleBody")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="createNFT__top-header">{t("createNFT.populate")}</p>
            <div className="createNFT__buy grid grid-cols-1 xl:grid-cols-3">
              <div className="createNFT__populate-left">
                <p className="createNFT__populate-left-header">
                  1. {t("createNFT.selectFile")}
                </p>
                <div className="image-upload">
                  {selectedFile ? (
                    <img
                      src={preview}
                      style={{ width: "100%", cursor: "pointer" }}
                      onClick={() => setSelectedFile()}
                      alt=""
                    />
                  ) : (
                    <div className="image-upload__body">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"
                        alt=""
                      />
                      <p>{t("createNFT.supportFile")}</p>
                      <label htmlFor="file-input">
                        <p className="btn__input">
                          {t("createNFT.selectFile")}
                        </p>
                      </label>
                      <input
                        id="file-input"
                        type="file"
                        onChange={onSelectFile}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="createNFT__populate-right">
                <from>
                  <div className="createNFT__populate-right-item">
                    <p className="populate-right-header">
                      2. {t("createNFT.NFTName")}
                    </p>
                    <input
                      type="text"
                      placeholder={t("createNFT.NFTNameInput")}
                      name="nameNft"
                      value={nameNft}
                      onChange={(e) => handleInput(e)}
                    />
                  </div>
                  <div className="createNFT__populate-right-item default">
                    <p className="populate-right-header">
                      3. {t("createNFT.vaultName")}
                    </p>
                    <input
                      type="text"
                      placeholder="Please enter the name"
                      value="DODONFT"
                      disabled
                    />
                  </div>
                  {statusCheck === "Multiple" ? (
                    <div className="createNFT__populate-right-item ">
                      <p className="populate-right-header">
                        4. {t("createNFT.quantity")}
                      </p>
                      <input
                        type="text"
                        placeholder={t("createNFT.quantityInput")}
                        name="quantity"
                        value={quantity}
                        onChange={(e) => {
                          let value = +e.target.value;
                          if (typeof value !== "string") {
                            setQuantity(value);
                          } else {
                            setQuantity("NaN");
                          }
                        }}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </from>{" "}
              </div>
            </div>
            <div className="confirm ">
              <p
                className={
                  statusCheck === "Multiple" && nameNft && selectedFile
                    ? "btn-confirm active"
                    : "btn-confirm"
                }
              >
                {t("createNFT.submit")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </CreateBody>
  );
}
