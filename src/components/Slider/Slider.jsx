import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";



 export const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };
  return (
    <div className="container">
   
    <Slider {...settings}>
      
      <div className="card">
        <img src="/Images/tech4.jpg" alt=""className="w-100" />
      </div>
      <div className="card">
        <img width='1920' height='750' src="/Images/tech8.jpg" alt="" className="w-100"/>
      </div>
      <div className="card">
        <img width='1920' height='750' src="/Images/tech3.jpg" alt="" className="w-100"/>
      </div>
      <div className="card">
        <img width='1920' height='750' src="/Images/tech1.jpg" alt="" className="w-100"/>
      </div>
    </Slider>
  </div>
  )
}

export default Slider