// MessageList.js

import React, { useEffect, useRef } from "react";
import "./style.css";

export const MessageList = ({ messages }) => {
  const messageListRef = useRef(null);

  useEffect(() => {
    // 스크롤을 맨 아래로 이동
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="MessageList" ref={messageListRef}>
      <ul>
        {messages.map((message, index) => (
          <div key={index} className="messageBubble">
            <div className="bubbleContent">
              <div className="userName">{`${message.sender}`}</div>
              <div className="bubbleText">{`${message.text}`}</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
