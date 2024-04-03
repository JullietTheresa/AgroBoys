/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const PlaceholderText = ({ className, divClassName }) => {
  return (
    <div className={`placeholder-text ${className}`}>
      <div className={`div ${divClassName}`}>Selecione sua região</div>
    </div>
  );
};
