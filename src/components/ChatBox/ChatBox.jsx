import React, { useState } from "react";
import { MessageList } from "../MessageList";
import { MessageInput } from "../MessageInput/MessageInput";

import "./style.css";

export const ChatBox = ({ messages, PageCorpCode }) => {
  console.log("중간 인자" + PageCorpCode);

  return (
    <div className="ChatBox">
      <MessageList messages={messages} />
      <MessageInput pageCorpCode={PageCorpCode} />
    </div>
  );
};
