import React from "react";
import "./styles.css";

export const HeartFilled1 = ({ className, onClick, count }) => {
  const displayCount = count > 999 ? "999+" : count;

  return (
    <button className={`heart-filled-1-button ${className}`} onClick={onClick}>
      <div className="heart-container">
        <div className="count">{displayCount}</div>
        <svg
          className="heart-filled-1"
          fill="none"
          height="30"
          viewBox="0 0 31 30"
          width="31"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            className="mask"
            height="28"
            id="mask0_865_3249"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="31"
            x="0"
            y="1"
          >
            <path
              className="path"
              d="M8.9375 1.73425C4.46571 1.73425 0.8125 5.32742 0.8125 9.79363C0.8125 11.4684 1.14969 14.1898 3.00858 17.4147C4.86234 20.6306 8.18022 24.2622 14.0097 27.846L14.0158 27.8497C14.4631 28.1218 14.9765 28.2658 15.5 28.2658C16.0235 28.2658 16.5369 28.1218 16.9842 27.8497L16.9903 27.846C22.8198 24.2622 26.1377 20.6306 27.9914 17.4147C29.8503 14.1898 30.1875 11.4684 30.1875 9.79363C30.1875 5.32742 26.5343 1.73425 22.0625 1.73425C19.7066 1.73425 17.7134 2.99479 16.4252 4.06251C16.08 4.3486 15.77 4.63373 15.5 4.8992C15.23 4.63373 14.92 4.3486 14.5748 4.06251C13.2866 2.99479 11.2934 1.73425 8.9375 1.73425Z"
              fill="#542BA8"
            />
          </mask>
          <g className="g" mask="url(#mask0_865_3249)">
            <rect
              className="rect"
              fill="#542BA8"
              height="30"
              width="30"
              x="0.5"
            />
          </g>
        </svg>
      </div>
    </button>
  );
};
