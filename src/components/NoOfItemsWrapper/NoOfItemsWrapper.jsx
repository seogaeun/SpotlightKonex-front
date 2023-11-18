/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ContentSwitcher } from "../ContentSwitcher";
import "./style.css";

export const NoOfItemsWrapper = ({
  noOfItems,
  className,
  contentSwitcherDivClassName,
  contentSwitcherSelected = true,
  contentSwitcherTitle = "Section 1",
  contentSwitcherSelectedTrueClassName,
  divider = "https://cdn.animaapp.com/projects/6524a15db6c5edc3e26fb475/releases/6524a452226c039374e07ea9/img/divider.svg",
  contentSwitcherDivClassNameOverride,
  contentSwitcherTitle1 = "Section 2",
  contentSwitcherSelectedTrueClassNameOverride,
  img = "https://cdn.animaapp.com/projects/6524a15db6c5edc3e26fb475/releases/6524a452226c039374e07ea9/img/divider.svg",
  contentSwitcherDivClassName1,
  contentSwitcherSelected1 = false,
  contentSwitcherTitle2 = "Section 3",
  contentSwitcherSelectedFalseClassName,
}) => {

  return (
    <div className={`no-of-items-wrapper ${className}`}>
      {["four", "two"].includes(noOfItems) && (
        <ContentSwitcher
          className={`${noOfItems === "four" ? "class-3" : "content-switcher-section"}`}
          selected
          title="Section 1"
        />
      )}

      {noOfItems === "three" && (
        <ContentSwitcher
          className={contentSwitcherSelectedTrueClassName}
          divClassName={contentSwitcherDivClassName}
          selected={contentSwitcherSelected}
          title={contentSwitcherTitle}
        />
      )}

      <img
        className={`divider ${noOfItems}`}
        alt="Divider"
        src={
          noOfItems === "three"
            ? divider
            : "https://cdn.animaapp.com/projects/6524a15db6c5edc3e26fb475/releases/6524a452226c039374e07ea9/img/divider.svg"
        }
      />
      {noOfItems === "three" && (
        <>
          <ContentSwitcher
            className={contentSwitcherSelectedTrueClassNameOverride}
            divClassName={contentSwitcherDivClassNameOverride}
            selected={false}
            title={contentSwitcherTitle1}
          />
          <img className="img" alt="Divider" src={img} />
          <ContentSwitcher
            className={contentSwitcherSelectedFalseClassName}
            divClassName={contentSwitcherDivClassName1}
            selected={contentSwitcherSelected1}
            title={contentSwitcherTitle2}
          />
        </>
      )}

      {["four", "two"].includes(noOfItems) && (
        <ContentSwitcher
          className={`${noOfItems === "two" ? "content-switcher-instance" : "class-4"}`}
          selected={false}
          title="Section 2"
        />
      )}

      {noOfItems === "four" && (
        <>
          <img
            className="divider-2"
            alt="Divider"
            src="https://cdn.animaapp.com/projects/6524a15db6c5edc3e26fb475/releases/6524a452226c039374e07ea9/img/divider.svg"
          />
          <ContentSwitcher className="content-switcher-section" selected={false} title="Section 3" />
          <img
            className="img"
            alt="Divider"
            src="https://cdn.animaapp.com/projects/6524a15db6c5edc3e26fb475/releases/6524a452226c039374e07ea9/img/divider.svg"
          />
          <ContentSwitcher className="content-switcher-instance" selected={false} title="Section 4" />
        </>
      )}
    </div>
  );
};

NoOfItemsWrapper.propTypes = {
  noOfItems: PropTypes.oneOf(["two", "three", "four"]),
  contentSwitcherSelected: PropTypes.bool,
  contentSwitcherTitle: PropTypes.string,
  divider: PropTypes.string,
  contentSwitcherTitle1: PropTypes.string,
  img: PropTypes.string,
  contentSwitcherSelected1: PropTypes.bool,
  contentSwitcherTitle2: PropTypes.string,
};
