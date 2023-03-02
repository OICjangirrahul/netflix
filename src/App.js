import Video from './components/Video';
import './App.css'

function App() {
  let obj  = {
    channel : "Coder Dost",
    views : "100K",
    time : "4 year ago",
    title : "Golang"
  }
 return(
  <>
  <div className="App">
   <div>Videos</div>
   <Video {...obj}/>
  <Video channel="Coder Dost" views="10K" time="1 year ago" title="React js"/>
  <Video channel="Coder Dost" views="30K" time="2 year ago" title="JavaScript"/>
  </div>
  </>
 );
}

export default App;
