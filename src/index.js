import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

window.onbeforeunload = function (e) {
  const state = store.getState();
  localStorage.setItem("local-storage-key", JSON.stringify(state.contactBookReducer));
};

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
