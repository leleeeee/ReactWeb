import React, { useEffect } from "react";
import "./Body.css";
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

export default function Header(props) {
  useEffect(() => {
    addResponseMessage('Một lời giới thiệu rất dài');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  };

  return (
    <div className="body">
      <h1>{props.message}</h1>
        <Widget
        handleNewUserMessage={handleNewUserMessage}
        title='Bạn cần gì?'
        emojis={true}
        showCloseButton={true}
        subtitle="Hãy nhắn tin ngay"
      />
    </div>
  );
}