import React from 'react';
import { getAuth } from 'firebase/auth';
import '../index.css';
import SideBar from 'components/SideBar';

const Home = () => {
  const auth = getAuth();
  const onLogOutClick = () => auth.signOut();
  // const nowChannel = useSelector((state) => state.sidebarState.nowChannel);
  // console.log(nowChannel);

  return (
    <div className='flex'>
      {/* 좌측 서버 NavBar */}
      <SideBar />

      <div className='main-wrapper'>
        <div className='header-tab'>
          <div>왼쪽 세션</div>
          <div>메인 세션</div>
        </div>
        <div>
          <form>
            <input type='text' placeholder='대화 찾기 또는 시작하기'></input>
          </form>
          <div>
            <div>
              <p>다이렉트 메시지</p>
              <span>+</span>
            </div>
            <div>
              <span>아이콘</span>
              <span>사용자명</span>
            </div>
          </div>
        </div>
      </div>
      

      <button onClick={onLogOutClick}>Log Out</button>
    </div>
  )
}

export default Home