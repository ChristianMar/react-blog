import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { PostsList as PostsListUI } from '@ui/main/posts/PostsList';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { IErrorQuery } from '../../mocks/errorQuery';
import { PostUserItem } from './PostUserItem';
import {
  userPostsSelectors,
  userPostsAdapter,
  useGetTagPostsQuery
} from '../../store/slices/postsSlice';
import { IUserItem } from '@main/mocks/users';
import { TagPostsContext } from '@main/context/TagPostsContext';
import { PostItem } from './PostItem';
import { PostTagItem } from './PostTagItem';

export const PostsTagList = () => {
  const location = useLocation() as { state: { tag: string } };
  const navigate = useNavigate();
  const tagPostsContext = useContext(TagPostsContext);

  const { isLoading, isFetching, isError, error } = useGetTagPostsQuery({
    limit: tagPostsContext.limit,
    page: tagPostsContext.page,
    tag: location.state.tag
  });

  const { cursor, postsIds } = useGetTagPostsQuery(
    {
      limit: tagPostsContext.limit,
      page: tagPostsContext.page,
      tag: location.state.tag
    },
    {
      selectFromResult: (result) => {
        return {
          user: result.data?.user,
          cursor: result.data?.cursor,
          postsIds: userPostsSelectors.selectIds(
            result.data?.posts ?? userPostsAdapter.getInitialState()
          )
        };
      }
    }
  );

  const loadNextPosts = () => {
    tagPostsContext.loadNextUserPosts();
  };

  const loadPrevPosts = () => {
    tagPostsContext.loadPrevUserPosts();
  };

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <PostsListUI
      loading={isLoading || isFetching}
      error={getErrorMessage(isError, error as IErrorQuery)}
      hasNext={cursor?.next}
      hasPrev={cursor?.prev}
      loadNextPosts={loadNextPosts}
      loadPrevPosts={loadPrevPosts}
      onGoBack={onGoBack}
    >
      {postsIds.map((postId) => (
        <PostTagItem key={postId} postId={postId} />
      ))}
    </PostsListUI>
  );
};
