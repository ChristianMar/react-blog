import React, { useEffect, useState } from 'react';
import { useTranslate } from 'react-polyglot';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useGetUserPostsMutation } from '../../store/api/postsApi';
import { PostsList as PostsListUI } from '@ui/main/posts/PostsList';
import { selectUserPostIds } from '../../store/slices/userPostsSlice';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { IErrorQuery } from '../../mocks/errorQuery';
import { PostUserItem } from './PostUserItem';

export const PostsUserList = () => {
  const location = useLocation() as { state: { id: number; username: string } };
  const [page, setPage] = useState(1);
  const t = useTranslate();
  const orderedPostIds = useSelector(selectUserPostIds);

  const [getUserPosts, { data, isLoading, error, isError }] =
    useGetUserPostsMutation();

  const loadPosts = (page: number) => {
    getUserPosts({
      limit: 50,
      page: page,
      userId: location.state.id
    });
  };

  useEffect(() => {
    loadPosts(page);
  }, []);

  useEffect(() => {
    loadPosts(page);
  }, [location.state.id]);

  const loadMorePosts = () => {
    setPage(page + 1);
    loadPosts(page + 1);
  };

  return (
    <PostsListUI
      loading={page === 1 ? isLoading : false}
      loadingMore={page !== 1 ? isLoading : false}
      error={getErrorMessage(isError, error as IErrorQuery)}
      hasNext={data?.cursor.next}
      loadMorePosts={loadMorePosts}
      username={location.state.username}
    >
      {orderedPostIds.map((postId) => (
        <PostUserItem key={postId} postId={postId} />
      ))}
    </PostsListUI>
  );
};
