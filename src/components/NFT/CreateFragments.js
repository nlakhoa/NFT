import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeStatusModal } from "../../store/actions/homeAction";

export default function CreateFragment() {
  const dispatch = useDispatch();
  const changeStatusModals = () => {
    dispatch(changeStatusModal());
  };
  const CreateFragment = styled.div`
    .fragment {
      min-height: calc(100vh - 80px);
      background-color: ${(props) => props.theme.bgHeader};

      .fragment-top {
        padding: 40px 0;
        background-color: ${(props) => props.theme.bgHeaderItem};

        .fragment__top {
          width: calc(100vw - 312px);
          max-width: 1160px;
          margin: 0 auto;
          color: ${(props) => props.theme.textBody};

          .fragment__top-title {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .fragment__top-description {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 40px;
          }

          .fragment__buy {
            gap: 56px;

            .fragment__buy-item {
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
                color: ${(props) => props.theme.textBody};
                border-radius: 18px;
                justify-content: space-between;
                min-height: 154px;
                .btn-create {
                  margin: auto 0;
                  padding: 12px 32px;
                  background: ${(props) => props.theme.bgBtn};
                  color: ${(props) => props.theme.textBtn};
                  border: 2px solid ${(props) => props.theme.borderBtn};
                  font-weight: bold;
                  border-radius: 11px;
                  font-size: 18px;
                  font-size: 14px;
                  cursor: pointer;
                }

                img {
                  width: 56px;
                  height: 56px;
                  margin: auto 0;
                }

                .fragment__buy-item-body {
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

      .fragment-bot {
        padding: 40px 0;
        .fragment__bot {
          width: calc(100vw - 312px);
          max-width: 1160px;
          margin: 0 auto;
          color: ${(props) => props.theme.textBody};

          .fragment__bot-list {
            margin: 24px 0;
            justify-content: space-between;
            span {
              font-weight: bold;
            }

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
            padding: 60px 0;
            box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
            img {
              height: 20px;
              margin: 0 auto;
            }

            p {
              text-align: center;
              font-size: 14px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 1023px) {
      .fragment {
        width: 100%;
        .fragment-top{
          .fragment__top{
            padding: 12px;
            min-width: calc(100vw - 180px);
          }

        }
        .fragment-bot {
          .fragment__bot {
            padding: 12px;
            min-width: calc(100vw - 200px);
          }
        }
      }
    }
    @media screen and (max-width: 767px) {
      .fragment {
        width: 100%;
        .fragment-top{

          .fragment__top {
            padding: 12px;
            width: 100%;
          }
        }
        .fragment-bot {
          padding: 12px;
          .fragment__bot {
            width: 100%;

            .fragment__bot-list {
              width: 100%;
              font-size: 12px;
              .group-search {
                .search {
                  width: 176px;
                }
              }
            }
          }
        }
      }
    }
  `;
  const { t } = useTranslation();

  return (
    <CreateFragment>
      <div className="fragment">
        <div className="fragment-top ">
          <div className="fragment__top">
            <h1 className="fragment__top-title">
              {t("createFragments.title")}
            </h1>
            <p className="fragment__top-description">
              {t("createFragments.description")}
            </p>
            <div className="fragment__buy grid grid-cols-1 xl:grid-cols-2">
              <div className="fragment__buy-item  ">
                <div className="bg__buy-item flex">
                  <div className="flex">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="fragment__buy-item-body">
                      <p>{t("createFragments.buyoutMode")}</p>
                      <span> {t("createFragments.buyoutModeBody")}</span>
                    </div>
                  </div>
                  <span
                    className="btn-create"
                    onClick={() => changeStatusModals()}
                  >
                    {t("createFragments.create")}
                  </span>
                </div>
              </div>
              <div className="fragment__buy-item  ">
                <div className="bg__buy-item flex">
                  <div className="flex">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="fragment__buy-item-body">
                      <p> {t("createFragments.retailMode")}</p>
                      <span>{t("createFragments.retailModeBody")}</span>
                    </div>
                  </div>
                  <span
                    className="btn-create"
                    onClick={() => changeStatusModals()}
                  >
                    {t("createFragments.create")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fragment-bot">
          <div className="fragment__bot">
            <div className="fragment__bot-list flex">
              <span> {t("createFragments.myFragmentList")}</span>
              <div className="group-search">
                <form>
                  <input
                    type="text"
                    className="pl-2 search"
                    placeholder={t("createFragments.search")}
                  />
                  <AiOutlineSearch
                    className=" search-icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      color: `${props=>props.theme.textBody}`,
                    }}
                  />
                </form>
              </div>
            </div>
            <div className="flex fragment-name">
              <span>Fragment Name</span>
              <span>Type</span>
              <span>Vault Name</span>
              <span>NFTs</span>
            </div>
            <div className="match">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt=""
              />
              <p>{t("createFragments.NoMatch")}</p>
            </div>
          </div>
        </div>
      </div>
    </CreateFragment>
  );
}
