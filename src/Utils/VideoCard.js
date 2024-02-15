import React from 'react'

const VideoCard = ({ snippet ,statistics}) => {

    // console.log(snippet)
    // console.log(statistics)

    return (
        <div className='rounded-xl border border-gray-400 my-2 mx-2  overflow-hidden'>
            <div className='mx-2  w-64 m-2'>
                <img src={snippet?.thumbnails?.medium.url} alt="" />
                <p className='  text-sm font-sans  font-semibold px-2'>{snippet?.title} </p>
                <p className='text-sm font-mono px-2'>{snippet?.channelTitle}</p>
                <p className='text-xs font-mono px-2'>{(statistics?.viewCount)/1000}k</p>
            </div>


        </div>
    )
}

export default VideoCard
