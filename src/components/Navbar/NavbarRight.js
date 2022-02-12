import ChatIcon from "@mui/icons-material/Chat";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FeedIcon from "@mui/icons-material/Feed";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsIcon from "@mui/icons-material/Settings";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FormGroup from "@mui/material/FormGroup";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiCoinStack } from "react-icons/bi";
import ArticleIcon from "@mui/icons-material/Article";
import { GrDocumentTime } from "react-icons/gr";

import {
  changeStatusBackground,
  changeStatusModal,
  handleClickSetting,
} from "../../store/actions/homeAction";

function NavbarRight() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const account = useSelector((state) => {
    return state.wallet.account
  });
  //   gọi lên Reducer để bật tắt modal
  const statusBackground = useSelector((state) => state.home.statusBackground);
  const statusSetting = useSelector((state) => state.home.statusSetting);

  const handalSetting = () => {

    dispatch(handleClickSetting());
  };

  const changeStatusModals = () => {
    dispatch(changeStatusModal());
  };
  const handleBackground = () => {
    dispatch(changeStatusBackground());
  };
  const [selectOption, setSelectOption] = useState("");
  const [selectEndpoint, setSelectEndpoint] = useState("Global");
  const [selectLanguage, setSelectLanguage] = useState("en");
  const [selectNetwork, setSelectNetwork] = useState("ETH");
  const handleSelectOption = (action) => {
    if (action === selectOption) {
      setSelectOption("");
    } else {
      setSelectOption(action);
    }
  };

  const handleSelectEndpoint = (action) => {
    if (action === selectEndpoint) {
      setSelectEndpoint("");
    } else {
      setSelectEndpoint(action);
    }
  };
  const handleSelectLanguage = (action) => {
    handleClick(action);
    if (action === selectLanguage) {
      setSelectLanguage("");
    } else {
      setSelectLanguage(action);
    }
  };
  const handleSelectNetwork = (action) => {
    if (action === selectNetwork) {
      setSelectNetwork("");
    } else {
      setSelectNetwork(action);
    }
  };
  const NavRight = styled.div`
    .navbar__right {
      .mybag {
        height: 48px;
        background: white;
        line-height: 2;
        margin: auto 13px;
        font-weight: 600;
        color: #85c559;
        border-radius: 25px;
        position: relative;
        border: 1px solid #ccc;
        color: ${(props) => props.theme.textBtn};
        border: 2px solid ${(props) => props.theme.borderBtn};
        background: ${(props) => props.theme.bgBodyTop};
        p,
        a {
          display: flex;
          margin: auto;
          font-size: 14px;
          font-weight: 600;
          color: ${(props) => props.theme.borderBtn};
          padding: 6px 18px;
          line-height: 32px;
          height: 100%;
          cursor: pointer;
          .bag-icon {
            font-size: 28px;
            margin: auto;
            color: ${(props) => props.theme.borderBtn};
          }
        }
        p:nth-child(1) {
          color: black;
          background: ${(props) => props.theme.borderBtn};
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
          a {
            font-size: 28px;
            margin: auto 6px auto 0;
            color: ${(props) => props.theme.borderBtn};
            display: none;
          }
        }
      }
      .btn-quest {
        color: ${(props) => props.theme.textBtn};
        border: 2px solid ${(props) => props.theme.borderBtn};
        background: ${(props) => props.theme.bgBtn};
        padding: 3px 24px;
        cursor: pointer;
        border-radius: 25px;
        height: 36px;
        line-height: 28px;
        margin: auto 12px;
        font-weight: 600;
        position: relative;
      }
      .btn-quest:hover {
        opacity: 0.9;
      }
      .Menu__second-body {
        position: absolute;
        left: -286px;
        top: 36px;
        background: ${(props) => props.theme.bgMenuSecond};
        z-index: 100;
        width: 320px;
        color: ${(props) => props.theme.textHeader};
        font-size: 16px;
        border-radius: 12px;
        display: none;
        .Menu__second-main {
          overflow-y: scroll;
          min-height: 335px;
          max-height: 500px;
          ::-webkit-scrollbar {
            width: 4px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: ${(props) => props.theme.textHeader};
            border-radius: 10px;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: ${(props) => props.theme.textHeader};
          }
          .Menu__second-body-header {
            position: relative;
            display: flex;
            justify-content: space-between;
            padding: 16px 20px 16px 20px;
            cursor: pointer;
          }
          .second-body-header__right {
            font-weight: bold;
            color: white;
          }

          .endpointBtn__items {
            margin-bottom: 12px;
            flex-wrap: wrap;
            padding: 0 20px;

            .endpointBtn__item {
              padding: 6px 16px;
              border-radius: 12px;
              margin: 12px 12px 0 0;
              text-align: center;
              font-weight: 600;
              cursor: pointer;
              display: none;
              color: white;
              border: 3px solid ${(props) => props.theme.borderBtn};
              span {
                font-size: 14px;
                color: ${(props) => props.theme.textBtn};
              }
            }
            .active {
              background-color: ${(props) => props.theme.borderBtn};
              span {
                font-size: 14px;
                color: ${(props) => props.theme.bgHeader};
              }
            }
          }
          .endpointBtn__items-active {
            .endpointBtn__item {
              display: block;
            }
          }

          .Menu__second-contact {
            height: 184px;
            border-top: 1px solid #ccc;
            list-style: none;
            /* padding: 0 12px 12px 12px !important; */

            .Menu__second-contact-item {
              padding: 9px 12px;
              cursor: pointer;
            }
            .Menu__second-contact-item:hover {
              background-color: ${(props) => props.theme.bgHeaderHover};
              color: ${(props) => props.theme.textBody};
            }
          }
        }
      }
      .Menu__second-body::before {
        position: absolute;
        top: -7px;
        right: 12px;
        content: "";
        display: block;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0px 18px 18px 0px;
        border-color: transparent transparent
          ${(props) => props.theme.bgMenuSecond} transparent;
        transform: rotate(135deg);
      }
      .Menu__second-body-active {
        display: block;
      }
      .icon-setting,
      .icon-theme {
        color: ${(props) => props.theme.textHeader};
      }
      .icon-setting:hover,
      .icon-theme:hover {
        opacity: 0.8;
      }
    }
    @media screen and (max-width: 1023px) {
      .navbar__right {
        .mybag {
          a {
            padding: 3px 18px;
            .bag-icon {
              display: block !important;
            }
          }
          p:nth-child(1) {
            a {
              display: block;
            }
            span {
              display: none;
            }
          }
          a,p {
            span {
              display: none;
            }
          }
        }
      }
    }
    @media screen and (max-width: 739px) {
      .mybag {
        a {
          .bag-icon {
            display: block !important;
          }
        }
      }
      .btn-quest {
        display: none;
      }
       {
        margin: 20px 0;
        padding: 0;
      }
      .navbar
        .navbar__pc
        .navbar__left
        .navbar__header
        .navbar__header-right
        .navbar__right {
        span {
          display: block;
        }
      }
    }
  `;
  return (
    <NavRight>
      <div className="navbar__right ">
        <div className="mybag flex">
          <p>
            <Link to="/quests">
              <GrDocumentTime className="quest-icon" />
            </Link>
            <span>{t("header.MyBag")}</span>
          </p>
          <p>
            <BiCoinStack className="bag-icon" />
            <span>Token</span>
          </p>
          <Link to="/mynft">
            <ArticleIcon className="bag-icon" />
            <span>{t("header.MyNFT")}</span>
          </Link>
        </div>
        <Link to="/quests" className="btn-quest">
        <span>{t("header.Quest")}</span>
        </Link>
        <Link to="/profile" className="profile-link">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="avt-profile"
          />
        </Link>

        <div className="navbar__right-connect">
          <div className="dots"></div> <span className="text-eth">ETH</span>
          <span
            className="right-connect__body"
            onClick={() => changeStatusModals()}
          >
            {account
              ? `${account.slice(0, 4)}...${account.slice(
                  account.length - 4,
                  account.length
                )}`
              : t("header.connect")}
          </span>
        </div>
        <div
          className="Menu__second"
          style={{
            width: "24px",
            height: "24px",
            margin: "auto 0",
            position: "relative",
          }}
        >
          <SettingsIcon
            sx={{
              width: "24px",
              height: "24px",
              margin: "auto 0",
              cursor: "pointer",
            }}
            className="icon-setting"
            onClick={handalSetting}
          />
          <div
            className={
              !statusSetting
                ? "Menu__second-body Menu__second-body-active"
                : "Menu__second-body"
            }
          >
            <div className="Menu__second-main">
              <div className="Menu__second-body-header">
                <p className="second-body-header__left">
                  {t("header.miniMenu.Endpoint.Endpoint")}
                </p>
                <p
                  className="second-body-header__right active flex"
                  onClick={() => handleSelectOption("Endpoint")}
                >
                  {t("header.miniMenu.Endpoint.Global")} 393.0ms
                  {selectOption === "Endpoint" ? <FaSortUp /> : <FaSortDown />}
                </p>
              </div>
              <ul
                className={
                  selectOption === "Endpoint"
                    ? "endpointBtn__items endpointBtn__items-active flex"
                    : "endpointBtn__items flex"
                }
              >
                <li
                  className={
                    selectEndpoint === "Global"
                      ? "endpointBtn__item active"
                      : "endpointBtn__item "
                  }
                  onClick={() => handleSelectEndpoint("Global")}
                >
                  <span>{t("header.miniMenu.Endpoint.Global")} 393.0ms</span>
                </li>
                <li
                  className={
                    selectEndpoint === "Custom"
                      ? "endpointBtn__item active"
                      : "endpointBtn__item "
                  }
                  onClick={() => handleSelectEndpoint("Custom")}
                >
                  <span>{t("header.miniMenu.Endpoint.Custom")}</span>
                </li>
              </ul>
              <div className="Menu__second-body-header">
                <p className="second-body-header__left">
                  {t("header.miniMenu.Endpoint.Custom")}
                </p>
                <p
                  className="second-body-header__right flex"
                  onClick={() => handleSelectOption("Language")}
                >
                  {i18n.language === "en" ? "English" : "Tiếng Việt"}
                  {selectOption === "Language" ? <FaSortUp /> : <FaSortDown />}
                </p>
              </div>
              <ul
                className={
                  selectOption === "Language"
                    ? "endpointBtn__items endpointBtn__items-active flex"
                    : "endpointBtn__items flex"
                }
              >
                <li
                  className={
                    i18n.language === "en"
                      ? "endpointBtn__item active"
                      : "endpointBtn__item "
                  }
                  onClick={() => handleSelectLanguage("en")}
                >
                  <span>English</span>
                </li>
                <li
                  className={
                    i18n.language === "vi"
                      ? "endpointBtn__item active"
                      : "endpointBtn__item "
                  }
                  onClick={() => handleSelectLanguage("vi")}
                >
                  <span>Tiếng Việt</span>
                </li>
              </ul>

              <div className="Menu__second-body-header">
                <p className="second-body-header__left">
                  {t("header.miniMenu.Network")}
                </p>
                <p
                  className="second-body-header__right flex"
                  onClick={() => handleSelectOption("NetWork")}
                >
                  ETH{" "}
                  {selectOption === "NetWork" ? <FaSortUp /> : <FaSortDown />}
                </p>
              </div>
              <ul
                className={
                  selectOption === "NetWork"
                    ? "endpointBtn__items endpointBtn__items-active flex"
                    : "endpointBtn__items flex"
                }
              >
                <li
                  className={
                    selectNetwork === "ETH"
                      ? "endpointBtn__item active"
                      : "endpointBtn__item "
                  }
                  onClick={() => handleSelectNetwork("ETH")}
                >
                  <span>ETH</span>
                </li>
                <li
                  className={
                    selectNetwork === "BSC"
                      ? "endpointBtn__item active"
                      : "endpointBtn__item "
                  }
                  onClick={() => handleSelectNetwork("BSC")}
                >
                  <span>BSC</span>
                </li>
                <li
                  className={
                    selectNetwork === "Heco"
                      ? "endpointBtn__item active"
                      : "endpointBtn__item "
                  }
                  onClick={() => handleSelectNetwork("Heco")}
                >
                  <span>Heco</span>
                </li>
                <li
                  className={
                    selectNetwork === "Polygon"
                      ? "endpointBtn__item active"
                      : "endpointBtn__item "
                  }
                  onClick={() => handleSelectNetwork("Polygon")}
                >
                  <span>Polygon</span>
                </li>
                <li
                  className={
                    selectNetwork === "Arbitrum"
                      ? "endpointBtn__item active"
                      : "endpointBtn__item "
                  }
                  onClick={() => handleSelectNetwork("Arbitrum")}
                >
                  <span>Arbitrum</span>
                </li>
                <li
                  className={
                    selectNetwork === "OKChain"
                      ? "endpointBtn__item active"
                      : "endpointBtn__item "
                  }
                  onClick={() => handleSelectNetwork("OKChain")}
                >
                  <span>OKChain</span>
                </li>
                <li
                  className={
                    selectNetwork === "MoonRiver"
                      ? "endpointBtn__item active"
                      : "endpointBtn__item "
                  }
                  onClick={() => handleSelectNetwork("MoonRiver")}
                >
                  <span>MoonRiver</span>
                </li>
              </ul>
              <ul className="Menu__second-contact">
                <li className="Menu__second-contact-item">
                  <p>
                    <HelpOutlineIcon style={{ height: "18px" }} />{" "}
                    {t("header.miniMenu.Help")}
                  </p>
                </li>
                <li className="Menu__second-contact-item">
                  <p>
                    <VolumeUpIcon style={{ height: "18px" }} />
                    {t("header.miniMenu.Announcements")}
                  </p>
                </li>
                <li className="Menu__second-contact-item">
                  <p>
                    <ChatIcon style={{ height: "18px" }} />{" "}
                    {t("header.miniMenu.Forum")}
                  </p>
                </li>
                <li className="Menu__second-contact-item">
                  <p>
                    <FeedIcon style={{ height: "18px" }} />
                    {t("header.miniMenu.Docs")}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FormGroup style={{ margin: "auto 0 auto 3px" }}>
          {statusBackground === "dark" ? (
            <LightModeIcon
              style={{ height: "24px", cursor: "pointer" }}
              onClick={() => handleBackground()}
              className="icon-theme"
            />
          ) : (
            <DarkModeIcon
              style={{ height: "24px", cursor: "pointer" }}
              onClick={() => handleBackground()}
              className="icon-theme"
            />
          )}
        </FormGroup>
      </div>
    </NavRight>
  );
}

export default NavbarRight;
