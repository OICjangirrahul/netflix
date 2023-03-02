import React from 'react'
import './Video.css'
// rfce
function Video({title,channel,views,time}) {
  return (
    <>
    <div className='contanner'>
    <div className='pic'>
    <img src="https://picsum.photos/260/190/" alt="" />
    </div>
    <div className='title'>{title}</div>
    <div className='channel'>{channel}</div>
    <div className='views'>{views} <span>{time}</span></div>
    </div>
    </>
  )
}

export default Video