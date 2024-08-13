import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';

export const store = configureStore({
  reducer: {
    sidebarState: sidebarReducer
  }
});