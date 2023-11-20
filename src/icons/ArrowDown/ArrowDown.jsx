/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ArrowDown = ({ className }) => {
  return (
    <svg
      className={`arrow-down ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 13 12"
      width="13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="8"
        id="mask0_153_1808"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
        width="12"
        x="1"
        y="2"
      >
        <path
          className="path"
          clipRule="evenodd"
          d="M12.2935 2.72587C12.0006 2.42484 11.5258 2.42484 11.2329 2.72587L6.76341 7.3197L2.29391 2.72587C2.00103 2.42484 1.52618 2.42484 1.2333 2.72587C0.940414 3.0269 0.940414 3.51497 1.2333 3.81599L6.76341 9.49994L12.2935 3.81599C12.5864 3.51497 12.5864 3.0269 12.2935 2.72587Z"
          fill="#542BA8"
          fillRule="evenodd"
        />
      </mask>
      <g className="g" mask="url(#mask0_153_1808)">
        <rect className="rect" fill="#8F9098" height="11.9997" width="11.9995" x="0.763184" y="-0.000793457" />
      </g>
    </svg>
  );
};
