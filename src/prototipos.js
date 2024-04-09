import React from "react";
import { DropdownList } from "../../components/DropdownList";
import { HoverState } from "../../components/HoverState";
import { ListboxComponent } from "../../components/ListboxComponent";
import { ListboxTitle } from "../../components/ListboxTitle";
import { PlaceholderText } from "../../components/PlaceholderText";
import "./styleprototipos.css";

export const Prototipos = () => {
  return (
    <div className="prototipos">
      <div className="div-2">
        <div className="pagina-principal">
          <div className="overlap">
            <ListboxTitle className="listbox-title-instance" />
            <PlaceholderText className="placeholder-text-instance" />
            <DropdownList className="dropdown-list-instance" />
            <div className="rectangle" />
          </div>
          <div className="overlap-2">
            <div className="hover-state-2">
              <HoverState className="property-default" property1="default" text="Item" />
              <HoverState className="property" property1="variant-2" text="Item" />
            </div>
            <div className="listbox-component-2">
              <div className="property-default-2">
                <ListboxTitle className="design-component-instance-node" />
                <div className="overlap-group-2">
                  <div className="listbox-main-2">
                    <img className="img" alt="Chevron" src="https://c.animaapp.com/fN0aMwpW/img/chevron-13.svg" />
                    <PlaceholderText className="placeholder-text-2" />
                  </div>
                  <div className="clip-list-2" />
                </div>
              </div>
              <ListboxComponent className="property-variant" property1="variant-2" />
              <ListboxComponent className="listbox-component-instance" property1="variant-4" />
              <ListboxComponent className="property-2" property1="variant-8" />
              <ListboxComponent className="property-3" property1="variant-5" />
              <ListboxComponent className="property-4" property1="variant-6" />
              <ListboxComponent className="property-5" property1="variant-7" />
            </div>
          </div>
        </div>
        <div className="text-wrapper-2">DropDown</div>
      </div>
    </div>
  );
};
export default Prototipos