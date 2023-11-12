/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const RightButton = ({ className }) => {
  return (
    <svg
      className={`right-button ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 17 17"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="17"
        id="mask0_137_13045"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'alpha' }}
        width="16"
        x="1"
        y="0"
      >
        <path
          className="path"
          clipRule="evenodd"
          d="M7.18996 0.833313C3.82707 0.833313 1.09619 3.53771 1.09619 6.87954C1.09619 10.2214 3.82707 12.9258 7.18996 12.9258C8.44372 12.9258 9.60999 12.5497 10.5793 11.905L14.5547 15.8476C14.9837 16.273 15.678 16.273 16.1069 15.8476C16.5374 15.4207 16.5374 14.7274 16.1069 14.3005L12.1569 10.3831C12.8662 9.39485 13.2837 8.18529 13.2837 6.87954C13.2837 3.53771 10.5528 0.833313 7.18996 0.833313ZM3.29406 6.87954C3.29406 4.74976 5.03571 3.01853 7.18996 3.01853C9.34421 3.01853 11.0859 4.74976 11.0859 6.87954C11.0859 9.00932 9.34421 10.7405 7.18996 10.7405C5.03571 10.7405 3.29406 9.00932 3.29406 6.87954Z"
          fill="#542BA8"
          fillRule="evenodd"
        />
      </mask>
      <g className="g" mask="url(#mask0_137_13045)">
        <rect className="rect" fill="#8F9098" height="16" width="16.0003" x="0.762939" y="0.5" />
      </g>
    </svg>
  );
};
