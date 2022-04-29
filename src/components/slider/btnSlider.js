import React from "react";
import "./Slider.css";
import leftArrow from "./icons/toleft.png";
import rightArrow from "./icons/toright.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}