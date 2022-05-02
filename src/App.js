import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Slider from './components/slider/slider';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Slider/>
        <Switch>
          <Route path='/'>
            <Body message="Thiết kế nội thất"/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
