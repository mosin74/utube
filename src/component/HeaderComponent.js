import React from 'react'
import HeaderLeftDiv from '../Utils/HeaderLeftDiv';
import SearchComponent from '../Utils/Search';
const HeaderComponent = () => {
  return (
    <div className='  flex m-0 p-0 h-32 items-center '>
      <HeaderLeftDiv />
      <div className='w-2/4 '>
        <SearchComponent />
      </div>
      <div className='w-1/4 bg-green-600'>

      </div>

    </div>
  )
}

export default HeaderComponent;
