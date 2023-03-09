import Video from './components/Video';
import './App.css'
import videos from './data'
import PlayButton from './components/PlayButton';

function App() {
 return(
  <>
  <div className="App">
   <div className='f-app'>Videos
   {
    videos.map(video => <Video key={video.id} channel={video.title} views={video.views} time={video.time} title={video.title} verified={video.verified} id={video.id}> <PlayButton onPause={()=>console.log('pause')} onPlay={()=>console.log(video.title)}>{video.title}</PlayButton> </Video>)
   }
   </div>
   <div>
   {/* <PlayButton name='helllo2' onClick={()=>alert('aaa')}>react.js</PlayButton> */}
   </div>
  </div>
  </>
 );
}

export default App;
