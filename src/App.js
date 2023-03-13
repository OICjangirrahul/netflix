import Video from './components/Video';
import './App.css'
import videoDB from './data'
import PlayButton from './components/PlayButton';
// import Counter from './components/counter';
import { useState } from 'react';
import AddVideo from './components/AddVideo';

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
   {
    videos.map(video => <Video key={video.id} channel={video.title} views={video.views} time={video.time} title={video.title} verified={video.verified} id={video.id}> <PlayButton onPause={()=>console.log('pause')} onPlay={()=>console.log(video.title)}>{video.title}</PlayButton> </Video>)
   }
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
