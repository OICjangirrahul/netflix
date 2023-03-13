import './App.css'
import videoDB from './data'
// import Counter from './components/counter';
import { useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';

function App() {
    const [videos,setVideos] = useState(videoDB);

    function addVideos(video){
        setVideos([
            ...videos,
            {...video, id: videos.length+1}
        ]);   
    }

    

 return(
  <>
  <div className="App" onClick={()=>console.log('hello')}>
   <div className='f-app'>Videos
   <VideoList videos={videos}></VideoList>
   </div>
   <div>
    {/* <Counter>Add</Counter> */}
    <div>
    <AddVideo addVideos={addVideos}></AddVideo>
  </div>
   {/* <PlayButton name='helllo2' onClick={()=>alert('aaa')}>react.js</PlayButton> */}
   </div>
  </div>
  </>
 );
}

export default App;
