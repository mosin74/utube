import React from 'react'
import HeaderLeftDiv from '../Utils/HeaderLeftDiv';
import SearchComponent from '../Utils/Search';
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
const HeaderComponent = () => {
  return (
    <div className='  flex m-0 p-0 h-20 items-center '>
      <HeaderLeftDiv />
      <div className='w-2/4 '>
        <SearchComponent />
      </div>
      <div className=' flex items-center justify-evenly  w-1/4 '>
      <RiVideoAddLine className='h-10 w-7' />
      <FaRegBell className='h-10 w-7' />
      <MdOutlineAccountCircle className='h-10 w-8' />
      </div>

    </div>
  )
}

export default HeaderComponent;
