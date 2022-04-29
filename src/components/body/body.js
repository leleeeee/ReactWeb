import React from "react";
import "./Body.css";

export default function Header(props) {
  return (
    <div className="body">
      <h1>{props.message}</h1>
    </div>
  );
}