import { createApi } from '@reduxjs/toolkit/query/react';

import baseQueryWithRefresh from './query';

export const tagsApi = createApi({
  reducerPath: 'tags',
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Tags', 'ImportantTags'],
  endpoints: (builder) => ({})
});
