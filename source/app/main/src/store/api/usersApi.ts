import { createApi } from '@reduxjs/toolkit/query/react';

import { IUserItem, IUsers, IUsersGet } from '../../mocks/users';
import { emptyUsersArray, usersReceived } from '../slices/usersSlice';
import baseQueryWithRefresh from './query';

export const usersApi = createApi({
  reducerPath: 'all_users',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.mutation<IUsers<IUserItem>, IUsersGet>({
      query: (data) => ({
        url: '/users/all_users',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(emptyUsersArray());
        const response = await queryFulfilled;
        dispatch(usersReceived(response.data));
      }
    })
  })
});

export const { useGetUsersMutation } = usersApi;
