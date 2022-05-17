import React, { useState } from 'react';
import { payments } from '../../../../resources/payments';
import { motion } from 'framer-motion';

import './Payment.css'

export default function PaymentRadio() {
  const [value, setValue] = useState([]);

  const items = payments.map((item) => {
    let borderEffect = '1px solid grey';
    let opacityEffect = 0.5;
    if (value === item.id) {
      borderEffect = '4px solid pink';
      opacityEffect = 1;
    }

    return (
      <motion.div 
        className='payment-card' 
        key={item.id}
        style={{
          border: borderEffect,
          opacity: opacityEffect
        }}
        whileHover={{
          scale: 1.05
        }}
        onClick={() => setValue(item.id)}
      >
        <div className='payment-logo'>
          <img
            src={process.env.PUBLIC_URL + item.logo}
            alt='logo'
            style={{
              alignSelf: 'center',
              height: 50,
              borderWidth: 1
            }}
          />
        </div>
        <div className='payment-title'>
          <pre style={{font: 'inherit'}}>{item.name}</pre>
        </div>
      </motion.div>
    )
  })

  return (
    <div className='main-container'>
      {items}
    </div>
  )
}
