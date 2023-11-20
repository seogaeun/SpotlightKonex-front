import PropTypes from "prop-types";
import React from "react";
import { RightButton } from "../../icons/RightButton";
import "./style.css";

export const ListTitle = ({ title = "Title", rightText = "Edit", rightControl, className, divClassName }) => {
  return (
    <div className={`list-title ${className}`}>
      {rightControl === "none" && <div className={`title ${divClassName}`}>{title}</div>}

      {["icon", "text"].includes(rightControl) && <div className="title">{title}</div>}

      {rightControl === "text" && <button className="right-button">{rightText}</button>}

      {rightControl === "icon" && <RightButton className="right-button-instance" />}
    </div>
  );
};

ListTitle.propTypes = {
  title: PropTypes.string,
  rightText: PropTypes.string,
  rightControl: PropTypes.oneOf(["none", "icon", "text"]),
};
