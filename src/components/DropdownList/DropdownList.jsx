import PropTypes from "prop-types";
import React, { useState } from "react";
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
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (event, itemText) => {
    event.stopPropagation();
    // Selecionar o item clicado
    setSelectedItem(itemText);
  };
  

  return (
    <div className={`dropdown-list ${className}`}>
      <HoverState
        className={hoverStatePropertyDefaultClassName}
        property1="default"
        text="Norte"
        onClick={(event) => handleItemClick(event, "Norte")}
      />

      <HoverState
        className={hoverStatePropertyDefaultClassNameOverride}
        property1="default"
        text={hoverStateText}
        onClick={(event) => handleItemClick(event, "Nordeste")}
      />

      <HoverState
        className={hoverStatePropertyClassName}
        property1="default"
        text="Centro-Oeste"
        onClick={(event) => handleItemClick(event, "Centro-Oeste")}

      />
      <HoverState
        className={hoverStatePropertyClassNameOverride}
        property1="default"
        text={hoverStateText1}
        onClick={(event) => handleItemClick(event, "Sudeste")}

      />
      <HoverState
        className="hover-state-instance"
        property1="default"
        text="Sul"
        onClick={(event) => handleItemClick(event, "Sul")}

      />
    </div>
  );
};

DropdownList.propTypes = {
  hoverStateText: PropTypes.string,
  hoverStateText1: PropTypes.string,
};
