
import './Video.css'
// rfce
function Video({title,channel,views,time,verified,id,children,deleteVideo,editVideo}) {
  console.log('video render')
  return (
    <>
    <div className='contanner'>
    <button className='close' onClick={()=>deleteVideo(id)}>X</button>
    <button className='edit' onClick={()=>editVideo(id)}>edit</button>
    <div className='pic'>
    <img src={`https://picsum.photos/id/${id}/160/90`} alt="" />
    </div>
    <div className='title'>{title}</div>
    <div className='channel'>{channel} {verified ? '✅' : ''} </div>
    <div className='views'>{views} <span>{time}</span></div>
    <div>{children}</div>
    </div>
    </>
  )
}

export default Video