import detectEthereumProvider from "@metamask/detect-provider";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled, { ThemeProvider } from "styled-components";
import Web3 from "web3";
import { StechNFTAbi } from "./abi";
import "./App.scss";
import TimeExchange from "./components/MetaTime/TimeExchange";
import TimeStaking from "./components/MetaTime/TimeStaking";
import Mint from "./components/Mint";
import Modal from "./components/ModalConnect";
import MyNFT from "./components/MyNFT/MyNFT";
import Navbar from "./components/Navbar/Navbar";
import NavbarLeft from "./components/Navbar/NavbarLeft";
import CreateFragments from "./components/NFT/CreateFragments";
import CreateNFT from "./components/NFT/CreateNFT";
import DinoMoney from "./components/NFT/DinoMoney";
import NFTDetail from "./components/NFT/NFTDetail";
import NFTMarket from "./components/NFT/NFTMarket";
import PickAvatar from "./components/NFT/PickAvatar/PickAvatar";
import TradeNFT from "./components/NFT/TradeNFT";
import Profile from "./components/Profile";
import Quests from "./components/Quests";
import "./css/style.scss";
import {
  connectWeb3,
  logoutMetaMask,
  reRenderMetamask,
} from "./store/actions/connectWallet";
import { handleClickModal } from "./store/actions/homeAction";
import Test from "./Test";
import TestContract from "./TestContract";

//  Create WalletConnect Provider

const LightTheme = {
  // Header
  bgHeader: " white",
  textHeader: "#85c559",
  bgHeaderItem: " #ade58a",
  bgHeaderHover: "#ceece7",
  bgMenuSecond: "#ade58a",

  // Body
  bgItem: "rgb(245,245,245)",
  bgItemGL: "#85c559",
  linkColor: "#85c559",
  textBody: "black",
  bgBodyTop: "white",
  lightGreen: "#85c559",
  borderBtn: "#85c559",
  bgBtn: "#85c559",
  textBtn: "white",
  opacityTo: "rgba(255, 255, 255, 0)",
  opacityFrom: "rgba(255, 255, 255, 0.9)",
};
const DarkTheme = {
  // Header

  bgHeader: "#1b1b1b",
  textHeader: "#85858d",
  bgHeaderItem: "#242428",
  bgHeaderHover: "#434347",
  bgMenuSecond: "#2a2a2d",
  // Body
  bgItem: "#373739",

  bgItemGL: "#373739",
  linkColor: "yellow",
  textBody: "white",
  bgBodyTop: "#242428",
  lightGreen: "#85c559",
  borderBtn: "yellow",
  bgBtn: "transparent",
  textBtn: "yellow",
  opacityTo: "rgba(36, 36, 36, 0.5)",
  opacityFrom: "rgba(36, 36, 36, 1)",
};
const themes = {
  light: LightTheme,
  dark: DarkTheme,
};
function App() {
  const statusModal = useSelector((state) => state.home.statusModal);
  const statusMenu = useSelector((state) => state.home.statusMenu);
  const statusBackground = useSelector((state) => state.home.statusBackground);
  const statusClickModal = useSelector((state) => state.home.statusClickModal);
  const metaMaskConnect = useSelector((state) => state.wallet.metaMaskConnect);
  const connectWalletConnect = useSelector(
    (state) => state.wallet.connectWalletConnect
  );
  const [provider, setProvider] = useState("");

  const dispatch = useDispatch();

  const onClickModal = () => {
    dispatch(handleClickModal());
  };

  useEffect(() => {
    async function fetchData() {
      let value = await detectEthereumProvider();
      setProvider(value);
      let web3 = new Web3(value);
      const contract = await new web3.eth.Contract(
        StechNFTAbi,
        "0x8b7E22C6293F98BDD3ECF661Ad0CdD5a32A7c774"
      );
      // const balances = web3.eth.getAllERC20({from:"0x9805D7B954265b59D126FBf6BC1B3Af1E946Ac91"}).call()
      //  console.log(web3, contract,balances)
      dispatch(connectWeb3(web3, contract));
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const provider = await detectEthereumProvider()
  //     let web3 =  new Web3(provider)
  //     const contract = await new web3.eth.Contract(StechNFTAbi, "0xD12fd60d4cF916A962c9A156633dD67f4265cf82")
  //     console.log(web3)
  //     dispatch(connectWeb3(web3, contract));
  //     let list = await contract.methods.getZombiesByOwner(account).call();
  //     console.log(market);
  //     dispatch(getSocialfi(list));
  //     let market = await contract.methods.getAllNFTListing().call();
  //     dispatch(getListMarket(market));
  //   }
  //   account && fetchData();
  // }, [account]);

  // Subscribe to accounts change
  provider &&
    provider.on("accountsChanged", (accounts) => {
      accounts.length > 0 && dispatch(reRenderMetamask(accounts[0]));
    });

  window.addEventListener("beforeunload", (ev) => {
    dispatch(logoutMetaMask());
  });
  // Subscribe to chainId change
  provider &&
    provider.on("chainChanged", (chainId) => {
      console.log("chainChanged");
      console.log(chainId);
    });

  // Subscribe to session disconnection
  provider &&
    provider.on("disconnect", (code, reason) => {
      console.log(code, reason);
    });

  const AppCss = styled.div`
    .main {
      .main__left {
        width: 238px;
        background-color: ${themes[statusBackground].bgHeader};
        /* animation: navbarLeft-show linear 0.4s; */
        transition: width linear 0.4s;
      }
      .main__right {
        width: calc(100vw - 238px);
        padding-top: 76px;
        /* animation: navbarRight-hidden linear 0.4s; */
        transition: width linear 0.4s;
      }
    }
    .main-active {
      .main__left {
        width: 56px;
        /* animation: navbarLeft-hidden linear 0.4s; */
        transition: width linear 0.4s;
      }
      .bg__modal {
        display: none;
      }
      .main__right {
        width: calc(100vw - 56px);
        /* animation: navbarRight-show  linear 0.4s; */
        transition: width linear 0.4s;
      }
    }
    @media screen and (max-width: 1023px) {
      .main {
        .main__left {
          width: 0;
          background-color: ${themes[statusBackground].bgHeader};
        }
        .main__right {
          width: 100%;
          padding-top: 76px;
        }
        .bg__modal-active {
          display: block;
          width: 100%;
          position: fixed;
          height: 100%;
          background: black;
          opacity: 0.2;
          z-index: 1;
        }
      }
      .main-active {
        .main__left {
          width: 0;
        }
      }
    }

    @keyframes navbarLeft-show {
      0% {
        width: 56px;
      }
      100% {
        width: 238px;
      }
    }
    @keyframes navbarLeft-hidden {
      0% {
        width: 238px;
      }
      100% {
        width: 56px;
      }
    }
    @keyframes navbarRight-show {
      0% {
        width: calc(100vw - 238px);
      }
      100% {
        width: calc(100vw - 56px);
      }
    }
    @keyframes navbarRight-hidden {
      0% {
        width: calc(100vw - 56px);
      }
      100% {
        width: calc(100vw - 238px);
      }
    }
  `;

  return (
    <AppCss>
      <Router>
        <ThemeProvider theme={themes[statusBackground]}>
          <div className="App">
            <Navbar />
            {statusModal && <Modal />}
            <div className={statusMenu ? "main flex" : "main main-active flex"}>
              <div className="main__left">
                <NavbarLeft />
              </div>
              <div
                className={
                  statusClickModal ? "bg__modal bg__modal-active" : "bg__modal "
                }
                onClick={onClickModal}
              ></div>
              <div className="main__right">
                <Switch>
                  <Route path={"/tradeNFT"} component={TradeNFT} />
                  <Route
                    path={"/createFragments"}
                    component={CreateFragments}
                  />
                  <Route path={"/createNFT"} component={CreateNFT} />
                  <Route path={"/profile"} component={Profile} />
                  <Route path={"/pickavatar"} component={PickAvatar} />
                  <Route path={"/dinomoney"} component={DinoMoney} />
                  <Route path={"/nftmarket"} component={NFTMarket} />
                  <Route path={"/timestaking"} component={TimeStaking} />
                  <Route path={"/timeexchange"} component={TimeExchange} />
                  <Route path={"/quests"} component={Quests} />
                  <Route path={"/mint"} component={Mint} />
                  <Route path={"/mynft"} component={MyNFT} />

                  <Route path={"/main"} component={Test} />
                  <Route
                    path={"/nftdetail/:status/:id"}
                    component={NFTDetail}
                  />
                  <Route exact path={"/"}>
                    <TestContract statusBackground={statusBackground} />
                  </Route>
                </Switch>

                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    </AppCss>
  );
}

export default App;
