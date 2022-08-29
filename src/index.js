import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import CryptoContext from "./CryptoContext";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDom.render(
 
    <CryptoContext>
      <App />
    </CryptoContext>
  ,
  document.getElementById("root")
);
