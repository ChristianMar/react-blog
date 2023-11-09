import { ITags } from '@main/mocks/tags';
import { tagsApi } from '../api/tagsApi';

export const extendedTagsSlice = tagsApi.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query({
      query: () => ({
        url: '/tags/all_tags',
        method: 'POST',
        tagTypes: ['Tags']
      }),
      transformResponse: (responseData: ITags) => {
        return {
          tags: responseData.tags
        };
      }
    }),
    getImportantTags: builder.query({
      query: () => ({
        url: '/tags/most_used_tags',
        method: 'POST',
        tagTypes: ['ImportantTags']
      }),
      transformResponse: (responseData: ITags) => {
        return {
          importantTags: responseData.tags
        };
      }
    })
  })
});

export const { useGetTagsQuery, useGetImportantTagsQuery, endpoints } =
  extendedTagsSlice;
