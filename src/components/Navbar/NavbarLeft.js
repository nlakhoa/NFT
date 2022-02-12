import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaSortDown, FaSortUp, FaTools } from "react-icons/fa";
import { GiTowerBridge,GiSandsOfTime } from "react-icons/gi";
import { MdChangeCircle, MdGeneratingTokens } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { SiAirtable, SiSololearn } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { changeStatusMenu } from "../../store/actions/homeAction";
function NavbarLeft() {
  const [sidebar, setSidebar] = useState(false);
  const [show, setShow] = useState("");
  const dispatch = useDispatch();
  const handleStatusMenu = () => {
    dispatch(changeStatusMenu());
  };

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const statusMenu = useSelector((state) => state.home.statusMenu);
  console.log(statusMenu);
  // Lấy kích thước màn hình hiện tại
  // Show menu con trên mobile thì click vào còn trên pc thì hover
  const setStatusShow = (status) => {
    if (!statusMenu) {
      setShow(status);
      handleStatusMenu();
    }
    if (show === status) {
      setShow("");
    } else {
      setShow(status);
    }
  };
  // useEffect(() => {
  //   if (!statusMenu) {
  //     setShow("");
  //   }
  // }, [statusMenu]);
  console.log("rerender");
  const { t } = useTranslation();
  const NavbarLeft = styled.div`
    .navbar__left {
      position: fixed;
      left: 0px;
      top: 0;
      width: 238px;
      z-index: 10;
      height: calc(100vh - 68px);
      transition: navbar-show linear 0.4s;
      /* overflow: hidden; */
      .nav-menu {
        padding-top: 12px;
        background-color: ${(props) => props.theme.bgHeader};
        width: 238px;
        height: calc(100vh - 68px);
        overflow-y: scroll;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 68px;
        z-index: 1;
        position: absolute;
        transition: width linear 0.4s;
        ::-webkit-scrollbar {
          width: 6px;
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
      }
      .nav-menu.active {
        left: 0;
      }
      .nav-text {
        justify-content: start;
        align-items: center;
        list-style: none;
        font-size: 18px;
        color: ${(props) => props.theme.textHeader};
        cursor: pointer;
        .nav-link {
          padding: 8px 0 16px 0;
          display: flex;
          color: ${(props) => props.theme.textHeader};
          align-items: center;
          span {
            /* animation: slide-show linear 0.4s; */
          }
          .nav-link-left {
            span {
              margin: auto;
            }
          }
        }
        .nav-link:hover {
          background-color: ${(props) => props.theme.bgHeaderHover};
        }
        .earn,
        .tools,
        .nft,
        .grovernance,
        .gridge,
        .meta {
          display: none;
        }
        .nav-menu_items {
          align-items: center;
          width: 100%;
          list-style: none;
          font-size: 12px;
          color: white;
          overflow: hidden;
          .nav-link-left {
            span {
              animation: slide-show linear 2s;
              margin: auto;
            }
          }
          .nav-menu__item {
            padding: 16px;
            width: 100%;
            display: flex;
            animation: slide-show 0.4s;
           
            .icon-arrow {
              font-size: 16px;
              margin: auto;
              display: none;
            }
            .menu__item-box {
              display: flex;
              img {
                height: 30px;
                width: 30px;
                margin-right: 16px;
              }
              p {
                font-weight: 600;
                font-size: 14px;
                color: ${props=>props.theme.textBody}
              }
              span {
                color: #9999;
                font-size: 12px;
              }
            }
          }
          .nav-menu__item:hover {
            background-color: ${(props) => props.theme.bgHeaderHover};
            .icon-arrow {
              display: block;
            }
          }
        }
      }
      .profile__mobile {
        position: fixed;
        padding: 16px;
        width: 232px;
        display: flex;
        cursor: pointer;
        bottom: 0;
        display: none;
        height: 80px;
        img {
          width: 42px;
          margin-right: 18px;
        }
        span {
          font-weight: 500;
          margin: auto 0;
        }
        background-color: yellow;
      }
      .earn-show .earn,
      .tools-show .tools,
      .nft-show .nft,
      .grovernance-show .grovernance,
      .gridge-show .gridge ,
      .meta-time .meta {
        display: block;
      }
      .nav-text a {
        text-decoration: none;
        color: ${(props) => props.theme.textHeader};
        font-size: 18px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        // padding: 0 16px;
        border-radius: 4px;
        position: relative;
      }
      .nav-text:hover {
        color: white;
      }
      .nav-text a:hover {
        color: white;
      }
      .nav-menu-items {
        width: 100%;
        position: relative;
      }
    }
    .navbar__left-active {
      width: 56px;
      /* animation: navbar-show linear 0.4s; */
      transition: width linear 0.4s;
      .nav-menu {
        width: 100%;
        transition: width linear 0.4s;
      }
      .nav-menu_items {
        .nav-link-left {
          span {
            /* display: none; */
          }
        }
        ::-webkit-scrollbar {
          width: 1px;
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
      }
    }
    @keyframes slide-show {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes navbar-hidden {
      0% {
        width: 238px;
      }
      100% {
        width: 56px;
      }
    }
    @keyframes navbar-show {
      0% {
        width: 56px;
      }
      100% {
        width: 238px;
      }
    }
    @media screen and (max-width: 1023px) {
      .navbar__left-active {
        width: 48px;
      }
    }
    @media screen and (max-width: 768px) {
      .navbar__left {
        left: 0px;
        animation: show-slide 0.4s;
        z-index: 10000;
        .profile__mobile {
          display: flex;
        }
      }
      .navbar__left-active {
        left: -238px;
        animation: hide-slide 0.4s;
      }
      @keyframes show-slide {
        0% {
          opacity: 0;
          left: -238px;
        }
        100% {
          opacity: 1;
          left: 0px;
        }
      }
      @keyframes hide-slide {
        0% {
          opacity: 1;
          left: 0px;
        }
        100% {
          opacity: 0;
          left: -238px;
        }
      }
    }
  `;
  return (
    <NavbarLeft>
      <div
        className={
          statusMenu ? "navbar__left " : "navbar__left navbar__left-active"
        }
      >
        <nav className={sidebar ? "nav-menu " : "nav-menu active"}>
          <ul className="nav-menu-items">
            <li className="nav-text" onClick={showSidebar}>
              <NavLink
                className="nav-link"
                to="/exchange"
                style={(isActive) => ({
                  color: isActive ? "white" : "",
                })}
              >
                <div className="nav-link-left flex">
                  <div className="nav-link-icon" style={{ padding: "12px" }}>
                    <MdChangeCircle
                      style={{ margin: "auto", fontSize: "28px" }}
                    />
                  </div>
                  <span className="exchange-title">{t("header.Exchange")}</span>
                </div>
              </NavLink>
            </li>
            <li
              className={`nav-text ${show}`}
              onClick={() => setStatusShow("earn-show")}
            >
              <div className="flex  w-full pr-3 nav-link">
                <div className="nav-link-icon" style={{ padding: "12px" }}>
                  <SiSololearn style={{ margin: "auto", fontSize: "28px" }} />
                </div>
                <span className="ml-0 earn-title">{t("header.Earn.Earn")}</span>
                {show === "earn-show" ? <FaSortUp /> : <FaSortDown />}
              </div>
              <ul className="nav-menu_items earn">
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Earn.Liquidity")}
                      </p>
                      <span> {t("header.Earn.LiquidityBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Earn.Mining")}
                      </p>
                      <span>{t("header.Earn.MiningBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
              </ul>
            </li>
            <li className="nav-text">
              <NavLink
                className="nav-link"
                to="/crowdpooling"
                style={(isActive) => ({
                  color: isActive ? "white" : "",
                })}
              >
                <div className="nav-link-icon" style={{ padding: "12px" }}>
                  <MdGeneratingTokens
                    style={{ margin: "auto", fontSize: "28px" }}
                  />{" "}
                </div>
                <span className="crowdpooling-title">
                  {t("header.Crowdpooling")}
                </span>
              </NavLink>
            </li>

            <li
              className={`nav-text ${show}`}
              onClick={() => setStatusShow("tools-show")}
            >
              <div className="flex w-full pr-3 nav-link">
                <div className="nav-link-icon" style={{ padding: "12px" }}>
                  <FaTools style={{ margin: "auto", fontSize: "28px" }} />{" "}
                </div>
                <span className="ml-0 tools-title">
                  {t("header.Tools.Tools")}
                </span>
                {show === "tools-show" ? <FaSortUp /> : <FaSortDown />}
              </div>
              <ul className="nav-menu_items tools">
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Tools.CreateAToken")}
                      </p>
                      <span>{t("header.Tools.CreateATokenBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {" "}
                        {t("header.Tools.Pools")}
                      </p>
                      <span>{t("header.Tools.PoolsBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Tools.CreateCrowdpooling")}
                      </p>
                      <span>{t("header.Tools.CreateCrowdpoolingBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Tools.CreateLiquidity")}
                      </p>
                      <span>{t("header.Tools.CreateLiquidityBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Tools.Dashboards")}
                      </p>
                      <span>{t("header.Tools.DashboardsBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
              </ul>
            </li>

            <li
              className={`nav-text ${show}`}
              onClick={() => setStatusShow("meta-time")}
            >
              <div className="flex w-full pr-3 nav-link">
                <div className="nav-link-icon" style={{ padding: "12px" }}>
                  <GiSandsOfTime style={{ margin: "auto", fontSize: "28px" }} />{" "}
                </div>
                <span className="ml-0 tools-title">Metatime</span>
                {show === "meta-time" ? <FaSortUp /> : <FaSortDown />}
              </div>
              <ul className="nav-menu_items meta">
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.MetaTime.MetaTime")}
                      </p>
                      <span>{t("header.Tools.CreateATokenBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="/timeexchange" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                       
                      {t("header.MetaTime.TimeExchange")}
                      </p>
                      <span>{t("header.Tools.PoolsBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="/timestaking" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                      {t("header.MetaTime.TimeStaking")}
                      </p>
                      <span>{t("header.Tools.CreateCrowdpoolingBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
              </ul>
            </li>

            <li
              className={`nav-text ${show}`}
              onClick={() => setStatusShow("nft-show")}
            >
              <div className="flex w-full pr-3 nav-link">
                <div className="nav-link-icon" style={{ padding: "12px" }}>
                  <SiAirtable style={{ margin: "auto", fontSize: "28px" }} />
                </div>

                <span className="ml-0 nft-title">{t("header.NFT.NFT")}</span>
                {show === "nft-show" ? <FaSortUp /> : <FaSortDown />}
              </div>
              <ul className="nav-menu_items nft">
                <li className="nav-menu__item">
                  <Link to="/tradeNFT" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.NFT.TradeNFT")}
                      </p>
                      <span>{t("header.NFT.TradeNFTBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="/createFragments" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.NFT.Fragments")}
                      </p>
                      <span>{t("header.NFT.FragmentsBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="/createNFT" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.NFT.CreateNFT")}{" "}
                      </p>
                      <span>{t("header.NFT.CreateNFTBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="/pickavatar" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.NFT.PicKAvt")}{" "}
                      </p>
                      <span>{t("header.NFT.PicKAvt")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="/dinomoney" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.NFT.MoneyHungry")}{" "}
                      </p>
                      <span>{t("header.NFT.MoneyHungry")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="/nftmarket" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.NFT.NFTMarket")}{" "}
                      </p>
                      <span>{t("header.NFT.NFTMarket")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="/main" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">Test NFT</p>
                      <span>{t("header.NFT.NFTMarket")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
              </ul>
            </li>
            <li
              className={`nav-text ${show}`}
              onClick={() => setStatusShow("grovernance-show")}
            >
              <div className="flex w-full pr-3 nav-link">
                <div className="nav-link-icon" style={{ padding: "12px" }}>
                  <RiAdminFill style={{ margin: "auto", fontSize: "28px" }} />{" "}
                </div>

                <span className="ml-0 grovernance-title">
                  {t("header.Grovernance.Governance")}
                </span>
                {show === "grovernance-show" ? <FaSortUp /> : <FaSortDown />}
              </div>
              <ul className="nav-menu_items grovernance">
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAC/VBMVEVHcEyKiYqHhYiNjY+RkZKOjI+NjY6NjI2Li4yKioyLiYuWk5WQjpGOjpCJiYqJh4mBgIKFhYiJiYtxcXKNjY+Qj5GQj5GGhYeFhIWAgIKEgoSCgYR8e3x/fX9bW1t+fX53d3dubnB5eHp/fn93dnZxcXFzc3RubW9qamyemWSimEy3qTKTkHloaGmfkTvGriDYvhTexRPs0g7y2Aj53gT/5gDkyg+/sjlsbGxcXF3Qthj+4gPy3gpiYmLKsiFmZmZkYmT32xT/4wDhzx+roUyHf07Dqx/BqSL74BNgYGNfX2FEQka4oiHIrhjYwC/mzTPs0z364R6Rh0/GrRy9pSDNuDHQvE/w3GD13kPz3VX44DNaWl2smS3Fs0feyVrj0m/w22nu3XzDu3tNTE23pS23pkHLu3XYxmrdzX7m2qnFuYOsq6tTUlO+rWHb0Kra07mvqpKhoKCwr69AP0CPfyhzaC5+dUTOw6ezrZ+enZ2GhYaVlJRISEiEg4VRUVI4ODovLzE3Nzk/P0FSUVNsa21STCsoKCoqKiwtLS8xMTM1NTc7OzxdWkxpZltnZmdkZGVvb3B7e3yIiIhDQ0UzMzUuLjAzMzVCQkReXl9zc3QvLzFLS01bWlxsa22DgoM8PD5ISEpRUVMxMTMnJylubm83NzgpKSt+fX6NjY5xcHJGRkhzc3SBgIE5OTkzMzU4ODqPjo5FQCdCQkRUU1VaWludm5w8PD2hoKEqKitBP0FBQEFCQUQsLC5NTU9cXF2BgIGlpKRnZmiXlpdzcnN3dneop6c2NjiKioufn5+VlJQ5OTtYV1R4d3g9PT9CQUNfXmCtoU57d1taWlylmFeLhlZ1dHWenZ2WlZVYV1l5eXopKStMS00rKy303Uxra2x4d3gyMjRBQUOJiIh1dXU0NDYyMjQ5OTtNTU87Oz1jY2SQj5B2dnY2NjlEREc9PT/p3Jc+Pj7j2ruspGt8e3w7Oz3X0cZAQEJaWluoo4JqaWpHR0lkY2WZmJk2NjkuLjD6dUYxAAAA/3RSTlMAIkxrhLCvrayrgDyosamnm2cwDFqZsqSiiKCelJgHl1MXkHONhIiAerfP3q535P/////////+zH1g///3Qf9zcP//5qvN////bGgm////////2///////////Zf3//////+NO//////////hY////////Mv//////////RbnT8f////fd/////////////////f+Qy/j//6S+9P///9D//v+3/9EY+f/N////5Cvs////oP/P3N/N6T856v///v/wu/+k///p/6X36sTQ/9z///949f/39vL///zo9//Ss/L899Tr+Pn76ffs9d296f9k///s1P/S6v/r0c/0VZiuzXfaAAAFWElEQVR4AZXTA3gj3R6A8fd/ZjKTSTJt2E22X1N/NtbWtW3btm3btm3btmq7TVLN7ZmbtJl0drf39zB4n2MhlPhABJGK53mECYvjZUcoU22JIIjI1A7ijIhQamijAjKamjxPnC3HCG2VIEPr54rThnDWdhF3dcQ7W1wczHDOVq1h/js87lyQ87YWstJHjaJGxnfSKrE7t8cSj+2kRYm1Wcv/2+JhVP4ViDvHt7etIuCpqcZWYc321cXFkjS03Uo0ZMNfGtrUTOpHdWselFKw7TQScfAMsDzz8kJDG1k4vDVy2iTY9iaBVZb8sRHUYKAlLf/5V21kI6xlETzPYJ2EFb+oK9iSr42cVcH20BjsEvAWYHVFmsGeX8Yeq2sdkS+Agkw52GIDApABs62tqTmJa7ESaJkq+rHEAm3kJjbsAtdtsgtmK7bYdsppv2Ay0Ka4AkyQQAux2R7mcSlDtCUqNImUkpWUBNp/kgdFvOHtF2ctwAXylFPYScdxYiSdhvY6pxNFOdhSQJvXbb6wESGW5TbbdjnYwm0xcYKtuCs69ToEGXLAdJENS6w2tDiIJHT7JPmfymvZE8Wisl+qEG10Sd7ZxgNFZDExvPs9ui3xaSW6fV1bNArk8x2vigL8fb+gZeOZbBM1T0jOzQPdpYdN65bXKtGt61DlvAasyh2L1CmgpR8k/QAZsG/zixIUokoQcmsAV6JFv7fvnncKtNACVF7dTBuQJQ1DP4cCPzRF+OQ0gIPvZ5+QSapKaB7azYU6j//2SQ6LHtkGuAHo6iJPPM52NyIxDsjmOv7OYVDAPPhyaJFbdVOvC7iBU78m4HOHERQii2yaB1gzaGQ/lno3MI3wFSXCRQS4d+9FKwOspEGB0QW+hSvxpTZalCAmNSlgRV33uisG4AZcamLfPXiUTR5waKM9oBDmqXOj0ueb1Iv+5LF1epe8/HUkjAz0U3OP/RstSojcohvt72i5t73VdZPqb3/6iYPffvl991G/hOm/JYAyLPWS4+geDvBOU0xkZe9P0AbSBczbQD+R8ZHf4tmUK0Ypxbxx8lu0JP9CzeAtdXtXVUE+28pefo42/KsfA8g1qXu2J2PLz35xwnEsXAzga91UffnPT/sj7wTlya/bv/k1dXsRbsq3brKM5v2Mn8d6Huc89enr2Lp+NUDkJnfIlb7A0I1uczFvfQc8RXm/Hv5lthD9wN3vfkerrfmbrWxa/95jotGohZ2mWdA+nrj1A4r9l8ERuP3cXVHe9AjAjQbfAnQmqPfpK2wRj7W3UWXYb0GbBH5Mn6IdoA8e9VeYpeYG/0J4PW70zW+KPdV5GL5X9j2iFcBjlPc9EIUB7CmawO8vWaDB8VtH1FOjb7a6Cvh62X9nWvDZKJJH2AOrAOts85dO88UgVP22j9YmfA+YQsGH9lD1TbZrfcszX6xeaVF1GRhNCLAISi8EoAjfJ4x75TN5Kr4bwSzwglTmh/wr5cf/+sVP8fsWQpmdz3zxlyGP9jeA73wX3jTpxzziCL45wt34kPlTcvg+8VKAW5GZwI/hSWhXXECjLL7M125KbWgL33XU4nf8Evp4E2eT+tdfqHkU2kumNmPmr4Tl+7ATjj/a79iK73anC4sWDVzgCwSU8e16GnUxX/jlL7f+2M92ii23ePZk8Msz5o8J10WQOf/sLxCIdR1hR+bv+QWCsa7/sp8QSwRNXajbxphX/MQjTJo6d2yZJCzmbve8a45zOnVmH3VM6hmsf3gNHw5bPLQDu1cJUAQp7245Qk2+5pKGFpMGd7sbM5898DGC7v7TG/0bCI2DkvDVP+2eoyr/7QODNmH+C8P+r8iZzCrRAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Grovernance.DAO")}
                      </p>
                      <span> {t("header.Grovernance.DAOBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Grovernance.vDODO")}
                      </p>
                      <span>{t("header.Grovernance.vDODOBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Grovernance.Forum")}
                      </p>
                      <span>{t("header.Grovernance.ForumBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Grovernance.Voting")}
                      </p>
                      <span>{t("header.Grovernance.VotingBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
              </ul>
            </li>
            <li
              className={`nav-text ${show}`}
              onClick={() => setStatusShow("gridge-show")}
            >
              <div className="flex  w-full pr-3 nav-link">
                <div className="nav-link-icon" style={{ padding: "12px" }}>
                  <GiTowerBridge style={{ margin: "auto", fontSize: "28px" }} />{" "}
                </div>

                <span className="ml-0 gridge-title">
                  {t("header.Bridge.Bridge")}
                </span>
                {show === "gridge-show" ? <FaSortUp /> : <FaSortDown />}
              </div>
              <ul className="nav-menu_items gridge">
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAABAlBMVEVHcEwuN0kuN0guNUkuN0gxOkQuN0kuN0kuNkgvNkgtN0svN0kvNkkvNkkuNkgvN0kvN0lPnumXm6Q2P1JmepE8RFRJUGCXtNBLWG2dvNjMztLm5+k9SFuCm7VYaX9jaXcxPVN9go43UXFHhcFWXWs/a5kzRF1NmODz8/R0iqP///+QrMdEUGSJo76/wcdwdoJtgpqkqLBSYXZFfrc1Smc9ZI9fcYhBcaNLkdZ7k6yKj5lJi8w5V3tZoueHrdDZ2t2ytLuIrtJjpuVodYbCz9vt8vieuNHDy9N9qM9HdqaXtdFrpt2Mrs47XoWXttOPpr3z9/qswtbY4utDeK2cudSEo8FiWZwiAAAAEHRSTlMAyutM4RqK+mKsM7zzdtacWAUn7gAAAyhJREFUeF6Vlue2qjAQhYOCgKAnFHuvp/feb++9vP+r3JAEmZCguftPFq71OXt20BlUIMtxDdPEGJdM061U0X+o7JWwKN+oabIVgALZnoaDLRsXytjAOz5eJ9tdw1oe3qRSuTCsEt4su1IA21hLnjJqrCtDD46GcdxX4Tq2h60OURzJeC56S4bbgw5TayjjYnRmnu3vJuAgpsdhW0q+CmA3D8eJ6f2k6AG1cJtvv5TB1Zzvs33Y8DB7Atpa0XWIytWiuCW3b1scdiAbncBOxRSED11F6Sta5qrgBnb7UvEqME1bPMm1CNpvxfnOvQxOCg9y8YL2k/IZ7lPaX9Gku/0zXKz+LamePZYJXM4eSW+rws1JGIYTPAkTjVKAuG8LPzZXoDnbeLGXaDLao2qC728Lb4ypoo8o1MU9ep6OFyoak9RtBX3MS4b02GksgqmKdlAVy3SDlQybO8z/MghuxgraRY6CPqVQr5H6nwVBcK2kazLNoxrxcz4NEk1l2kSuRHPfRzyyF3hG6Xs9Oo0qPTGrHSx06Dnze8cju1su8DnDLzToZx5Vl57P+HcwHW9TeibTlRwd8qiOeXTTpONLVvxSoh2R5n7DVXT3tGMW3PZSpA1UFmnmt5dG1mRVlxcB856/byTQf7jfJjvDVcfXDP8r0DWESpD+xf1yC5jXDL6Ob+j5UqDLCBmA/smvOI0MpzW3xw8ybSMEX9XvP9gV88i6pAC3HpyzS3+CdJ3QVka/59Ap+E944N6nSxLBKzIWIjDM4Czg3c7nPDJMxV+0m/Hi8YnAA/jnIFhvdimU3hqjl9z7RzYmovwUB3vSqNdrTFjpCeZiV/75W35MOIq1odnY4d2vNCMNf6GjJAKwibh8iDdoZm9fZ/TF4wc6xg4wlFOws8xJ4++ymRLFnzrymKgXrw7Hb7J5dsbmVyQvD3D8i0pH9gGYncrhD24NKNrtcMFhLvsGg1TeIdQrU8lCogzVyB60DmHDcPBLuK7sMkJ6uP6S7enBFlKrZmvu12pZ9Q2s76B1qvnr4nIttEEVX5dVyzEU/dcrSFuOa4IETa8GymrKYaoWA/8Acg3tmOhQB/IAAAAASUVORK5CYII="
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Bridge.ArbitrumBridge")}
                      </p>

                      <span>{t("header.Bridge.ArbitrumBridgeBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAAAV1BMVEVHcEzvuArvuQvwuAvwuAvxuArwuAvvuAvrugnwuQrwuQrvuArwuArvuArvuQrwuArwuQv55KD99d310V7///7ywSj+/ff////0ykX87sL9+Of76bL//vuHchmSAAAAEHRSTlMA68qc4UyK+hqsM2Lz1na8BdrUawAAAedJREFUeF6d19mOpDAMBVDWLGzlJNTSM/P/3zndRaJLKBto7huKDshWwKEQY/rJ/kT1XfG7dGocCNGNbc9So0r6zHDrzlirSUjVHmFY1u8+vy1pP7qWcU3HGQ1vTUVnMrQsLulcdHsdgx/jcD/F+Zrd88Fzs9Nt4KfAyzVuJSxyu9KlhGWO0msRy7xJ2GgZy1xFbXl8wIeoNYsP+fTGisXHfHzrRsZz8DvcfGOzh4lYjr6pXbzmWz1yOzzMwGvut1p/64E+OTC4Z/cbIeAJg3t2w/SZcz7yBYfZLTxil7fORo2GRR5SCQt3aTnjY1HnOPGEI084501hMwyO3jvgyDkdnjFfi57TdciX/7CafH5zF7HHMrYBNDgwuMdywtA9ZTzi1z3yiF+JA0ODRzw/IvexCLfwDJPdvmJvdH+kAkIqIfIXrVNvvywRM/U7+khfFCOL894LnBsjX/ge5K/7FpfsHPHgaxzYeTLscQFjnNQk83/AwiTsSObA4jCpRA4sz/CORA4sz+BK5DIeDIYoz4HZKZYyEc9lPB4feryItTlx4PLAzEZBOs3yvzxWxSYtz48w+BUMPlzAiGmuHHGRWl843CPd/uOHqdhPL3ttAWRfsbZUp//nRp3Tpu6K36Sb7K35SWVVL4H/XLbAa1AUEXEAAAAASUVORK5CYII="
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Bridge.BSCBridge")}
                      </p>
                      <span>{t("header.Bridge.BSCBridgeBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Bridge.cBridge")}
                      </p>
                      <span>{t("header.Bridge.cBridgeBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
                <li className="nav-menu__item">
                  <Link to="#" className="menu__item-box">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAMAAAApvJHbAAAAY1BMVEVHcEyBR+WCR+SBRuV/ROGCRuSCR+SCRuSCR+SCRuSCRuSBR+WCRuWCRuaCRuSBR+SCR+Xg0vnBo/KSXuj///+KU+ehdezo3fqpge2xjO/w6fz49P2aaurJr/S5mPDQuvXYxvc4S6XxAAAAEHRSTlMA+vOKGkysyuFi63a8M5zWgMohqgAAAhZJREFUeF6Vl+myqyAMgHFBsVobwL3Lue//lNcF5+QQjeX71en0a8iCiOCQxUwqgrknuYKd26OWAWp9A58oL75yiwccEyeXrlTgCPfTCniUZALHcEl9JifwDflxCyv4jtuRngOE6bzM63zOvO6NCIRRYTmNIJAS2Q8IJUqZdXddCzy52PFH7KWb5jkCjzyud/tuVnTH2uow9OfZ7Pywy7/TrLu+QTw/XOZkykYXdDRu+f15+Gi1Ua8HlPBLr/qb73mJQptFMOD4LLbml155Nvq55u14tpVnD7+2XUqwNrGzJ1UHz8Zdnm07u8vX/+xR4pK19eyM09Y9Q8qfiYKz2630jmkkZUuA5I2wP848HF4lMt/uUWizTW0/wOBmsGNt3O/BJfxB868Zu9tCoVlDW6Vdv3gRm8652edcv7z/7rCNB5XusWkAjCZ2AR7jkh/qMGNX4g4+rXEJ22UpmrEzIYBitWvtnDxnF26XEN/uc94ju/fsVKCiU5qZkdQc79Diwp72aHby+l15TyYf48rnaunNWnlx9rZuVt/GbJ9w6FgsSGD0d4PR9k+/VhQwWLS/O3Ia8HWjW40egwp4zJOeSpELTTKnWPpMzXaZTEzom8st1JbYlhHw8O+bZZCcC48kTGb18PfcJDxyeOkycUKqLt2Yu9zUF+GrVHCkWdithPon8dGNjKXMSQKqDrlRyjpXsRMfWXGi/gc+iLt7ZWDpyAAAAABJRU5ErkJggg=="
                      alt=""
                    />
                    <div className="menu__item-body">
                      <p className="menu__item-body-header">
                        {t("header.Bridge.PolygonBridge")}
                      </p>
                      <span>{t("header.Bridge.PolygonBridgeBody")}</span>
                    </div>
                  </Link>
                  <AiOutlineArrowRight
                    className="icon-arrow"
                    style={{ color: "yellow" }}
                  />
                </li>
              </ul>
            </li>
            <li className="profile__mobile ">
              <Link to="/profile " className="flex">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <span>{t("profile.profile")}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </NavbarLeft>
  );
}

export default React.memo(NavbarLeft);
