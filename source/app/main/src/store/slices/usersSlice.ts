import {
  createEntityAdapter,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';

import { IUserItem, IUsers } from '../../mocks/users';
import { RootState } from '../store';

const postsAdapter = createEntityAdapter<IUserItem>({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.username.localeCompare(b.username)
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    emptyUsersArray: (state) => {
      postsAdapter.setAll(state, []);
    },
    usersReceived: (state, { payload }: PayloadAction<IUsers<IUserItem>>) => {
      postsAdapter.setMany(state, payload.users);
    }
  }
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors<RootState>((state) => state.allUsers);

export const { emptyUsersArray, usersReceived } = usersSlice.actions;

export default usersSlice.reducer;
