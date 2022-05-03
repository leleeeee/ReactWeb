import React, { useEffect } from "react";
import "./Body.css";
import { Widget, addResponseMessage } from 'react-chat-widget';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'react-chat-widget/lib/styles.css';

export default function Header(props) {
  useEffect(() => {
    AOS.init();
    addResponseMessage('Chào mừng đến với NTVP!ヾ(＠⌒ー⌒＠)ノ\nĐây là một lời giới thiệu rất dài về chúng tôi!\nCảm ơn bạn đã quan tâm!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  };

  return (
    <div className="body">
      <div data-aos='fade-up' data-aos-duration="2500">
        <h2>Nội thất đỉnh cao - Thiết kế thời thượng - Không gì là không thể</h2>
        <h1>Là chúng tôi <strong>UR</strong></h1>
      </div>
      <div className="main-container">
        <div data-aos="fade-right">
          <p style={{textAlign:'justify', fontSize:'20px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum dictum consequat. Duis ac dolor ut lorem egestas placerat quis id erat. Nunc vel nunc fringilla, semper enim et, porta dui. Mauris tristique nunc non velit vestibulum luctus. In mattis velit non eros consectetur blandit. Sed et posuere dolor, vel condimentum felis. Praesent a turpis mi. Nulla molestie odio purus, vitae commodo massa imperdiet vel. Morbi eget imperdiet nisi.
            <br/>
            Aenean aliquet mollis diam, at condimentum sapien tincidunt at. Aenean facilisis sodales scelerisque. Fusce enim magna, lobortis non ex a, laoreet facilisis enim. Cras aliquam risus ipsum, sed sagittis mi consequat sit amet. Proin at eros sem. Sed eget malesuada orci. Donec facilisis volutpat nibh quis tempus. Suspendisse fermentum cursus nunc eget sodales. Ut ultrices commodo felis eleifend accumsan. Duis mauris felis, aliquam sed dolor molestie, lobortis sollicitudin enim.
          </p>
        </div>
        <span class="divider" />
        <div data-aos="fade-left">
          <img className="cover-img"
            src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/affordable-home-decor-ideas-hero-A.jpg"
            width={580}
            alt="cover"
          />
        </div>
      </div>
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