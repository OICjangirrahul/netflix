import './PlayButton.css'
import { useState } from 'react';

function PlayButton({children,onPlay,onPause}){
    const [playing, setplaying]= useState(false);
    function handleClick(e){
        e.stopPropagation();
        if(playing) onPause();
        else onPlay();
        setplaying(!playing);
    }
    return(
    <>
    <button onClick={handleClick}>{children} : {playing ? '>' : '||'}</button>
    </>  
    )
}
export  default PlayButton;