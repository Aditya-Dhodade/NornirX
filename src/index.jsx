import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import DesktopTwoPage from "pages/DesktopTwo";
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <DesktopTwoPage /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
