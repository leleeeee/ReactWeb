import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

export default function Header(props) {
  return (
    <div className="footer">
      <h5>©️Copyright by https://github.com/leleeeee</h5>
      <div className="social">
        <SocialIcon url="https://www.facebook.com/profile.php?id=100008157349414"/>
        <SocialIcon url="https://www.instagram.com/_nhuneeeee/"/>
        <SocialIcon url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
      </div>
    </div>
  );
}
