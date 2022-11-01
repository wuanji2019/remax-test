import { configureStore } from '@reduxjs/toolkit';
import statusReducer, { STATUS_FEATURE_KEY } from './model/status';
import settingReducer, { SETTING_FEATURE_KEY } from './model/setting';

const store = configureStore({
  reducer: {
    [STATUS_FEATURE_KEY]: statusReducer,
    [SETTING_FEATURE_KEY]: settingReducer
  },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
