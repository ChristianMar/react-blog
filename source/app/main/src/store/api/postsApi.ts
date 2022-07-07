import { createApi } from '@reduxjs/toolkit/query/react';

import {
  IPost,
  IPostGet,
  IPosts,
  IPostsGet,
  IPostUserGet
} from '../../mocks/posts';
import { emptyArray, postsReceived } from '../slices/allPostsSlice';
import { emptyUserArray, userPostsReceived } from '../slices/userPostsSlice';
import baseQueryWithRefresh from './query';

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Posts'],
  refetchOnMountOrArgChange: 30,
  endpoints: (builder) => ({
    getPosts: builder.mutation<IPosts<IPost>, IPostsGet>({
      query: (data) => ({
        url: '/posts/all_posts',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        if (arg.page === 1) dispatch(emptyArray());
        const response = await queryFulfilled;
        dispatch(postsReceived(response.data));
      }
    }),
    getUserPosts: builder.mutation<IPosts<IPost>, IPostUserGet>({
      query: (data) => ({
        url: '/posts/user_posts',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        if (arg.page === 1) dispatch(emptyUserArray());
        const response = await queryFulfilled;
        dispatch(userPostsReceived(response.data));
      }
    }),
    getPost: builder.mutation<IPost, IPostGet>({
      query: (data) => ({
        url: '/posts/get_post',
        method: 'POST',
        body: data
      })
    })
  })
});

export const {
  useGetPostsMutation,
  useGetUserPostsMutation,
  useGetPostMutation
} = postsApi;
