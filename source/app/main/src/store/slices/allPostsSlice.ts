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

export const postsSlice = createSlice({
  name: 'all_post',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    emptyArray: (state) => {
      postsAdapter.setAll(state, []);
    },
    postsReceived: (state, { payload }: PayloadAction<IPosts<IPost>>) => {
      postsAdapter.setMany(state, payload.posts);
    }
  }
});

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors<RootState>((state) => state.allPosts);

export const { emptyArray, postsReceived } = postsSlice.actions;

export default postsSlice.reducer;
