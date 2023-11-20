import React from "react";
import "./style.css";

export const LinkButton = ({ to, buttonText, isLinked }) => {
  const handleClick = () => {
    if (isLinked === true) {
      window.open(to, "_blank");
    } else {
    }
  };

  return (
    <button className="LinkBtn" onClick={handleClick}>
      {buttonText}
    </button>
  );
};
