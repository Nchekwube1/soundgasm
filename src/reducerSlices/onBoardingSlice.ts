import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OnboardingState} from '../constants/types';

const initialState: OnboardingState = {
  firstTime: true,
};

export const onboardSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    onBoardViewed: (state: OnboardingState, action: PayloadAction<boolean>) => {
      state.firstTime = action.payload;
    },
  },
});

export const {onBoardViewed} = onboardSlice.actions;
export default onboardSlice.reducer;
