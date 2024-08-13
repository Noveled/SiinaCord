import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeChannel } from '../redux/slices/sidebarSlice'

const onClickEventHandler = (e, dispatch) => {
  // console.log(e.target.getAttribute('name'));
  dispatch(changeChannel(e.currentTarget.getAttribute('name'))); // 바인딩된 요소(div)를 정확히 참조가 필요
}

const SideBarIcon = ({ icon, text = 'tooltip', color, name }) => {
  const nowChannel = useSelector((state) => state.sidebarState.nowChannel);
  const dispatch = useDispatch();

  // 선택된 서버 css 간소화 시킬 것.
  return (
        (nowChannel === name) ? (
            <div onClick={(e) => onClickEventHandler(e, dispatch)} className={`group relative flex items-center justify-center 
            h-12 w-12 my-2 mx-auto shadow-lg 
            bg-[#5865F2] text-white text-nowrap text-sm
            rounded-xl cursor-pointer`} name={name}>
            {icon}
            {/* transition-all duration-500 scale-100 */}
            <span className="absolute w-5 h-10 p-2 m-2 min-w-max -left-9
            rounded-md shadow-md bg-[#DBDEE1] " style={{color: `${color}`}}></span>
            <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
            </div>
        ) : (
            <div onClick={(e) => onClickEventHandler(e, dispatch)} className={`sidebar-icon group`} name={name} style={{color: `${color}`}}>
            {icon}
            <span class="sidebar-leftsquare group-hover:scale-100"></span>
            <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
            </div>
        )
  ) 
  
};
export default SideBarIcon