import React, { useEffect, useRef } from "react";
import "./style.css";

export const MessageList = ({ messages }) => {
  const messageArray = messages || [];

  const messageListRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when new messages are received
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="MessageList" ref={messageListRef}>
      <ul>
        {messageArray.map((message, index) => {
          const isUserMessage = message.senderType === "User";
          const bubbleClass = isUserMessage
            ? "messageBubble-User"
            : "messageBubble-Corp";
          const contentClass = isUserMessage
            ? "bubbleContent-User"
            : "bubbleContent-Corp";
          const userNameClass = isUserMessage
            ? "userName-User"
            : "userName-Corp";
          const bubbleTextClass = isUserMessage
            ? "bubbleText-User"
            : "bubbleText-Corp";

          return (
            <div key={index} className={bubbleClass}>
              <div className={contentClass}>
                <div className={userNameClass}>{`${message.nickName}`}</div>
                <div className={bubbleTextClass}>{`${message.text}`}</div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
