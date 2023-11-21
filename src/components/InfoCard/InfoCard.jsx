//기업 상세정보 카드 컴포넌트

import React from "react";
import "./style.css";
import { LinkButton } from "../LinkButton";

export const InfoCard = ({
  info: {
    crop_name,
    industry_name,
    establish_date,
    public_date,
    capital,
    address,
    website,
  } = {},
}) => {
  return (
    <div className="infoCard">
      <div className="list-item">
        <div className="content-2">
          <p className="infoListP">
            <span className="span">한글명: </span>
            <span className="text-wrapper-4">
              {crop_name}
              <br />
            </span>
            <span className="span">업종: </span>
            <span className="text-wrapper-4">
              {industry_name}
              <br />
            </span>
            <span className="span">설립일: </span>
            <span className="text-wrapper-4">
              {establish_date}
              <br />
            </span>
            <span className="span">상장일: </span>
            <span className="text-wrapper-4">
              {public_date}
              <br />
            </span>

            <span className="span">자본금: </span>
            <span className="text-wrapper-4">
              {capital.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
            <LinkButton to={website} isLinked={true} buttonText="이동하기➡️" />
          </p>
        </div>
      </div>
    </div>
  );
};
