import React, { useEffect } from "react";
import "./Body.css";
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

export default function Header(props) {
  useEffect(() => {
    addResponseMessage('Chào mừng đến với NTVP!ヾ(＠⌒ー⌒＠)ノ\nĐây là một lời giới thiệu rất dài về chúng tôi!\nCảm ơn bạn đã quan tâm!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  };

  return (
    <div className="body">
      <h1>{props.message}</h1>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={'https://cdn-icons.flaticon.com/png/512/3061/premium/3061500.png?token=exp=1651509766~hmac=c660714f8b8b6db9bba8c1597f410040'}
        title='Bạn cần gì?'
        profileClientAvatar={'https://cdn-icons-png.flaticon.com/512/2829/2829679.png'}
        emojis={true}
        showCloseButton={true}
        subtitle="Hãy nhắn tin ngay"
      />
    </div>
  );
}