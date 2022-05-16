import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import { useLocation } from 'react-router-dom';

export default function Header(props) {
  const location = useLocation();
  let pos = 'relative';
  if (location.pathname === '/cart')
    pos = 'absolute';

  return (
    <div className="footer" style={{position: pos, left: 0, right: 0, bottom: 0}}>
      <p>©️Copyright by https://github.com/leleeeee</p>
      <div className="social">
        <SocialIcon className="icon" url="https://github.com/leleeeee"/>
        <SocialIcon className="icon" url="https://www.facebook.com/profile.php?id=100008157349414"/>
        <SocialIcon className="icon" url="https://www.instagram.com/_nhuneeeee/"/>
        <SocialIcon className="icon" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
      </div>
    </div>
  );
}
