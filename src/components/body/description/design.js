import React from 'react'
import { designs } from '../../../resources/design';
import './Design.css';
import { useParams } from 'react-router-dom';

const DesignGrid = () => {
  const { category } = useParams();

  const listItems = designs.map((item) => {
    if (item.category === category)
      return (
        <div></div>
      )
    else
      return null;
  })

  return (
    <div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '10px'}}>
        <h1>Một số sản phẩm về {category}</h1>
      </div>
      <div className='items_list'>
        {listItems}
      </div>
    </div>
  );
}

export default DesignGrid;
