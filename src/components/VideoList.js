import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({videos}){
    return(
    <>
        {
            videos.map(video => <Video key={video.id} channel={video.title} views={video.views} time={video.time} title={video.title} verified={video.verified} id={video.id}> <PlayButton onPause={()=>console.log('pause')} onPlay={()=>console.log(video.title)}>{video.title}</PlayButton> </Video>)
        }
    </>
    );
}

export default VideoList;