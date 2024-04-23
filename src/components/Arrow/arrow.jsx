import React from "react";
import "./style.css";

export const CircleArrowLeft = ({ className }) => {
  return (
    <div className={`circle-arrow-left ${className}`}>
      <div className="overlap-group">
        <img className="vector" alt="Vector" src="https://c.animaapp.com/nQh2W4E3/img/vector-1.svg" />
        <img className="img" alt="Vector" src="https://c.animaapp.com/nQh2W4E3/img/vector-2-1.svg" />
      </div>
    </div>
  );
};

export default CircleArrowLeft