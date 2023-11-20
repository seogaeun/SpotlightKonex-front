// ChatBox.js

import React, { useState } from "react";
import { MessageList } from "../MessageList";
import { MessageInput } from "../MessageInput/MessageInput";

import "./style.css";

export const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    setMessages([...messages, { text, sender: "user" }]);
  };

  return (
    <div className="ChatBox">
      <MessageList messages={messages} />
      <MessageInput addMessage={addMessage} />
    </div>
  );
};
