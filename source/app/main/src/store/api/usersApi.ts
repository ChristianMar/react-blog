import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithRefresh from './query';

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Users', 'ImportantUsers'],
  endpoints: (builder) => ({})
});
