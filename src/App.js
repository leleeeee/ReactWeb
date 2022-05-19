import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Slider from './components/slider/slider';
import AboutUs from "./components/body/aboutus";
import MainContent from "./components/body/products";
import HomeStyle from "./components/body/home_style";
import Cart from "./components/body/cart/cart";
import DesignGrid from "./components/body/description/design";
import LocationForm from "./components/body/cart/location/LocationForm";

import { products } from "./resources/product";
import { CART_ITEM_STORAGE_KEY } from "./constant/constant";

import { Widget, addResponseMessage } from 'react-chat-widget';
import { ToastContainer, toast } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'react-chat-widget/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';
// import './App.css';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const localStorageCart = localStorage.getItem(CART_ITEM_STORAGE_KEY);
    console.log(`Read from local: ${localStorageCart}`);
    if (localStorageCart) {
      setCartItems(JSON.parse(localStorageCart));
    }
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    localStorage.setItem(CART_ITEM_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    AOS.init();
    addResponseMessage('Cảm ơn bạn đã tin tưởng và chọn lựa **UR DECOR**\nHãy để lại tên và thông tin của bạn, chúng tôi sẽ liên hệ ngay nhé.');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  };

  const notify = () => toast.success("Đã thêm thành công!", {icon: "✅"});

  return (
    <div className="App">
      <Router>
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
            <MainContent products={products} onAdd={onAdd} notify={notify}/>
          </Route>
          <Route path='/home-style'>
            <HomeStyle/>
          </Route>
          <Route path='/cart'>
            <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
          </Route>
          <Route path='/design'>
            <DesignGrid/>
          </Route>
          <Route path='/payment'>
            <LocationForm/>
          </Route>
        </Switch>
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={process.env.PUBLIC_URL + `/Images/avt.png`}
          title='Bạn cần gì?'
          profileClientAvatar={'https://cdn-icons-png.flaticon.com/512/2829/2829679.png'}
          emojis={true}
          showCloseButton={true}
          subtitle="Hãy nhắn tin ngay"
        />
        <ToastContainer />
        <Footer cartItems={cartItems}/> 
      </Router>
    </div>
  );
}
