import React from 'react'
import { designs } from '../../../resources/design';
import './Design.css';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";

const DesignGrid = () => {
  const { category } = useParams();

  const listItems = designs.map((item) => {
    if (item.category === category)
      return (
        <motion.div 
          className='card-item' 
          key={item.id}
          whileHover={{
            scale: 1.1,
          }}
        >
          <div className='card-thumb'>
            <img
              alt='thumb'
              style={{
                alignSelf: 'center',
                borderRadius: 10,
                width: 400,
                height: 400
              }}
              src={item.image}
              resizeMode="stretch"
            />
          </div>
          <div className='card-header'>
            <h2>{item.name}</h2>
            <p className='des'>{item.des}</p>
          </div>
        </motion.div>
      )
    else
      return null;
  })

  return (
    <div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '10px'}}>
        <h1>Các dự án tiêu biểu</h1>
      </div>
      <div className='items-list'>
        {listItems}
      </div>
    </div>
  );
}

export default DesignGrid;
