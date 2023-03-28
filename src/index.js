/** @format */

import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./layout/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import ReactDOM from "react-dom";


const Index = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};


if (document.getElementById("root")) {
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Index />, rootElement);
}

reportWebVitals();
