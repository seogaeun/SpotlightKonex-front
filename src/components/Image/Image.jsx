/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Image2 } from "../../icons/Image2";
import "./style.css";

export const Image = ({ className, icon = <Image2 className="image-2" /> }) => {
  return <div className={`image ${className}`}>{icon}</div>;
};
