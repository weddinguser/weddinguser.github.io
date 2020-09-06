import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Main />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
