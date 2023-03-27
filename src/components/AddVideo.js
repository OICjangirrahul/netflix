import { useEffect, useState } from 'react';
import './AddVideo.css'

function AddVideo({dispatch,updateVideo,editableVideo}) {
const [video, setVideo] = useState({
        channel: "Coder Dost",
        time: "4 year ago",
        verified: true
    });

function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
        dispatch({type:'UPDATE',payload:video})
    }else{
        dispatch({type:'ADD',payload:video})
    }
    console.log(video)
};

function handleChange(e) {
    console.log(e.target.name)
    setVideo({
        ...video,
        [e.target.name]: [e.target.value]
    })
    console.log(video)

}

useEffect(()=>{
    if(editableVideo){
        setVideo(editableVideo)
    }
},[editableVideo])

return (
    <form action="" className='AddVideo'>
        <input name='title'  onChange={handleChange} type="text" value={video.title} />
        <input name='views' onChange={handleChange} type="text" value={video.views} />
        <button
            onClick={
                handleSubmit
            }
        // onClick={()=>{
        // setVideos([...videos,{
        //     id : videos.length + 1,
        //     channel : "Coder Dost",
        //     views : "300K",
        //     time : "4 year ago",
        //     title : "React.js",
        //     verified : true
        //   }])
        // }}
        >{editableVideo ? 'EditVideo' : 'addVideo'}</button>
    </form>
  )
}
     
export default AddVideo;