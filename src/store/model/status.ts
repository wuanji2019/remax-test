import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface CounterState {
  statusLoading: boolean;
  statusLoadProgress: boolean;
}

const initialState: CounterState = {
  statusLoading: false,
  statusLoadProgress: false
};

export const STATUS_FEATURE_KEY = 'status';

const { reducer: statusReducer, actions } = createSlice({
  name: STATUS_FEATURE_KEY,
  initialState,
  reducers: {
    setStatusLoading(state, action: PayloadAction<boolean>) {
      state.statusLoading = action.payload;
    },
    setStatusLoadProgress(state, action: PayloadAction<boolean>) {
      state.statusLoadProgress = action.payload;
    }
  }
});

export const { setStatusLoading, setStatusLoadProgress } = actions;

export default statusReducer;
