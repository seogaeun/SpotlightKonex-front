// NewsCard.js

import React from "react";
import "./style.css";

export const NewsCard = ({
  info: { date, title, content } = {}, // 언디파인드 처리를 위해 기본값 사용
}) => {
  return (
    <div className="newsCard">
      <div className="news-bubble">
        <div className="name-4">{date}</div>
        <div className="message-2">
          <div className="newsCardTitle">
            {title}
            <br />
          </div>
          <div className="newsCardText">{content}</div>
        </div>
      </div>
    </div>
  );
};
