import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({videos,dispatch,editVideo}){
    return(
    <>
        {
            videos.map(video => <Video key={video.id} dispatch={dispatch}  editVideo={editVideo} channel={video.title} views={video.views} time={video.time} title={video.title} verified={video.verified} id={video.id}> <PlayButton onPause={()=>console.log('pause')} onPlay={()=>console.log(video.title)}>{video.title}</PlayButton> </Video>)
        }
    </>
    );
}

export default VideoList;