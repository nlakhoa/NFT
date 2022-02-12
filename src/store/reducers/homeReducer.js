import actionTypes from "../constants/actionTypes";

const initialState = {
  statusModal: false,
  statusBackground: "dark",
  statusMenu: true,
  Socialfi: [
    {
      id: 1,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/gphoto/base/DSGADB.png",
      price: 192,
      coin: "BUSD",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BUSD.png",
      category: "Dravings boads",
    },
    {
      id: 2,
      name: "Shark",
      image: "https://sv.dsgmetaverse.com/gphoto/base/DSGADB.png",
      price: 1,
      coin: "BNB",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BNB.png",
      category: "Dravings boads",
    },

    {
      id: 3,
      name: "Shrimp",
      image: "https://sv.dsgmetaverse.com/gphoto/base/DSGADB.png",
      price: 0.35,
      coin: "BUSD",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BUSD.png",
      category: "Dravings boads",
    },
    {
      id: 4,
      name: "Shrimp",
      image: "https://sv.dsgmetaverse.com/gphoto/gen/D2A10886.png",
      price: 200,
      coin: "BUSD",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BUSD.png",
      category: "Avatar",
    },
    {
      id: 5,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/gphoto/base/DSGADB.png",
      price: 240,
      coin: "USDT",
      imgCoin: "https://dsgmetaverse.com/images/tokens/USDT.png",
      category: "Dravings boads",
    },
    {
      id: 6,
      name: "Shrimp",
      image: "https://sv.dsgmetaverse.com/gphoto/gen/1CC4100C6.png",
      price: 1,
      coin: "BNB",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BNB.png",
      category: "Avatar",
    },
    {
      id: 7,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/gphoto/gen/108921C03.png",
      price: 260,
      coin: "BNB",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BNB.png",
      category: "Avatar",
    },
    {
      id: 8,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/gphoto/gen/10C910C26.png",
      price: "1.111K",
      coin: "BNB",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BNB.png",
      category: "Avatar",
    },
    {
      id: 9,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/gphoto/gen/108419025.png",
      price: "5K",
      coin: "DSG",
      imgCoin: "https://dsgmetaverse.com/images/tokens/DSG.png",
      category: "Avatar",
    },
    {
      id: 10,
      name: "Chicken",
      image: "https://sv.dsgmetaverse.com/cards/AV3_Dino_1-1.jpg",
      price: "5K",
      coin: "DSG",
      imgCoin: "https://dsgmetaverse.com/images/tokens/DSG.png",
      category: "Avatar",
    },

    {
      id: 11,
      name: "Meat",
      image: "https://sv.dsgmetaverse.com/cards/AV3_Warren_3-1.jpg",
      price: "5K",
      coin: "DSG",
      imgCoin: "https://dsgmetaverse.com/images/tokens/DSG.png",
      category: "Avatar",
    },
    {
      id: 12,
      name: "Ham",
      image: "https://sv.dsgmetaverse.com/gphoto/base/DSGADB.png",
      price: "599",
      coin: "USDT",
      imgCoin: "https://dsgmetaverse.com/images/tokens/USDT.png",
      category: "Dravings boads",
    },
  ],
  Defi: [
    {
      id: 1,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/tdsg1-1.jpg",
      price: 50,
      coin: "USDT",
      imgCoin: "https://dsgmetaverse.com/images/tokens/USDT.png",
      category: "Dino",
    },
    {
      id: 2,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/fdsg1-6.jpg",
      price: "6.666K",
      coin: "BUSD",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BUSD.png",
      category: "Meat",
    },

    {
      id: 3,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/fdsg1-1.jpg",
      price: 0.0448,
      coin: "BNB",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BNB.png",
      category: "Meat",
    },
    {
      id: 4,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/fdsg1-1.jpg",
      price: 92.8769,
      coin: "DSG",
      imgCoin: "https://dsgmetaverse.com/images/tokens/DSG.png",
      category: "Meat",
    },
    {
      id: 5,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/box1.jpg",
      price: 60,
      coin: "BUSD",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BUSD.png",
      category: "Mystery Box",
    },
    {
      id: 6,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/tdsg1-1.jpg",
      price: 40,
      coin: "USDT",
      imgCoin: "https://dsgmetaverse.com/images/tokens/USDT.png",
      category: "Dino",
    },
    {
      id: 7,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/fdsg1-1.jpg",
      price: 9,
      coin: "BUSD",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BUSD.png",
      category: "Meat",
    },
    {
      id: 8,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/tdsg1-1.jpg",
      price: 34,
      coin: "BNB",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BNB.png",
      category: "Dino",
    },
    {
      id: 9,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/box1.jpg",
      price: 59,
      coin: "BUSD",
      imgCoin: "https://dsgmetaverse.com/images/tokens/BUSD.png",
      category: "Mystery Box",
    },
    {
      id: 10,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/fdsg1-3.jpg",
      price: 23,
      coin: "USDT",
      imgCoin: "https://dsgmetaverse.com/images/tokens/USDT.png",
      category: "Meat",
    },

    {
      id: 11,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/box2.jpg",
      price: 100,
      coin: "DSG",
      imgCoin: "https://dsgmetaverse.com/images/tokens/DSG.png",
      category: "Mystery Box",
    },
    {
      id: 12,
      name: "Money-hungry Dino",
      image: "https://sv.dsgmetaverse.com/cards/fdsg1-5.jpg",
      price: 298,
      coin: "USDT",
      imgCoin: "https://dsgmetaverse.com/images/tokens/USDT.png",
      category: "Meat",
    },
  ],
  statusClickModal: true,
  statusSetting: true,
};

function homeReducer(state = initialState, action) {
  let copyState = {
    ...state,
  };
  switch (action.type) {
    case actionTypes.MODAL:
      copyState.statusModal = !copyState.statusModal;
      return copyState;

    case actionTypes.CHANGE_BACKGROUND:
      if (copyState.statusBackground === "dark") {
        copyState.statusBackground = "light";
      } else {
        copyState.statusBackground = "dark";
      }
      return copyState;

    case actionTypes.CHANGE_STATUS_MENU:
      copyState.statusMenu = !copyState.statusMenu;
      copyState.statusClickModal = copyState.statusMenu;
      return copyState;

   

    case actionTypes.HANDEL_CLICK_MODAL:
      if (copyState.statusClickModal) {
        copyState.statusSetting = true;
        copyState.statusMenu = false;
        copyState.statusClickModal = false;
      } else {
        copyState.statusClickModal = !copyState.statusClickModal;
        copyState.statusMenu = copyState.statusClickModal;
      }
      return copyState;

    case actionTypes.HANDEL_CLICK_SETTING:
      copyState.statusSetting = !copyState.statusSetting;
      if (!copyState.statusSetting) {
        copyState.statusClickModal = true;
      }
      return copyState;
     
    default:
      return state;
  }
}

export default homeReducer;
