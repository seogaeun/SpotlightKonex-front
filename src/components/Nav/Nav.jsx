import React from 'react';
import './style.css';

import { FaAngleLeft } from "react-icons/fa";

export const Nav = ({ title, onLeftIconClick, leftIconLink }) => {
    return (
      <div className="navbar">
        <span className="icon" onClick={() => onLeftIconClick(leftIconLink)}>
          <FaAngleLeft />
        </span>
        <span className="title">{title}</span>
      </div>
    );
  };
