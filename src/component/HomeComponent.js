import React, { useContext } from 'react'
import VideoCard from '../Utils/VideoCard'
import useVideoList from '../Hooks/useVideoList'
import Shimmer from './Shimmer';
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { LiaYoutubeSquare } from "react-icons/lia";
import { MdOutlineSubscriptions } from "react-icons/md";
import { VideoContext } from '../context/Video';


const HomeComponent = () => {

    const VideoListState = useContext(VideoContext)
    const videolist = useVideoList(VideoListState?.videolist,VideoListState?.setVideolist);
    console.log(VideoListState);

    return (<>
        {
            (!videolist) ? (<Shimmer />) : (
                <>
                    <div className='flex'>
                        <div className=' px-2  text-center '>
                            <IoMdHome className='text-2xl mt-8 mx-auto' />
                            <p className='text-xs font-mono'>Home</p>
                            <SiYoutubeshorts className='text-2xl mt-8 mx-auto ' />
                            <p className='text-xs font-mono font-thin '>Shorts</p>
                            <MdOutlineSubscriptions className='text-2xl  mt-8 mx-auto' />
                            <p className='text-xs font-mono font-thin'>Subscription</p>
                            <LiaYoutubeSquare className='text-2xl  mt-8 mx-auto ' />
                            <p className='text-xs font-mono'>You</p>
                        </div>
                        <div className='w-12/12  overflow-hidden'>
                            <div className='w-12/12 flex py-2 my-2 overflow-hidden text-white'>
                                <button className='bg-gray-900 p-1 px-4 mx-2 rounded-xl border  border-gray-300'>All</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >Mixes</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >Music</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >Gaming</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >JavaScript</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >Live</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >Football</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >Python</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >C++</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >DSA</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >Ruby</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >Instagram</button>
                                <button className='bg-gray-300  p-1 px-4 mx-2 rounded-xl border  border-gray-300 text-black' >LinkdIn</button>
                            </div>
                            <div className=' flex flex-wrap w-12/12 bg-white  my-2 '>
                                {
                                    videolist.map((video) => {
                                        return (
                                            <VideoCard {...video} />
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </>
            )
        }
    </>
    )
}

export default HomeComponent
