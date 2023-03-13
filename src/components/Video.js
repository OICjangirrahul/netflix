import React, { Children } from 'react'
import './Video.css'
// rfce
function Video({title,channel,views,time,verified,id,children}) {
  console.log('video render')
  return (
    <>
    <div className='contanner'>
    <div className='pic'>
    <img src={`https://picsum.photos/id/${id}/160/90`} alt="" />
    </div>
    <div className='title'>{title}</div>
    <div className='channel'>{channel} {verified ? '✅' : ''} </div>
    <div className='views'>{views} <span>{time}</span></div>
    {/* <div>{children}</div> */}
    </div>
    </>
  )
}

export default Video