import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import onBoardingSlice from './src/reducerSlices/onBoardingSlice';
export const store = configureStore({
  reducer: {
    onBoardingSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
