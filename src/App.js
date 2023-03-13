import './App.css'
import videoDB from './data'
// import Counter from './components/counter';
import { useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';

function App() {
    const [videos,setVideos] = useState(videoDB);
    const [editableVideo,setEditableVideo] = useState(null);

    function addVideos(video){
        setVideos([
            ...videos,
            {...video, id: videos.length+1}
        ]);   
    }

    function deleteVideo(id){
      setVideos(videos.filter(video=>video.id!==id))
    }

    function editVideo(id){
        setEditableVideo(videos.find(video=>video.id===id))
    }
    function updateVideo(video){
        const index = videos.findIndex(v=>v.id===video.id)
        const newVideos = [...videos]
        newVideos.splice(index,1,video)
        setVideos(newVideos)
    }

    

 return(
  <>
  <div className="App" onClick={()=>console.log('hello')}>
   <div className='f-app'>Videos
   <VideoList videos={videos} 　deleteVideo={deleteVideo} editVideo={editVideo}></VideoList>
   </div>
   <div>
    {/* <Counter>Add</Counter> */}
    <div>
    <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
  </div>
   {/* <PlayButton name='helllo2' onClick={()=>alert('aaa')}>react.js</PlayButton> */}
   </div>
  </div>
  </>
 );
}

export default App;
