import React from 'react';
import './Body.css';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { PRODUCT_THUMBNAIL_SIZE } from '../../constant/constant';

const MainContent = (props) => {
  const { category } = useParams();
  const { products, onAdd, notify } = props;

  const listItems = products.map((item) => {
    if (item.category === category)
      return (
        <div className='card' key={item.id}>
          <div className='card_thumb'>
            <img
              alt='Furniture'
              style={{
                alignSelf: 'center',
                height: PRODUCT_THUMBNAIL_SIZE,
                width: PRODUCT_THUMBNAIL_SIZE,
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
          <motion.div whileHover={{scale: 1.05}} className='btn' onClick={() => {onAdd(item); notify();}}>Thêm vào giỏ</motion.div>
        </div>
      )
    else
      return null;
    }
  )

  return (
    <div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '10px'}}>
        <h1>Một số sản phẩm về {category}</h1>
      </div>
      <div className='products_list'>
          {listItems}
      </div>
    </div>
  );
}

export default MainContent;