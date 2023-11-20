import React from "react";
import './style.css';

export const LeftButton4 = ({ className, onClick }) => {
  return (
    <button className={`left-button-4 ${className}`} onClick={onClick}>
      <svg
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          className="mask"
          height="20"
          id="mask0_1065_1467"
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'alpha' }}
          width="12"
          x="4"
          y="0"
        >
          <path
            className="path"
            clipRule="evenodd"
            d="M15.4569 0.783094C15.9586 1.27123 15.9586 2.06266 15.4569 2.55079L7.80067 9.99995L15.4569 17.4491C15.9586 17.9372 15.9586 18.7287 15.4569 19.2168C14.9552 19.7049 14.1418 19.7049 13.6401 19.2168L4.16699 9.99995L13.6401 0.783094C14.1418 0.294958 14.9552 0.294958 15.4569 0.783094Z"
            fill="#542BA8"
            fillRule="evenodd"
          />
        </mask>
        <g className="g" mask="url(#mask0_1065_1467)">
          <rect className="rect" fill="#542BA8" height="19.9992" width="19.9992" x="0.000488281" y="-0.0012207" />
        </g>
      </svg>
    </button>
  );
};
