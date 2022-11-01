import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface TokenState {
  token: string;
}

const initialState: TokenState = {
  token: ''
};

export const STATUS_FEATURE_KEY = 'state';

const { reducer: tokenReducer, actions } = createSlice({
  name: STATUS_FEATURE_KEY,
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    }
  }
});

export const { setToken } = actions;

export default tokenReducer;
