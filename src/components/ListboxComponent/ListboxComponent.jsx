/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { DropdownList } from "../DropdownList";
import { ListboxTitle } from "../ListboxTitle";
import { PlaceholderText } from "../PlaceholderText";
import "./style.css";

export const ListboxComponent = ({ property1, className, chevronClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`listbox-component property-1-${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <ListboxTitle className={`${state.property1 === "variant-2" ? "class" : "class-2"}`} />
      <div className="overlap-group">
        <div className="listbox-main">
          <img
            className={`chevron ${["default", "variant-2"].includes(state.property1) ? chevronClassName : undefined}`}
            alt="Chevron"
            src={
              state.property1 === "variant-2"
                ? "https://c.animaapp.com/ZUyH8RTL/img/chevron-1.svg"
                : "https://c.animaapp.com/ZUyH8RTL/img/chevron-7.svg"
            }
          />
          <PlaceholderText
            className={`${state.property1 === "variant-2" ? "class-4" : "class-5"}`}
            divClassName={`${
              ["variant-4", "variant-5", "variant-6", "variant-7", "variant-8"].includes(state.property1) && "class-3"
            }`}
          />
        </div>
        <div className="clip-list">
          <DropdownList
            className={`${
              state.property1 === "default"
                ? "class-6"
                : state.property1 === "variant-2"
                ? "class-7"
                : state.property1 === "variant-5"
                ? "class-8"
                : ["variant-6", "variant-7"].includes(state.property1)
                ? "class-9"
                : "class-10"
            }`}
            hoverStatePropertyClassName={`${state.property1 === "default" ? "class-15" : "class-12"}`}
            hoverStatePropertyClassNameOverride={`${
              ["variant-2", "variant-4", "variant-5", "variant-6", "variant-7", "variant-8"].includes(
                state.property1
              ) && "class-12"
            }`}
            hoverStatePropertyDefaultClassName={`${state.property1 === "default" ? "class-11" : "class-12"}`}
            hoverStatePropertyDefaultClassNameOverride={`${
              state.property1 === "default" ? "class-13" : state.property1 === "variant-2" ? "class-14" : "class-12"
            }`}
            hoverStateText={
              state.property1 === "variant-8"
                ? "Norte"
                : ["variant-5", "variant-6", "variant-7"].includes(state.property1)
                ? "Nordeste"
                : undefined
            }
            hoverStateText1={state.property1 === "variant-7" ? "Sul" : undefined}
          />
        </div>
      </div>
      {["variant-4", "variant-5", "variant-6", "variant-7", "variant-8"].includes(state.property1) && (
        <img
          className="OBJECTS"
          alt="Objects"
          src={
            state.property1 === "variant-8"
              ? "https://c.animaapp.com/ZUyH8RTL/img/objects-1@2x.png"
              : state.property1 === "variant-5"
              ? "https://c.animaapp.com/ZUyH8RTL/img/objects-2@2x.png"
              : state.property1 === "variant-6"
              ? "https://c.animaapp.com/ZUyH8RTL/img/objects-3@2x.png"
              : state.property1 === "variant-7"
              ? "https://c.animaapp.com/ZUyH8RTL/img/objects-4@2x.png"
              : "https://c.animaapp.com/ZUyH8RTL/img/objects@2x.png"
          }
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "variant-2",
      };
  }

  return state;
}

ListboxComponent.propTypes = {
  property1: PropTypes.oneOf(["default", "variant-5", "variant-2", "variant-4", "variant-8", "variant-7", "variant-6"]),
};
