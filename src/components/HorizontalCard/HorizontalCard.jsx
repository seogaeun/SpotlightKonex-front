/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowRight } from "../../icons/ArrowRight";
import { Avatar } from "../../icons/Avatar";
import { HeartFilled } from "../../icons/HeartFilled";
import { Image5 } from "../../icons/Image5";
import { ButtonSecondary } from "../ButtonSecondary";
import { Image } from "../Image";
import "./style.css";

export const HorizontalCard = ({
  subtitle = "Subtitle",
  title = "Title",
  showTitle = true,
  showSubtitle = true,
  visuals,
  control,
  className,
  contentClassName,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div className={`horizontal-card visuals-${visuals} ${className}`}>
      {(visuals === "image" || (control === "none" && visuals === "icon")) && (
        <>
          <div className="frame">
            {visuals === "image" && (
              <Image
                className={`${control === "button" ? "class" : "class-2"}`}
                icon={
                  control === "icon" ? (
                    <Image5 className="instance-node" />
                  ) : control === "none" ? (
                    <Image5 className="instance-node" />
                  ) : (
                    <Image5 className="image-4" />
                  )
                }
              />
            )}

            {visuals === "icon" && <HeartFilled className="heart-filled" />}
          </div>
          <div className="div">
            {visuals === "image" && (
              <div className="content">
                {showTitle && <div className="text-wrapper">{title}</div>}

                {showSubtitle && <div className="subtitle">{subtitle}</div>}
              </div>
            )}

            {control === "button" && <ButtonSecondary className="button-secondary-instance" text="Button" />}

            {control === "icon" && <ArrowRight className="arrow-right" />}

            {visuals === "icon" && (
              <>
                <>{showTitle && <div className="text-wrapper">{title}</div>}</>
                <>{showSubtitle && <div className="subtitle">{subtitle}</div>}</>
              </>
            )}
          </div>
        </>
      )}

      {visuals === "avatar" && <Avatar className="avatar-3" />}

      {visuals === "icon" && ["button", "icon"].includes(control) && (
        <div className="heart-filled-wrapper">
          {control === "button" && <HeartFilled className="heart-filled" />}

          {control === "icon" && <HeartFilled className="heart-filled" />}
        </div>
      )}

      {((control === "button" && visuals === "icon") ||
        (control === "button" && visuals === "none") ||
        (control === "icon" && visuals === "icon") ||
        (control === "icon" && visuals === "none") ||
        visuals === "avatar") && (
        <div className="content-2">
          {showTitle && <div className="text-wrapper">{title}</div>}

          {showSubtitle && <div className="subtitle">{subtitle}</div>}
        </div>
      )}

      {control === "button" && ["avatar", "icon", "none"].includes(visuals) && (
        <ButtonSecondary className="button-secondary-instance" text="Button" />
      )}

      {control === "icon" && visuals === "icon" && <ArrowRight className="arrow-right" />}

      {visuals === "none" && control === "icon" && <ArrowRight className="arrow-right" />}

      {visuals === "none" && control === "none" && (
        <div className={`content-2 ${contentClassName}`}>
          {showTitle && <div className={`text-wrapper ${divClassName}`}>{title}</div>}

          {showSubtitle && <div className={`subtitle ${divClassNameOverride}`}>{subtitle}</div>}
        </div>
      )}

      {control === "icon" && visuals === "avatar" && <ArrowRight className="arrow-right" />}
    </div>
  );
};

HorizontalCard.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  showTitle: PropTypes.bool,
  showSubtitle: PropTypes.bool,
  visuals: PropTypes.oneOf(["avatar", "image", "icon", "none"]),
  control: PropTypes.oneOf(["none", "icon", "button"]),
};
