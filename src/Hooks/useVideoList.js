import React, { useEffect , useState } from 'react'
import { YOUTUBE_VIDEO } from '../config/Const';

const useVideoList = (videoList,setVideoList) => {

    useEffect(()=>{
        getVideo();
    },[])


//    const [videoList,SetVideoList]=useState();

    async function getVideo(){

        const data= await fetch(YOUTUBE_VIDEO);
        const json= await data.json();
        // console.log(json);
        setVideoList(json?.items)
    }
  return videoList;
}

export default useVideoList
