import React from 'react'
import { Sparkles, Plus, Compass, ArrowDownToLine } from 'lucide-react';
import SideBarIcon from 'components/SideBarIcon';
import { Link } from 'react-router-dom'


const SideBar = () => {
  return (
    <div className='left-server-nav flex flex-col items-center bg-[#1E1F22] text-[#CFD1D4] w-[72px] h-dvh py-1'>

        <Link to="/channels/@me">
          <SideBarIcon name="0" icon={<Sparkles />} text="다이렉트 메시지" color="#fff" />
        </Link>

        <hr className='border-none h-[2px] w-[30px] mx-5 bg-[#35363C]' />
         
        <Link to="/channels/1">
          <SideBarIcon name="1" icon={"ㅇㅇ님의서버"} text="ㅇㅇ님의 서버" color="#fff" />
        </Link>
        <Link to="/channels/2">
          <SideBarIcon name="2" icon={"ㄴㄴ님의서버"} text="ㄴㄴ님의 서버" color="#fff"/>
        </Link>

        <SideBarIcon name="3" icon={<Plus />} text="서버 추가하기" color="#23a559" />
        <SideBarIcon name="4" icon={<Compass />} text="서버 찾기 살펴보기" color="#23a559" />
         
        <hr className='border-none h-[2px] w-[30px] mx-5 bg-[#35363C]'/>

        <SideBarIcon name="5" icon={<ArrowDownToLine  />} text="앱 다운로드" color="#23a559" />
      </div>
  )
}

export default SideBar