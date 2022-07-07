import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Post as PostUI } from '@ui/main/posts/Post';
import { IPost } from '../../mocks/posts';
import { useGetPostMutation } from '../../store/api/postsApi';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { IErrorQuery } from '../../mocks/errorQuery';

export const Post = () => {
  const location = useLocation() as { state: { id: number } };
  const navigate = useNavigate();

  const [getPost, { data, isLoading, isError, error }] = useGetPostMutation();

  useEffect(() => {
    if (!location.state || !location.state.id) return;
    getPost({
      postId: location.state.id
    });
  }, []);

  const onShowUserPost = (id: string | number, username: string) => {
    navigate('/app/users_post', { state: { id: id, username: username } });
  };

  return (
    <PostUI
      post={data as unknown as { post: IPost | undefined }}
      onShowUserPost={onShowUserPost}
      loading={isLoading}
      error={getErrorMessage(isError, error as IErrorQuery)}
    />
  );
};
