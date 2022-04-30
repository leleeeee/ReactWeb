import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Slider from "./components/slider/slider";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Body message="Thiết kế nội thất"/>
      <Footer/>
    </div>
  );
}
