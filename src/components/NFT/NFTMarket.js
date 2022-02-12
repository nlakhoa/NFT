import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListMarket } from "../../store/actions/connectWallet";
import { useMoralis } from "react-moralis";
import { findIndex } from "lodash";

export default function NFTMarket() {
  const [sort, setSort] = useState("Defi");
  const sortDefi = ["All", "Dino", "Meat", "Mystery Box"];
  const sortCoin = ["All", "BNB", "DSG", "BUSD", "USDT"];
  const sortSocialfi = ["All", "Avatar", "Dravings boads"];
  const [sortCategory, setSortCategory] = useState("All");
  const [sortByCoin, setSortByCoin] = useState("All");
  const { t } = useTranslation();
  const Defi = useSelector((state) => state.home.Defi);
  const Socialfi = useSelector((state) => state.home.Socialfi);
  const socialfiAccount = useSelector((state) => state.wallet.arrMarket);
  const contract = useSelector((state) => state.wallet.contract);
  const web3 = useSelector((state) => state.wallet.web3);
  const dispatch = useDispatch();
  const { Moralis } = useMoralis();
  useEffect(() => {
    async function fetchData() {
      let market = await contract.methods.getAllNFTListing().call();
      const options = {
        address: "0x0Ae41573e7209C1771813c3fE5a78ECF0b00E86F",
        chain: "rinkeby",
      };
      console.log('market',market)
      let nftOwners = await Moralis.Web3API.token.getNFTOwners(options);
      let arr = [];
      
      nftOwners.result.map((value) => {
        let item = {
          token_uri: value.token_uri,
          image: JSON.parse(value.metadata),
        };
        arr.push(item);
      });
      console.log('nftOwners',nftOwners,arr)
      let result = [];
      console.log('-----------',market,arr)
      if (market.length > 0 && arr.length > 0) {
        for (let i = 0; i < market.length; i++) {
          let index = arr.findIndex((value) => {
            return market[i][8] === value.token_uri;
          });
          if (market[i][7] && index != -1) {
            result.push({
              name: market[i][0],
              dna: market[i][1],
              index: market[i][2],
              owner: market[i][3],
              ownerCreate: market[i][4],
              price: market[i][5],
              typeCoin: market[i][6],
              listing: market[i][7],
              idOwner: market[i][9],
              fragments: market[i][10],
              indexFragment: market[i][11],
              image: arr[index].image.image,
              isFragment: false,
            });
          }
        }
        console.log(result)
        dispatch(getListMarket(result));
      }
    }
    return fetchData();
  }, []);

  const imageTypeCoin = (type) => {
    if (type === "BNB") {
      return (
        <img
          src="	https://dsgmetaverse.com/images/tokens/BNB.png"
          alt="	https://dsgmetaverse.com/images/tokens/BNB.png"
        />
      );
    }
    if (type === "DSG") {
      return (
        <img
          src="https://dsgmetaverse.com/images/tokens/DSG.png"
          alt="https://dsgmetaverse.com/images/tokens/DSG.png"
        />
      );
    }
    if (type === "USDT") {
      return (
        <img
          src="https://dsgmetaverse.com/images/tokens/USDT.svg"
          alt="https://dsgmetaverse.com/images/tokens/USDT.svg"
        />
      );
    }
    if (type === "BUSD") {
      return (
        <img
          src="https://dsgmetaverse.com/images/tokens/BUSD.svg"
          alt="https://dsgmetaverse.com/images/tokens/BUSD.svg"
        />
      );
    }
  };

  const handleSort = (e) => {
    setSortCategory(e.target.value);
  };
  const handleByCoin = (e) => {
    setSortByCoin(e.target.value);
  };

  const sortListByCoin = () => {
    // Sort dựa vào danh sách, loại trong danh sách và kiểu coin
    if (sort === "Defi" && Defi.length > 0) {
      return Defi.map((item) => {
        if (sortCategory === "All" && sortByCoin === "All") {
          return (
            <li
              className={
                "nftmarket__body-mid-item  md:col-span-6   md:col-span-6  xl:col-span-3 col-span-12 col-span-12"
              }
              key={item.id}
            >
              <Link to={`/nftdetail/defi/${item.id}`}>
                <img src={item.image} alt={item.id} />
                <FaCheckCircle className="icon-checked" />
                <div className="nftmarket__body-mid-name flex">
                  <img src={item.imgCoin} alt={item.imgCoin} />
                  <div className="nftmarket__body-mid-name-body">
                    <p>Price {item.coin}</p>
                    <span>{(+item.price / Math.pow(10, 16)).toFixed(4)}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        }
        if (sortCategory !== "All" && sortByCoin === "All") {
          if (item.category === sortCategory) {
            return (
              <li
                className={
                  "nftmarket__body-mid-item  md:col-span-6  xl:col-span-3 col-span-12"
                }
                key={item.id}
              >
                <Link to={`/nftdetail/defi/${item.id}`}>
                  <img src={item.image} alt={item.id} />
                  <FaCheckCircle className="icon-checked" />
                  <div className="nftmarket__body-mid-name flex">
                    <img src={item.imgCoin} alt={item.imgCoin} />
                    <div className="nftmarket__body-mid-name-body">
                      <p>Price {item.coin}</p>
                      <span>{(+item.price / Math.pow(10, 16)).toFixed(4)}</span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          }
        }
        if (sortCategory === "All" && sortByCoin !== "All") {
          if (sortByCoin === item.coin) {
            return (
              <li
                className={
                  "nftmarket__body-mid-item  md:col-span-6  xl:col-span-3 col-span-12"
                }
                key={item.id}
              >
                <Link to={`/nftdetail/defi/${item.id}`}>
                  <img src={item.image} alt={item.id} />
                  <FaCheckCircle className="icon-checked" />
                  <div className="nftmarket__body-mid-name flex">
                    <img src={item.imgCoin} alt={item.imgCoin} />
                    <div className="nftmarket__body-mid-name-body">
                      <p>Price {item.coin}</p>
                      <span>{(+item.price / Math.pow(10, 16)).toFixed(4)}</span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          }
        } else {
          if (item.category === sortCategory) {
            if (sortByCoin === item.coin) {
              return (
                <li
                  className={
                    "nftmarket__body-mid-item  md:col-span-6  xl:col-span-3 col-span-12"
                  }
                  key={item.id}
                >
                  <img src={item.image} alt={item.id} />
                  <FaCheckCircle className="icon-checked" />
                  <div className="nftmarket__body-mid-name flex">
                    <img src={item.imgCoin} alt={item.imgCoin} />
                    <div className="nftmarket__body-mid-name-body">
                      <p>Price {item.coin}</p>
                      <span>{(+item.price / Math.pow(10, 16)).toFixed(4)}</span>
                    </div>
                  </div>
                </li>
              );
            }
          }
        }
      });
    }

    if (sort === "Socialfi" && Socialfi.length > 0) {
      return socialfiAccount.map((item) => {
        if (sortCategory === "All" && sortByCoin === "All") {
          return (
            <li
              className={
                "nftmarket__body-mid-item  md:col-span-6  xl:col-span-3 col-span-12"
              }
              key={item.index}
            >
              <Link to="/nftdetail">
                <Link to={`/nftdetail/socialfi/${item.index}`}>
                  <div className="listDino" style={{ position: "relative" }}>
                    <div>
                      <img
                        src={item.image}
                        alt={item.image}
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          zIndex: "3",
                        }}
                      />
                    </div>
                  </div>
                  <FaCheckCircle className="icon-checked" />
                  <div className="nftmarket__body-mid-name flex">
                    {imageTypeCoin(item.typeCoin)}
                    <div className="nftmarket__body-mid-name-body">
                      <p>Price {item.typeCoin}</p>
                      <span>{(+item.price / Math.pow(10, 16)).toFixed(4)}</span>
                    </div>
                  </div>
                </Link>
              </Link>
            </li>
          );
        }
        if (sortCategory !== "All" && sortByCoin === "All") {
          if (item.typeCoin === sortCategory) {
            return (
              <li
                className={
                  "nftmarket__body-mid-item  md:col-span-6  xl:col-span-3 col-span-12"
                }
                key={item.id}
              >
                <Link to="/nftdetail">
                  <Link to={`/nftdetail/socialfi/${item.id}`}>
                    <div className="listDino" style={{ position: "relative" }}>
                      <div>
                        <img
                          src={item.itemBody}
                          alt={item.itemBody}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "2",
                          }}
                        />

                        <img
                          src={item.itemBg}
                          alt={item.itemBg}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "1",
                          }}
                        />
                        <img
                          src={item.itemClothes}
                          alt={item.itemClothes}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemEye}
                          alt={item.itemEye}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemHead}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemMouth}
                          alt={item.itemMouth}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemStuff}
                          alt={item.itemStuff}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                      </div>
                    </div>
                    <FaCheckCircle className="icon-checked" />
                    <div className="nftmarket__body-mid-name flex">
                      {imageTypeCoin(item.typeCoin)}
                      <div className="nftmarket__body-mid-name-body">
                        <p>Price {item.typeCoin}</p>
                        <span>
                          {(+item.price / Math.pow(10, 16)).toFixed(4)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </Link>
              </li>
            );
          }
        }
        if (sortCategory === "All" && sortByCoin !== "All") {
          if (sortByCoin === item.typeCoin) {
            return (
              <li
                className={
                  "nftmarket__body-mid-item  md:col-span-6  xl:col-span-3 col-span-12"
                }
                key={item.id}
              >
                <Link to="/nftdetail">
                  <Link to={`/nftdetail/socialfi/${item.id}`}>
                    <div className="listDino" style={{ position: "relative" }}>
                      <div>
                        <img
                          src={item.itemBody}
                          alt={item.itemBody}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "2",
                          }}
                        />

                        <img
                          src={item.itemBg}
                          alt={item.itemBg}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "1",
                          }}
                        />
                        <img
                          src={item.itemClothes}
                          alt={item.itemClothes}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemEye}
                          alt={item.itemEye}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemHead}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemMouth}
                          alt={item.itemMouth}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                        <img
                          src={item.itemStuff}
                          alt={item.itemStuff}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            zIndex: "3",
                          }}
                        />
                      </div>
                    </div>
                    <FaCheckCircle className="icon-checked" />
                    <div className="nftmarket__body-mid-name flex">
                      {imageTypeCoin(item.typeCoin)}
                      <div className="nftmarket__body-mid-name-body">
                        <p>Price {item.typeCoin}</p>
                        <span>
                          {(+item.price / Math.pow(10, 16)).toFixed(4)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </Link>
              </li>
            );
          }
        } else {
          if (item.category === sortCategory) {
            if (sortByCoin === item.typeCoin) {
              return (
                <li
                  className={
                    "nftmarket__body-mid-item  md:col-span-6  xl:col-span-3 col-span-12"
                  }
                  key={item.id}
                >
                  <Link to="/nftdetail">
                    <Link to={`/nftdetail/socialfi/${item.id}`}>
                      <div
                        className="listDino"
                        style={{ position: "relative" }}
                      >
                        <div>
                          <img
                            src={item.itemBody}
                            alt={item.itemBody}
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              zIndex: "2",
                            }}
                          />

                          <img
                            src={item.itemBg}
                            alt={item.itemBg}
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              zIndex: "1",
                            }}
                          />
                          <img
                            src={item.itemClothes}
                            alt={item.itemClothes}
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              zIndex: "3",
                            }}
                          />
                          <img
                            src={item.itemEye}
                            alt={item.itemEye}
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              zIndex: "3",
                            }}
                          />
                          <img
                            src={item.itemHead}
                            alt=""
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              zIndex: "3",
                            }}
                          />
                          <img
                            src={item.itemMouth}
                            alt={item.itemMouth}
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              zIndex: "3",
                            }}
                          />
                          <img
                            src={item.itemStuff}
                            alt={item.itemStuff}
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              zIndex: "3",
                            }}
                          />
                        </div>
                      </div>
                      <FaCheckCircle className="icon-checked" />
                      <div className="nftmarket__body-mid-name flex">
                        {imageTypeCoin(item.typeCoin)}
                        <div className="nftmarket__body-mid-name-body">
                          <p>Price {item.typeCoin}</p>
                          <span>
                            {(+item.price / Math.pow(10, 16)).toFixed(4)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Link>
                </li>
              );
            }
          }
        }
      });
    }
  };

  const PickAvt = styled.div`
    .nftmarket {
      width: 100%;
      background-color: ${(props) => props.theme.bgHeader};
      min-height: 100vh;
      overflow: hidden;
      color: ${(props) => props.theme.textBtn};
      .nftmarket__header {
        background-color: ${(props) => props.theme.bgBodyTop};
        padding: 16px 64px;
        border: 1px solid ${(props) => props.theme.bgBodyTop};
        .nftmarket__header-title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 16px;
          color: ${(props) => props.theme.textBody};
        }
        .nftmarket__header-des {
          font-size: 16px;
          color: ${(props) => props.theme.textBody};
          display: flex;
          margin-bottom: 24px;
          .nftmarket__header-link {
            display: flex;
            font-size: 18px;
            color: ${(props) => props.theme.linkColor};
            padding: 0 6px;
          }
          .nftmarket__header-des-body {
            color: ${(props) => props.theme.textHeader};
          }
          .nftmarket__header-des-btn {
            color: ${(props) => props.theme.textBtn};
            border: 2px solid ${(props) => props.theme.textBtn};
            background-color: ${(props) => props.theme.bgBtn};
            padding: 6px 12px;
            cursor: pointer;
            border-radius: 25px;
            margin-left: 8px;
            width: 100%;
            font-size: 14px;
            max-width: 150px;
            text-align: center;
          }
        }
        .nftmarket__btn {
          color: ${(props) => props.theme.te};
          font-size: 18px;
          font-family: 600;
          height: 41px;
          justify-content: space-between;
          margin-bottom: 24px;
          .nftmarket__btn-filter {
            background-color: ${(props) => props.theme.bgHeaderHover};
            padding: 0 0;
            display: flex;
            border-radius: 24px;

            justify-content: space-between;
            .btn {
              padding: 6px 24px;
              background-color: transparent;
              border-radius: 24px;
              cursor: pointer;
            }
            .active {
              background: ${(props) => props.theme.borderBtn};
              color: ${(props) => props.theme.textBody};
            }
          }
          .nftmarket__btn-right {
            z-index: 0;
            .select__filter {
            }
            .input__search {
              color: black;
            }
            /* ===== Horizontal Rule ===== */

            #select-profession {
              color: black;
              padding: 6px 36px 6px 12px;
              border-radius: 12px;
              font-size: 18px;
              line-height: 28px;
              .option {
                padding: 6px;
              }
              .option:hover {
                box-shadow: 0 0 10px 100px #000 inset;
              }
            }

            .nftmarket::before {
              position: absolute;
              content: "\f063";
              font-size: 2em;
              color: #fff;
              right: 20px;
              top: calc(50% - 0.5em);
            }

            .nftmarket.active::before {
              transform: rotateX(-180deg);
            }

            .nftmarket__placeholder {
              display: block;
              font-size: 2.3em;
              color: #838e95;
              padding: 0.2em 0.5em;
              text-align: left;
              pointer-events: none;
              user-select: none;
              visibility: visible;
            }

            .nftmarket.active .nftmarket__placeholder {
              visibility: hidden;
            }

            .nftmarket__placeholder::before {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 0.2em 0.5em;
              content: attr(data-placeholder);
              visibility: hidden;
            }

            .nftmarket.active .nftmarket__placeholder::before {
              visibility: visible;
            }

            .nftmarket__box {
              position: absolute;
              top: calc(100% + 4px);
              left: -4px;
              display: none;
              list-style-type: none;
              text-align: left;
              font-size: 1em;
              background-color: #fff;
              box-sizing: border-box;
            }

            .nftmarket.active .nftmarket__box {
              display: block;
              animation: fadeInUp 500ms;
            }

            .nftmarket__box__options {
              display: list-item;
              font-size: 1.5em;
              color: #838e95;
              padding: 0.5em 1em;
              user-select: none;
            }

            .nftmarket__box__options::after {
              content: "\f00c";
              font-size: 0.5em;
              margin-left: 5px;
              display: none;
            }

            .nftmarket__box__options.selected::after {
              display: inline;
            }

            .nftmarket__box__options:hover {
              background-color: #ebedef;
            }

            /* ----- Select Box Black Panther ----- */
            .nftmarket {
              border-bottom: 4px solid rgba(0, 0, 0, 0.3);
            }

            .nftmarket__btn-right-body {
              z-index: 3;
              margin-right: 12px;
              word-wrap: break-word;
            }

            .nftmarket__btn-right-search {
              width: 136px;
              border-radius: 12px;
              color: black;
            }

            /* ----- Select Box Superman ----- */

            /* ===== Keyframes ===== */
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translate3d(0, 20px, 0);
              }

              to {
                opacity: 1;
                transform: none;
              }
            }

            @keyframes fadeOut {
              from {
                opacity: 1;
              }

              to {
                opacity: 0;
              }
            }
            .nftmarket__btn-right-search {
              border-radius: 12px;
              width: 160px;
              font-size: 14px;
            }
          }
        }
      }
      .nftmarket__body-mid {
        margin: 24px 76px;
        .nftmarket__body-mid-items {
          .nftmarket__body-mid-item {
            background-color: ${(props) => props.theme.bgBodyTop};
            margin: auto;
            border-radius: 8px;
            box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
            cursor: pointer;
            position: relative;
            padding: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .listDino {
              width: 250px;
              height: 250px;
            }
            .nftmarket__body-mid-name {
              color: ${(props) => props.theme.textBody};
              font-size: 18px;
              img {
                width: 24px;
                height: 24px;
                margin: auto 0;
                margin-right: 12px;
              }
              p {
                padding-top: 12px;
              }
              span {
                color: ${(props) => props.theme.borderBtn};
              }
            }
            .icon-checked {
              position: absolute;
              top: 8px;
              right: 8px;
              color: ${(props) => props.theme.lightGreen};
              display: none;
            }
          }
          .active {
            .icon-checked {
              display: block;
            }
          }
        }
      }
    }
    @media screen and (max-width: 1023px) {
      .nftmarket {
        .nftmarket__header {
          .nftmarket__header-des {
            flex-wrap: wrap;
            .nftmarket__header-des-body {
              margin-bottom: 12px;
            }
          }
          .nftmarket__btn {
            height: 120px;
            flex-wrap: wrap;
            .nftmarket__btn-filter {
              margin-bottom: 12px;
            }
            .nftmarket__btn-right {
              flex-wrap: wrap;
              .nftmarket__btn-right-body {
                margin-bottom: 6px;
              }
              .nftmarket__btn-right-search {
                height: 41px;
              }
            }
          }
        }
        .nftmarket__body-mid {
          margin: 12px auto;
        }
      }
    }
    @media screen and (max-width: 767px) {
      .nftmarket {
        .nftmarket__header {
          padding: 12px;

          .nftmarket__header-des {
            flex-wrap: wrap;
            .nftmarket__header-des-body {
              margin-bottom: 12px;
            }
          }
          .nftmarket__btn {
            height: 168px;
            flex-wrap: wrap;
            .nftmarket__btn-filter {
              margin-bottom: 12px;
            }
            .nftmarket__btn-right {
              flex-wrap: wrap;
              #select-profession {
                padding: 6px 28px 6px 12px;
              }
              .nftmarket__btn-right-search {
                height: 41px;
              }
              .nftmarket__btn-right-body {
                margin-bottom: 6px;
              }
            }
          }
        }
        .nftmarket__body-mid {
          margin: 12px auto;
        }
      }
    }
  `;
  return (
    <PickAvt>
      <div className="nftmarket">
        <div className="nftmarket__header">
          <h1 className="nftmarket__header-title">
            {t("nftmarket.NFTMarket")}
          </h1>
          <div className="nftmarket__header-des flex justify-between">
            <span className="nftmarket__header-des-body ">
              {t("nftmarket.Digital")}
            </span>
            <span className="nftmarket__header-des-btn">
              {t("nftmarket.Trading")}
            </span>
          </div>
          <div className="nftmarket__btn flex">
            <div className="nftmarket__btn-filter">
              <span
                className={sort === "Defi" ? "btn active" : "btn"}
                onClick={() => setSort("Defi")}
              >
                Defi
              </span>
              <span
                className={sort === "Socialfi" ? "btn active" : "btn"}
                onClick={() => setSort("Socialfi")}
              >
                Socialfi
              </span>
              <span
                className={sort === "Gamefi" ? "btn active" : "btn"}
                onClick={() => {
                  toast("🦄 Comming soon!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              >
                Gamefi
              </span>
            </div>
            <div className="nftmarket__btn-right flex">
              <div className=" nftmarket__btn-right-body">
                <select
                  name="select-profession"
                  id="select-profession"
                  value={sortCategory}
                  onChange={handleSort}
                >
                  {sort === "Defi"
                    ? sortDefi.map((item) => {
                        return (
                          <option className="option" value={item} key={item}>
                            {item}
                          </option>
                        );
                      })
                    : sortSocialfi.map((item) => {
                        return (
                          <option className="option" value={item} key={item}>
                            {item}
                          </option>
                        );
                      })}
                </select>
              </div>
              <div className=" nftmarket__btn-right-body">
                <select
                  name="select-profession"
                  id="select-profession"
                  value={sortByCoin}
                  onChange={handleByCoin}
                >
                  {sortCoin.map((item) => {
                    return (
                      <option className="option" value={item} key={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className=" nftmarket__btn-right-body">
                <select name="select-profession" id="select-profession">
                  <option className="option" value="hacker">
                    Time: Low to Hight
                  </option>
                  <option className="option" value="gamer">
                    Price: Hight to Low
                  </option>
                  <option className="option" value="developer">
                    Price: Low to Hight
                  </option>
                  <option className="option" value="gamer">
                    Level: Hight to Low
                  </option>
                  <option className="option" value="developer">
                    Level: Low to Hight
                  </option>
                  <option className="option" value="gamer">
                    Power: Hight to Low
                  </option>
                  <option className="option" value="developer">
                    Power: Low to Hight
                  </option>
                </select>
              </div>
              <input
                type="text"
                className="nftmarket__btn-right-search"
                placeholder="Search ID, Seller"
              />
            </div>
          </div>
        </div>
        <div className="nftmarket__body-mid  ">
          <ul className="nftmarket__body-mid-items grid grid-cols-12 gap-3">
            {sortListByCoin()}
          </ul>
        </div>
      </div>
    </PickAvt>
  );
}
