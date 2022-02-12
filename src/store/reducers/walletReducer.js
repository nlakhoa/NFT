/* eslint-disable no-loop-func */
import actionTypes from "../constants/actionTypes";
import { useMoralis } from "react-moralis";

const initialState = {
  web3: null,
  contract: null,
  account: null,
  balance: 0,
  Body: [
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836550/NFT/ImageRoot/Body/5_frjluv.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836549/NFT/ImageRoot/Body/4_ioynt1.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836549/NFT/ImageRoot/Body/2_scvbwe.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836549/NFT/ImageRoot/Body/3_t3gocb.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836549/NFT/ImageRoot/Body/1_psglri.png",
  ],
  Headdress: [
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/12_x8cz7t.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/10_mioewo.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/11_sqjyi4.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/9_fbb0v1.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/7_w4yfrx.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836664/NFT/ImageRoot/Headdress/8_wxrrkf.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/1_owvn0o.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/4_rlpm71.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/3_r0d42k.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/6_yvtfac.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/5_na2opr.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836663/NFT/ImageRoot/Headdress/2_edy7st.png",
  ],
  Eyes: [
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Yellow_phfd9m.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Purple_flk0rv.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Red_wcmzdv.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Green_jit30z.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Pink_rhb9yb.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836639/NFT/ImageRoot/Eyes/Cyan_awg8ka.png",
  ],
  Mouth: [
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836692/NFT/ImageRoot/Mouth/7_jpwecb.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836692/NFT/ImageRoot/Mouth/8_c3enq8.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/1_ggyjxq.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/4_fsmd3s.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/5_ixe4wz.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/3_tbm1eq.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/2_zqcxuo.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836691/NFT/ImageRoot/Mouth/6_oxmotu.png",
  ],
  Clothes: [
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836583/NFT/ImageRoot/Clothes/11_srqwtn.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836583/NFT/ImageRoot/Clothes/6_neakuy.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/10_rwgzxu.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/9_h16egu.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/7_rrhui7.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/8_nqea3e.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/5_hztdfv.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836582/NFT/ImageRoot/Clothes/1_rzpqen.png",
  ],
  Stuff: [
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836714/NFT/ImageRoot/Stuff/6_xoxeu5.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836713/NFT/ImageRoot/Stuff/5_q2s3ud.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836713/NFT/ImageRoot/Stuff/4_qkfl4s.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836713/NFT/ImageRoot/Stuff/3_txzl0l.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836713/NFT/ImageRoot/Stuff/2_mt8kp0.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836713/NFT/ImageRoot/Stuff/1_cl8y4e.png",
  ],
  Background: [
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836814/NFT/ImageRoot/Background/0default_g9uc1p.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836488/NFT/ImageRoot/Background/Blue_j82f9n.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836487/NFT/ImageRoot/Background/Red_ojuaq1.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836487/NFT/ImageRoot/Background/Black_pbezbp.png",
    "https://res.cloudinary.com/nfttokenasa/image/upload/v1642836487/NFT/ImageRoot/Background/Green_ale8c0.png",
  ],
  defiAccount: [],
  socialfiAccount: [],
  arrMarket: [],
  metaMaskConnect: false,
  connectWalletConnect: false,
};

function walletReducer(state = initialState, action) {
 
  let copyState = {
    ...state,
  };
  switch (action.type) {
    case actionTypes.CONNECT_WALLET:
      copyState.web3 = action.web3;
      copyState.contract = action.contract;
      return copyState;

    case actionTypes.CONNECT_METAMASK:
      copyState.account = action.account;
      copyState.balance = action.balances;
      copyState.metaMaskConnect = true;
      copyState.connectWalletConnect = false;
      return copyState;

    case actionTypes.RE_RENDER_METAMASK:
      copyState.account = action.account;
      return copyState;

    case actionTypes.CONNECT_TO_CONNECT_WALLET:
      copyState.account = action.account;
      copyState.metaMaskConnect = false;
      copyState.connectWalletConnect = true;
      return copyState;

    case actionTypes.DISCONNECT_METAMASK:
      copyState.account = 0;
      copyState.balance = 0;
      copyState.metaMaskConnect = false;
      return copyState;

    case actionTypes.DISCONNECT_WALLET:
      copyState.account = null;
      copyState.balance = 0;
      copyState.connectWalletConnect = false;
      return copyState;

    case actionTypes.GET_SOCIALFI:
      if (copyState.account) {
        copyState.socialfiAccount = action.list;
      } else {
        console.log("account rong");
      }
      return copyState;

    case actionTypes.GET_LIST_MARKET:
      if (copyState.account) {
        copyState.arrMarket = action.market
      } else {
        console.log("account rong");
      }
      return copyState;

    default:
      return state;
  }
}

export default walletReducer;

/*

*/
