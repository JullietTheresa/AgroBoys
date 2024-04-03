/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HoverState } from "../HoverState";
import "./style.css";

export const DropdownList = ({
  className,
  hoverStatePropertyDefaultClassName,
  hoverStatePropertyDefaultClassNameOverride,
  hoverStatePropertyClassName,
  hoverStatePropertyClassNameOverride,
  hoverStateText = "Nordeste",
  hoverStateText1 = "Sudeste",
}) => {
  return (
    <div className={`dropdown-list ${className}`}>
      <HoverState className={hoverStatePropertyDefaultClassName} property1="default" text="Norte" />
      <HoverState className={hoverStatePropertyDefaultClassNameOverride} property1="default" text={hoverStateText} />
      <HoverState className={hoverStatePropertyClassName} property1="default" text="Centro-Oeste" />
      <HoverState className={hoverStatePropertyClassNameOverride} property1="default" text={hoverStateText1} />
      <HoverState className="hover-state-instance" property1="default" text="Sul" />
    </div>
  );
};

DropdownList.propTypes = {
  hoverStateText: PropTypes.string,
  hoverStateText1: PropTypes.string,
};
