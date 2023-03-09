import Video from './components/Video';
import './App.css'
import videoDB from './data'
import PlayButton from './components/PlayButton';
import Counter from './components/counter';
import { useState } from 'react';

function App() {
    const [videos,setVideos] = useState(videoDB);
 return(
  <>
  <div className="App" onClick={()=>console.log('hello')}>
   <div className='f-app'>Videos
   {
    videos.map(video => <Video key={video.id} channel={video.title} views={video.views} time={video.time} title={video.title} verified={video.verified} id={video.id}> <PlayButton onPause={()=>console.log('pause')} onPlay={()=>console.log(video.title)}>{video.title}</PlayButton> </Video>)
   }
   </div>
   <div>
    <Counter>Add</Counter>
    <div>
    <button onClick={()=>{
        setVideos([...videos,{
            id : videos.length + 1,
            channel : "Coder Dost",
            views : "300K",
            time : "4 year ago",
            title : "React.js",
            verified : true
          }])
    }}>addVideo</button>
  </div>
   {/* <PlayButton name='helllo2' onClick={()=>alert('aaa')}>react.js</PlayButton> */}
   </div>
  </div>
  </>
 );
}

export default App;
