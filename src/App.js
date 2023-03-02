import Video from './components/Video';
import './App.css'

function App() {
 return(
  <>
  <div className="App">
   <div>Videos</div>
  <Video channel="Coder Dost" views="10K" time="1 year ago" title="React js"/>
  <Video channel="Coder Dost" views="30K" time="2 year ago" title="JavaScript"/>
  </div>
  </>
 );
}

export default App;
