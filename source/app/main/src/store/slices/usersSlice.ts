import {
  createEntityAdapter,
  EntityAdapter,
  EntityState
} from '@reduxjs/toolkit';

import { IUserItem, IUsers, IUsersGet } from '../../mocks/users';
import { usersApi } from '../api/usersApi';

export const usersAdapter: EntityAdapter<IUserItem> =
  createEntityAdapter<IUserItem>({
    selectId: (user) => user.id,
    sortComparer: (a, b) => a.username.localeCompare(b.username)
  });

const initialStateUsers = {
  cursor: {},
  users: usersAdapter.getInitialState({})
};

const initialStateMostImportantUsers = {
  mostImportantUser: usersAdapter.getInitialState({})
};

export const extendedUsersSlice = usersApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (data: IUsersGet) => ({
        url: '/users/all_users',
        method: 'POST',
        body: data,
        tagTypes: ['Users']
      }),
      transformResponse: (responseData: IUsers<IUserItem>) => {
        return {
          cursor: responseData.cursor,
          users: usersAdapter.addMany(
            initialStateUsers.users,
            responseData.users
          )
        };
      }
    }),
    getMostImportantUsers: builder.query({
      query: (data: IUsersGet) => ({
        url: '/users/most_important_users',
        method: 'POST',
        body: data,
        tagTypes: ['ImportantUsers']
      }),
      transformResponse: (responseData: IUsers<IUserItem>) => {
        return {
          mostImportantUser: usersAdapter.addMany(
            initialStateMostImportantUsers.mostImportantUser,
            responseData.users
          )
        };
      }
    })
  })
});

export const usersSelectors = usersAdapter.getSelectors<EntityState<IUserItem>>(
  (state) => state
);

export const { useGetUsersQuery, useGetMostImportantUsersQuery, endpoints } =
  extendedUsersSlice;
