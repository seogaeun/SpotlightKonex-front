// InfoCard.js

import React from "react";
import "./style.css";

export const InfoCard = ({
  info: {
    name,
    industry,
    establishmentDate,
    listingDate,
    capital,
    address,
    website,
  } = {}, // 언디파인드 처리를 위해 기본값 사용
}) => {
  return (
    <div className="infoCard">
      <div className="list-item">
        <div className="content-2">
          <p className="p">
            <span className="span">한글명: </span>
            <span className="text-wrapper-4">
              {name}
              <br />
            </span>
            <span className="span">업종: </span>
            <span className="text-wrapper-4">
              {industry}
              <br />
            </span>
            <span className="span">설립일: </span>
            <span className="text-wrapper-4">
              {establishmentDate}
              <br />
            </span>
            <span className="span">상장일: </span>
            <span className="text-wrapper-4">
              {listingDate}
              <br />
            </span>

            <span className="span">자본금: </span>
            <span className="text-wrapper-4">
              {capital}
              <br />
            </span>

            <span className="span">주소: </span>
            <span className="text-wrapper-4">
              {address}
              <br />
            </span>

            <span className="span">홈페이지: </span>
            <span className="text-wrapper-4">
              {website}
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
