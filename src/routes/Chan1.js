import React from 'react'
import SideBar from 'components/SideBar';
import LeftNavbar from 'components/LeftNavbar';


const Chan1 = () => {
  return (
    <div className='flex'>
      <SideBar />
      <LeftNavbar serverTitle="ㅇㅇ님의 서버"/>
      <h2>Chan1</h2>
    </div>
  )
}

export default Chan1