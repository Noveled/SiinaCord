import React from 'react'
import { ChevronDown, CalendarCheck, Plus, Volume2, MicOff, Headphones, Settings } from 'lucide-react';
import { FaDiscord } from "react-icons/fa";
import SideBar from 'components/SideBar';

const ChanMe = () => {
  return (
      <div className='flex'>
        <SideBar />
        <div div className='w-[240px] bg-[#2B2D31]'>
          <div className='fixed w-[240px] h-12 border-[#202225] border-b-[2px] hover:bg-[#35373C] transition duration-100 cursor-pointer'>
            <div className='flex h-full justify-between items-center mx-4'>
              <div className='text-white font-semibold text-base'>대화 찾기 또는 시작하기</div>
              <ChevronDown className='text-white w-5' />
            </div>
          </div>

          <div className='mt-14 text-[#848A92]'>
            <div className='flex gap-1 mx-2 my-2 px-2 py-1 items-center hover:bg-[#404249] hover:rounded-md'>
              <CalendarCheck className='w-5 h-5'/>
              <p>친구</p>
            </div>
            <div className='flex gap-1 mx-2 my-2 px-2 py-1 items-center hover:bg-[#404249] hover:rounded-md'>
              <CalendarCheck className='w-5 h-5'/>
              <p>상점</p>
            </div>

            <div className='flex justify-between items-center mt-5 mx-2'>
              <div className='flex items-center w-full ml-1 hover:text-white cursor-pointer'>
                <p className='text-xs font-semibold'>다이렉트 메시지</p>
              </div>
              <Plus className='w-4 h-4 mr-3 hover:text-white cursor-pointer'/>
            </div>
          </div>

          <div className='fixed w-[240px] h-12 bottom-0 px-2 bg-[#232428] text-[#B5BAC1]'>
          <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
              {/* <span className='relative flex items-center justify-center h-8 w-8 my-2 mx-auto shadow-lg bg-[#FAA61A] rounded-3xl

              after:absolute after:border-[3px] after:border-[#232428] after:h-4 after:w-4 after:my-2 after:mx-auto after:shadow-lg after:bg-[#23A55A] after:rounded-3xl after:top-3 after:left-5'>
              </span> */}
              <span className='relative flex items-center justify-center h-8 w-8 my-2 mx-auto shadow-lg bg-[#FAA61A] rounded-3xl'>
                <FaDiscord className='w-5 h-5 text-white'/>
                <span className='absolute h-4 w-4 border-[3px] border-[#232428] shadow-lg bg-[#23A55A] rounded-3xl top-5 left-5'></span>
              </span>
              

              <div className='text-xs'>
                <p className="font-semibold text-white">dd</p>
                <p>온라인</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <MicOff className='w-5 h-5 text-red-600' />
              <Headphones className='w-5 h-5' />
              <Settings className='w-5 h-5' />
            </div>
          </div>
          
        </div>
        </div>
      </div>
    
  )
}

export default ChanMe