import React from 'react'
import './Body.css';
import Button from '@mui/material/Button';

export default function HomeStyle() {
  return (
    <div className='draw_container'>
      <iframe
        title='home_style'
        src="https://planner5d.com/v/?key=26278af262f63a8c93358d56b5af8796&viewMode=2d" 
        style={{width: 1080, height:660, border:'none'}} 
        allowFullScreen>
      </iframe>
      <Button href="https://planner5d.com/editor?key=26278af262f63a8c93358d56b5af8796">Link</Button>
    </div>
  )
}
