import Video from './components/Video';
import './App.css'
import videos from './data'

function App() {
 return(
  <>
  <div className="App">
   <div>Videos</div>
   {
    videos.map(video => <Video key={video.id} channel={video.title} views={video.views} time={video.time} title={video.title} verified={video.verified} id={video.id}/>)
   }
  </div>
  </>
 );
}

export default App;
