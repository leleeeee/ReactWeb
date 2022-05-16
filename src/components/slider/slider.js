import React, { useState } from "react";
import './Slider.css';
import BtnSlider from "./btnSlider";
import dataSlider from "./dataSlider";
import { useLocation } from 'react-router-dom';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
        setSlideIndex(slideIndex + 1)
    } 
    else 
      if (slideIndex === dataSlider.length){
        setSlideIndex(1)
    }
  } 

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(dataSlider.length)
      }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }

  const location = useLocation();

  const notRender = [ '/cart', '/payment' ]

  if (!notRender.includes(location.pathname))
    return (
        <div className="container-slider">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img 
                                src={process.env.PUBLIC_URL + `/Images/img0${index + 1}.png`}
                                alt='cover'
                            />
                        </div>
                    )
                })}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

                <div className="container-dots">
                    {Array.from({length: 5}).map((item, index) => (
                        <div 
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}