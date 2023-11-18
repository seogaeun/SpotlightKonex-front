import React from "react";

export const ArrowDown1 = ({ className }) => {
  return (
    <svg
      className={`arrow-down-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="15"
        id="mask0_147_1681"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}        width="24"
        x="1"
        y="4"
      >
        <path
          className="path"
          clipRule="evenodd"
          d="M23.6993 5.45073C23.1135 4.84866 22.1638 4.84866 21.578 5.45073L12.6387 14.6386L3.69933 5.45073C3.11355 4.84866 2.1638 4.84866 1.57801 5.45073C0.992226 6.0528 0.992226 7.02895 1.57801 7.63102L12.6387 18.9992L23.6993 7.63102C24.2851 7.02895 24.2851 6.0528 23.6993 5.45073Z"
          fill="#542BA8"
          fillRule="evenodd"
        />
      </mask>
      <g className="g" mask="url(#mask0_147_1681)">
        <rect className="rect" fill="#542BA8" height="24" width="24" x="0.638672" y="-0.00274658" />
      </g>
    </svg>
  );
};
