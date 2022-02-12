import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import actionTypes from "../constants/actionTypes";
import { ethers } from "ethers";


//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  rpc: {
    5777: "HTTP://127.0.0.1:7545",
  },
});



export const connectWeb3 = (web3, contract) => (dispatch) => {
  
    try {
      dispatch({ type: actionTypes.CONNECT_WALLET, web3, contract });
    } catch {
      console.log("error");
    }
  };
  
  export const connectMetaMask =  (account,value) => async (dispatch) => {
    try {
      // if (window.ethereum && window.ethereum.isMetaMask) {
      //  await window.ethereum
      //     .request({ method: "eth_requestAccounts" })
      //     .then((result) => {
      //       account = result[0];
      //     })
      //     .catch((error) => {
      //     });
      //    await window.ethereum
      //     .request({ method: "eth_getBalance", params: [account, "latest"] })
      //     .then((value) => {
      //       balance = ethers.utils.formatEther(value);
      //     })
      //     .catch((error) => {
      //       console.log(error)
      //     });
      // } else {
      //   console.log("Need to install MetaMask");
      // } 
      let balances = parseFloat(value / Math.pow(10,18)).toFixed(4);
      dispatch({ type: actionTypes.CONNECT_METAMASK,account,balances});
  
    } catch {
      console.log("error");
    }
  };
  
  export const reRenderMetamask = (account) => (dispatch) => {
    try {
      dispatch({ type: actionTypes.RE_RENDER_METAMASK, account });
    } catch {
      console.log("error");
    }
  };
  
  export const connectWallet =  () => async (dispatch) => {
    try{
      await provider.enable()
      const web3 = new Web3(provider)
      const accounts = await web3.eth.getAccounts();
      dispatch({ type: actionTypes.CONNECT_TO_CONNECT_WALLET, account :accounts[0]  });
    }
    catch{
      console.log("error");
    }
  }
  
  export const logoutMetaMask = () => async (dispatch) => {
    try{
      dispatch({ type: actionTypes.DISCONNECT_METAMASK });
    }
    catch{
      console.log("error");
    }
  }
  export const logoutConnectWallet = () => async (dispatch) => {
    try{
      await provider.disconnect()
      dispatch({ type: actionTypes.DISCONNECT_WALLET });
    }
    catch{
      console.log("error");
    }
  }
  
  export const getSocialfi = (list) => async (dispatch) => {
    try{
      dispatch({ type: actionTypes.GET_SOCIALFI,list});
    }
    catch{
      console.log("error");
    }
  }
  
  export const getListMarket = (market) => async (dispatch) => {
    try{
      dispatch({ type: actionTypes.GET_LIST_MARKET,market});
    }
    catch{
      console.log("error");
    }
  }
  
  
   