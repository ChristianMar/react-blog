import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithRefresh from './query';

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: baseQueryWithRefresh,
  keepUnusedDataFor: 30,
  refetchOnMountOrArgChange: false,
  tagTypes: ['Posts', 'Post', 'UserPost'],
  endpoints: (builder) => ({})
});
