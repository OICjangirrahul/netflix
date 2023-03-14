import './App.css'
import videoDB from './data'
// import Counter from './components/counter';
import { useReducer, useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';

function App() {
    const [editableVideo,setEditableVideo] = useState(null);
    function videoReducer(videos,action){
        switch(action.type){
            case  'ADD':
                return [...videos,
            {...action.payload, id: videos.length+1}
            ]
            case 'DELETE':
                return videos.filter(video=>video.id!==action.payload)
            case 'UPDATE':
                const index = videos.findIndex(v=>v.id===action.payload.id)
                const newVideos = [...videos]
                newVideos.splice(index,1,action.payload)
                setEditableVideo(null)
                return  newVideos
            default:
                return videos

        }
    }
    // const [videos,setVideos] = useState(videoDB);
    const [videos,dispatch] = useReducer(videoReducer,videoDB)

   

    function addVideos(video){
        dispatch({type:'ADD',payload:video})
        // setVideos([
        //     ...videos,
        //     {...video, id: videos.length+1}
        // ]);   
    }

    function deleteVideo(id){
        dispatch({type:'DELETE',payload:id})
    //   setVideos(videos.filter(video=>video.id!==id))
    }

    function editVideo(id){
        setEditableVideo(videos.find(video=>video.id===id))
    }
    function updateVideo(video){
        dispatch({type:'UPDATE',payload:video})
        // const index = videos.findIndex(v=>v.id===video.id)
        // const newVideos = [...videos]
        // newVideos.splice(index,1,video)
        // setVideos(newVideos)
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
