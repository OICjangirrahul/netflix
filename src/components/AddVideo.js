import { useState } from 'react';
import './AddVideo.css'

function AddVideo({addVideos}) {
const [video, setVideo] = useState({
        channel: "Coder Dost",
        time: "4 year ago",
        verified: true
    });

function handleSubmit(e) {
    e.preventDefault();
    addVideos(video)
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

return (
    <form action="" className='AddVideo'>
        <input name='title' onChange={handleChange} type="text" />
        <input name='views' onChange={handleChange} type="text" />
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
        >addVideo</button>
    </form>
  )
}
     
export default AddVideo;