import { createSlice } from '@reduxjs/toolkit';

// 로컬 스토리지에서 기존 값을 가져옴
const savedChannel = localStorage.getItem('nowChannel');

// initialState를 설정할 때, 로컬 스토리지에 값이 있으면 그 값을 사용하고, 없으면 "0"으로 초기화
const initialState = { 
  nowChannel: savedChannel !== null ? savedChannel : "0" 
};

const sidebarSlice = createSlice({
  name: 'sidebarState',
  initialState,
  reducers: {
    changeChannel: (state, action) => { state.nowChannel = action.payload;
    // 상태 변경 시 로컬 스토리지에 값 저장
    localStorage.setItem('nowChannel', action.payload);
    }
  }
});

export const { changeChannel } = sidebarSlice.actions;
export default sidebarSlice.reducer;