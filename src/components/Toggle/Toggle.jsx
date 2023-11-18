import React, { useState } from "react";
import "./style.css";

export const Toggle = ({ tabNames, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(tabNames[0]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    onTabChange(tab);
  };

  return (
    <div>
      <div className="tab-switch">
        {tabNames.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab)}
            className={selectedTab === tab ? "active" : "tab-btn"}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabNames.map((tab, index) => (
          <div key={index} className="tab-subtitle">
            {selectedTab === tab && <p>{/*내용*/}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
