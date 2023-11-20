

import PropTypes from "prop-types";
import React from "react";
import { Avatar7 } from "../../icons/Avatar7";
import { LeftButton } from "../../icons/LeftButton";
import { LeftButton1 } from "../../icons/LeftButton1";
import { LeftButton2 } from "../../icons/LeftButton2";
import { LeftButton3 } from "../../icons/LeftButton3";
import { RightButton4 } from "../../icons/RightButton4/RightButton4";
import { RightButton5 } from "../../icons/RightButton5";
import { RightButton6 } from "../../icons/RightButton6";
import "./style.css";

const handleClick = () => {
  console.log("LeftButton3 clicked!");
};


export const NavBar = ({
  leftText = "Cancel",
  rightText = "Edit",
  pageTitle = "Page Title",
  leftControl,
  rightControl,
  className,
  rightButtonClassName,
  icon = <LeftButton3 onClick={handleClick} />,
}) => {
  return (
    <div className={`nav-bar ${className}`}>
      {rightControl === "icon" && leftControl === "icon" && <RightButton4 className="right-button" />}

      {((leftControl === "icon" && rightControl === "avatar") ||
        (leftControl === "icon" && rightControl === "icon") ||
        (leftControl === "icon" && rightControl === "text") ||
        (leftControl === "none" && rightControl === "none") ||
        (leftControl === "text" && rightControl === "avatar") ||
        (leftControl === "text" && rightControl === "text")) && (
        <div className={`page-title right-control-${rightControl} left-control-${leftControl}`}>
          {(leftControl === "text" ||
            rightControl === "icon" ||
            rightControl === "none" ||
            (leftControl === "icon" && rightControl === "avatar")) && <>{pageTitle}</>}

          {rightControl === "text" && leftControl === "icon" && <>{rightText}</>}
        </div>
      )}

      {rightControl === "icon" && leftControl === "icon" && <LeftButton1 className="left-button" />}

      {rightControl === "avatar" && leftControl === "icon" && (
        <>
          <LeftButton2 className="left-button" />
          <Avatar7 className="avatar-7" />
        </>
      )}

      {((leftControl === "icon" && rightControl === "none") ||
        (leftControl === "none" && rightControl === "avatar") ||
        (leftControl === "none" && rightControl === "text") ||
        (leftControl === "text" && rightControl === "none")) && (
        <div className={`div right-control-0-${rightControl} ${rightButtonClassName}`}>
          {["avatar", "none"].includes(rightControl) && <>{pageTitle}</>}

          {rightControl === "text" && <>{rightText}</>}
        </div>
      )}

      {["icon", "none"].includes(leftControl) &&
        (leftControl === "icon" || rightControl === "avatar") &&
        (leftControl === "none" || rightControl === "none") &&
        ["none", "avatar"].includes(rightControl) && <>{icon}</>}

      {leftControl === "text" && ["text", "avatar"].includes(rightControl) && (
        <button className="text-wrapper">{leftText}</button>
      )}

      {(rightControl === "text" || (leftControl === "text" && rightControl === "none")) && (
        <div className={`page-title-2 left-control-0-${leftControl} right-control-1-${rightControl}`}>
          {["icon", "none"].includes(leftControl) && <>{pageTitle}</>}

          {rightControl === "none" && <>{leftText}</>}

          {rightControl === "text" && leftControl === "text" && <>{rightText}</>}
        </div>
      )}

      {rightControl === "icon" && leftControl === "text" && (
        <>
          <RightButton5 className="right-button" />
          <div className="page-title-3">{pageTitle}</div>
          <button className="text-wrapper">{leftText}</button>
        </>
      )}

      {rightControl === "avatar" && leftControl === "text" && <Avatar7 className="avatar-7" />}

      {leftControl === "none" && rightControl === "icon" && (
        <>
          <RightButton6 className="right-button" />
          <div className="page-title-3">{pageTitle}</div>
        </>
      )}

      {rightControl === "text" && leftControl === "icon" && <LeftButton className="left-button" />}
    </div>
  );
};

NavBar.propTypes = {
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  pageTitle: PropTypes.string,
  leftControl: PropTypes.oneOf(["text", "icon", "none"]),
  rightControl: PropTypes.oneOf(["avatar", "text", "icon", "none"]),
};
