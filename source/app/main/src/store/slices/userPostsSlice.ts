import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import { IPost, IPosts } from '../../mocks/posts';
import { RootState } from '../store';

const postsAdapter = createEntityAdapter<IPost>({
  selectId: (post) => post.id,
  sortComparer: (a, b) =>
    a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0
});

export const userPostsSlice = createSlice({
  name: 'user_post',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    emptyUserArray: (state) => {
      postsAdapter.setAll(state, []);
    },
    userPostsReceived: (state, { payload }: PayloadAction<IPosts<IPost>>) => {
      postsAdapter.setMany(state, payload.posts);
    }
  }
});

export const {
  selectAll: selectUserAllPosts,
  selectById: selectUserPostById,
  selectIds: selectUserPostIds
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors<RootState>((state) => state.userPosts);

export const { emptyUserArray, userPostsReceived } = userPostsSlice.actions;

export default userPostsSlice.reducer;
