import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { UserPostsContext } from '../../context/UserPostsContext';
import { PostItem as PostItemUI } from '@ui/main/posts/PostItem';
import { IPost } from '../../mocks/posts';
import {
  useGetUserPostsQuery,
  userPostsSelectors,
  userPostsAdapter,
  useGetTagPostsQuery
} from '../../store/slices/postsSlice';

export const PostTagItem = ({ postId }: { postId: string | number }) => {
  const location = useLocation() as { state: { tag: string } };
  const userPostsContext = useContext(UserPostsContext);
  const navigate = useNavigate();

  const { post } = useGetTagPostsQuery(
    {
      limit: userPostsContext.limit,
      page: userPostsContext.page,
      tag: location.state.tag
    },
    {
      selectFromResult: (result) => {
        return {
          post: userPostsSelectors.selectById(
            result.data?.posts ?? userPostsAdapter.getInitialState(),
            postId
          )
        };
      }
    }
  );

  const onShowUserPost = (id: string | number, username: string) => {
    navigate('/users_post', { state: { id: id, username: username } });
  };

  const onShowTagPost = (tag: string) => {
    navigate('/tags_post', { state: { tag: tag } });
  };

  const onShowPost = (id: string | number) => {
    navigate('/post', { state: { id: id } });
  };

  return (
    <PostItemUI
      post={post as IPost}
      onShowUserPost={onShowUserPost}
      onShowPost={onShowPost}
      onShowTagPost={onShowTagPost}
    />
  );
};
