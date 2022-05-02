import React from 'react';
import { products } from '../../resources/product';
import './Body.css';

const MainContent = () => {
  const listItems = products.map((item) => 
    <div className='card' key={item.id}>
      <div className='card_thumb'>
        <img
          alt='Furniture'
          style={{
            alignSelf: 'center',
            height: 300,
            width: 300,
            borderWidth: 1,
            borderRadius: 150
          }}
          src={item.imageLink[0]}
          resizeMode="stretch"
          />
      </div>
      <div className='card_header'>
        <h2>{item.name}</h2>
        <p className='description'>{item.description}</p>
        <p className='price'>{item.price} VNĐ</p>
      </div>
      <div className='btn'>Thêm vào giỏ</div>
    </div>
  )

  return (
    <div className='products_list'>
      {listItems}
    </div>
  );
}

export default MainContent;