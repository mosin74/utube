import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { YOUTUBE_IMG } from '../config/Const';

const HeaderLeftDiv = () => {
  return (
    <div className='w-1/4 flex items-center ' >
      <AiOutlineMenu className='m-2 w-6 h-2/4' />
     <img src={YOUTUBE_IMG} alt="Hello" className='w-2/4' />
    </div>
  )
}

export default HeaderLeftDiv;
