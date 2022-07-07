import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer
} from '@reduxjs/toolkit';

import { authApi } from './api/authApi';
import { postsApi } from './api/postsApi';
import { usersApi } from './api/usersApi';
import { loadState } from '../utils/reduxSyncStorage';
import userSlice from './slices/userSlice';
import allPostsSlice from './slices/allPostsSlice';
import userPostsSlice from './slices/userPostsSlice';
import usersSlice from './slices/usersSlice';

const combinedReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  user: userSlice,
  allPosts: allPostsSlice,
  userPosts: userPostsSlice,
  allUsers: usersSlice
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'auth/logout') {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.STAGE === 'dev',
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(postsApi.middleware)
      .concat(usersApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
