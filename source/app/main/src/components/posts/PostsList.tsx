import React, { useEffect, useState } from 'react';
import { useTranslate } from 'react-polyglot';
import { useSelector } from 'react-redux';

import { useGetPostsMutation } from '../../store/api/postsApi';
import { PostsList as PostsListUI } from '@ui/main/posts/PostsList';
import { selectPostIds } from '../../store/slices/allPostsSlice';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { IErrorQuery } from '../../mocks/errorQuery';
import { PostItem } from './PostItem';

export const PostsList = () => {
  const [page, setPage] = useState(1);
  const t = useTranslate();
  const orderedPostIds = useSelector(selectPostIds);

  const [getPosts, { data, isLoading, error, isError }] = useGetPostsMutation();

  const loadPosts = (page: number) => {
    getPosts({
      limit: 50,
      page: page
    });
  };

  useEffect(() => {
    loadPosts(page);
  }, []);

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
    >
      {orderedPostIds.map((postId) => (
        <PostItem key={postId} postId={postId} />
      ))}
    </PostsListUI>
  );
};
