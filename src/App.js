import './App.css'
import videoDB from './data'
// import Counter from './components/counter';
import {  useReducer, useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';

function App() {
    const [editableVideo,setEditableVideo] = useState(null);
    const [mode,setMode] = useState('darkmode')
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

//    const themContext = useContext(ThemeContext);
//    console.log(themContext)
    function editVideo(id){
        setEditableVideo(videos.find(video=>video.id===id))
    }
 return(
  <>
  <ThemeContext.Provider value={mode}>
  <div className={`App ${mode}`} onClick={()=>console.log('hello')}>
    <button onClick={()=>setMode(mode === 'darkmode' ? 'lightmode' : 'darkmode')}>THEM CHANGE</button>
   <div className='f-app'>Videos
   <VideoList videos={videos} 　dispatch={dispatch} editVideo={editVideo}></VideoList>
   </div>
   <div>
    {/* <Counter>Add</Counter> */}
    <div>
    <AddVideo dispatch={dispatch}  editableVideo={editableVideo}></AddVideo>
  </div>
   {/* <PlayButton name='helllo2' onClick={()=>alert('aaa')}>react.js</PlayButton> */}
   </div>
  </div>
  </ThemeContext.Provider>
  </>
 );
}

export default App;
