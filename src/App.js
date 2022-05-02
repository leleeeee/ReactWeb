import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Slider from './components/slider/slider';
import AboutUs from "./components/body/aboutus";
import MainContent from "./components/body/products";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Slider/>
        <Switch>
          <Route exact path='/'>
            <Body message="Thiết kế nội thất"/>
          </Route>
          <Route path='/about-us'>
            <AboutUs/>
          </Route>
          <Route path='/products/:category'>
            <MainContent/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
