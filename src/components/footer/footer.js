import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

export default function Header(props) {
  return (
    <div className="footer">
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
