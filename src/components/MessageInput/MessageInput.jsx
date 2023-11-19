// MessageInput.js
import React, { useState } from "react";
import "./style.css";
import { Icon2 } from "../../icons/Icon2";

export const MessageInput = ({ addMessage }) => {
  const [text, setText] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    // 공란인 경우 알림창 띄우기
    if (text.trim() === "") {
      alert("메시지를 입력하세요.");
      return; // 메시지가 비어있으면 아무 동작도 하지 않음
    }

    addMessage(text);
    setText("");
  };

  return (
    <div className="MessageInput">
      <form onSubmit={handleMessageSubmit}>
        <input
          className="inputBox"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="메세지를 입력하세요."
        />
        <button className="submitBtn" type="submit">
          <Icon2 className="icon-2" />
        </button>
      </form>
    </div>
  );
};
