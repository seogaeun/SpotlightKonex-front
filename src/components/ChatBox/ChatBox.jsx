import React, { useState } from "react";
import { MessageList } from "../MessageList";
import { MessageInput } from "../MessageInput/MessageInput";

import "./style.css";

export const ChatBox = ({ messages, addMessage }) => {
  return (
    <div className="ChatBox">
      <MessageList messages={messages} />
      <MessageInput addMessage={addMessage} />
    </div>
  );
};
