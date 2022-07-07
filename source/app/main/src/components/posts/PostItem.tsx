import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

import { selectPostById } from '../../store/slices/allPostsSlice';
import { PostItem as PostItemUI } from '@ui/main/posts/PostItem';
import { IPost } from '../../mocks/posts';

export const PostItem = ({ postId }: { postId: string | number }) => {
  const post = useSelector((state: RootState) => selectPostById(state, postId));
  const navigate = useNavigate();

  const onShowUserPost = (id: string | number, username: string) => {
    navigate('/app/users_post', { state: { id: id, username: username } });
  };

  const onShowPost = (id: string | number) => {
    navigate('/app/post', { state: { id: id } });
  };

  return (
    <PostItemUI
      post={post as IPost}
      onShowUserPost={onShowUserPost}
      onShowPost={onShowPost}
    />
  );
};
