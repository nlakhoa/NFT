import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import reduxStore, { persistor } from "./redux";
import { Provider } from "react-redux";
import "./i18n";
import { MoralisProvider } from 'react-moralis';


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider 
      appId='QmdzQ4SWv8JHgTrSkBUtw1lLUTLdMhoOZ6KmRot6' 
      serverUrl='https://jrkmuko4jekl.usemoralis.com:2053/server'
    >
    <Provider store={reduxStore}>
      <Suspense
        fallback={
          <div>
            <img
              src="https://i.giphy.com/media/Ogak8XuKHLs6PYcqlp/giphy.gif"
              alt=""
              style={{ height: "100vh", width: "100vw" }}
            />
          </div>
        }
      >
        <Router>
          <App persistor={persistor} />
        </Router>
      </Suspense>
    </Provider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
