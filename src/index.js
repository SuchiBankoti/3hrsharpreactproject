import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AllDataContext } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AllDataContext>
    <App />
  </AllDataContext>
);
