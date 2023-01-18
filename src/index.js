import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import { router } from "router";

import App from "./App";
// import store from "./store/store.js";
import "./styles/index.scss";
import { setupStore } from "storeBeta/store";

const  store = setupStore();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter> */}

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
