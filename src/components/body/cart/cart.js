import React from 'react';
import './Cart.css';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';

import { IconButton, Button } from '@mui/material';

import LocationForm from './location/LocationForm';
import PaymentRadio from './payment/payment';

import { ToastContainer, toast } from "react-toastify";
import { CART_ITEM_STORAGE_KEY } from "../../../constant/constant";
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;

  const notify = () => toast.success("Đã tiếp nhận đơn hàng", {icon: "✅"});
  const clearCart = () => {
    localStorage.removeItem(CART_ITEM_STORAGE_KEY);
    window.scrollTo(0, 0);
  }

  return (
    <div className='cart'>
      <h2>Giỏ hàng</h2>
      <div>
        {cartItems.length === 0 && <div>Oops, bạn chưa có sản phẩm nào cả (´。＿。｀)</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row-1">
            <div className='card_thumb'>
            <img
              alt='Furniture'
              style={{
                alignSelf: 'center',
                height: 60,
                width: 60,
                borderWidth: 1
              }}
              src={item.imageLink}
              resizeMode="stretch"
              />
          </div>
            <div className="col-2">{item.name}</div>
            <div className="col-2 text-right">
              {item.qty} x {item.price.toFixed(2)}VNĐ
            </div>
            <div className="col-2">
              <IconButton aria-label="add" size="large" onClick={() => onAdd(item)}>
                <Add fontSize="inherit" />
              </IconButton>
              <IconButton aria-label="delete" size="large" onClick={() => onRemove(item)}>
                <Remove fontSize="inherit" />
              </IconButton>
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <div>
            <div className='cart-total'>
              <hr></hr>
              <div className="row">
                <div className="col-2">Tổng tiền</div>
                <div className="col-1 text-right">{itemsPrice.toFixed(2)}VNĐ</div>
              </div>
              <div className="row">
                <div className="col-2">Thuế</div>
                <div className="col-1 text-right">{taxPrice.toFixed(2)}VNĐ</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-2">
                  <strong>Tổng đơn</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>{totalPrice.toFixed(2)}VNĐ</strong>
                </div>
              </div>
            </div>
            <div className='info'>
              <h4>Thông tin giao hàng</h4>
                <LocationForm/>
            </div>
            <h4>Chọn hình thức thanh toán</h4>
            <div className='payment'>  
              <PaymentRadio/>
            </div>
            <div className="button">
              <Link to='/'>
                <Button variant="contained" onClick={() => {notify(); clearCart();}}>Thanh toán</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
