// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import thunk from "redux-thunk";
// import homeReducer from "./reducers/homeReducer";
// import walletReducer from "./reducers/walletReducer";
// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['home']

// }
// const reducer  = combineReducers({
//   home: homeReducer,
//   wallet: walletReducer
// });
// // const persistedReducer = persistReducer(persistConfig, reducer)
// const rootReducer = combineReducers({
//   app: persistReducer(persistConfig, reducer)
// });
// export const store = createStore(rootReducer, applyMiddleware(thunk));
// export const persistor = persistStore(store);

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import homeReducer from "./homeReducer";
import walletReducer from "./walletReducer";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistCommonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const homePersistConfig = {
  ...persistCommonConfig,
  key: "home",
  blacklist: ["Socialfi", "Defi"],
};
const walletPersistConfig = {
  ...persistCommonConfig,
  key: "wallet",
  blacklist: ["Body", "Headdress","Eyes","Mouth","Clothes","Stuff","Background","socialfiAccount"],

};


// eslint-disable-next-line import/no-anonymous-default-export
export default (history) => combineReducers(
  {
    router: connectRouter(history),
    home: persistReducer(homePersistConfig, homeReducer),
    wallet: persistReducer(walletPersistConfig, walletReducer),
  
})

