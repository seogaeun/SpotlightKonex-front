// InfoToggle.js

import React, { useState } from "react";
import "./style.css";

export const InfoToggle = ({ title, content, isOpen }) => {
  const [isToggled, setIsToggled] = useState(isOpen || false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="infoToggle">
      <button className="toggleBtn" onClick={handleClick}>
        <div className="toggleTitle">{title}</div>
        <div className="toggleIcon">{isToggled ? "▼" : "▲"}</div>
      </button>
      {isToggled && (
        <div className="toggle-content">
          <div className="toggleOpenContent">{content}</div>
        </div>
      )}
    </div>
  );
};
