/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Avatar = ({ className }) => {
  return (
    <svg
      className={`avatar ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 41 40"
      width="41"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_174_2505)">
        <rect className="rect" fill="#7635FD" height="40" rx="16" width="40" x="0.763184" />
        <path
          className="path"
          d="M8.76318 34C8.76318 29.5817 12.3449 26 16.7632 26H24.7632C29.1815 26 32.7632 29.5817 32.7632 34V42C32.7632 46.4183 29.1815 50 24.7632 50H16.7632C12.3449 50 8.76318 46.4183 8.76318 42V34Z"
          fill="#6FBAFF"
        />
        <circle className="circle" cx="21.125" cy="16" fill="#6FBAFF" r="8" />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_174_2505">
          <rect className="rect" fill="white" height="40" rx="16" width="40" x="0.763184" />
        </clipPath>
      </defs>
    </svg>
  );
};
