/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ArrowRight = ({ className }) => {
  return (
    <svg
      className={`arrow-right ${className}`}
      fill="none"
      height="13"
      viewBox="0 0 13 13"
      width="13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="13"
        id="mask0_174_2276"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
        width="8"
        x="3"
        y="0"
      >
        <path
          className="path"
          clipRule="evenodd"
          d="M3.48922 0.969905C3.1882 1.26279 3.1882 1.73764 3.48922 2.03052L8.08297 6.50002L3.48922 10.9695C3.1882 11.2624 3.1882 11.7373 3.48922 12.0301C3.79025 12.323 4.27831 12.323 4.57933 12.0301L10.2632 6.50002L4.57933 0.969905C4.27831 0.677024 3.79025 0.677024 3.48922 0.969905Z"
          fill="#542BA8"
          fillRule="evenodd"
        />
      </mask>
      <g className="g" mask="url(#mask0_174_2276)">
        <rect className="rect" fill="#8F9098" height="11.9995" width="11.9995" x="0.763428" y="0.499268" />
      </g>
    </svg>
  );
};
