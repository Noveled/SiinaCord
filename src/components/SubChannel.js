import React from 'react'
import { UsersRound, Settings } from 'lucide-react';

const SubChannel = ({icon, title}) => {
  return (
    <div className='flex justify-between mx-2 my-1 px-2 py-1 hover:bg-[#404249] hover:rounded-md'>
      <div className='flex justify-center items-center gap-2'>
        <p className='text-xl font-extrabold'>{icon}</p>
        <p className='hover:text-white'>{title}</p>
      </div>
      <div className='flex justify-center items-center gap-1'>
        <UsersRound className='w-4 h-4'/>
        <Settings className='w-4 h-4'/>
      </div>
    </div>
  )
}

export default SubChannel