// NewsCard.js

import React from "react";
import "./style.css";

export const NewsCard = ({
  info: { date, title, content, url } = {}, // 언디파인드 처리를 위해 기본값 사용
}) => {
  const handleButtonClick = () => {
    window.open(url); // 클릭 시 URL로 이동
  };

  return (
    <div className="newsCard">
      <button onClick={handleButtonClick} className="news-bubble">
        <div className="name-4">{date}</div>
        <div className="message-2">
          <div className="newsCardTitle">
            {title}
            <br />
          </div>
          <div className="newsCardText">{content}</div>
        </div>
      </button>
    </div>
  );
};
