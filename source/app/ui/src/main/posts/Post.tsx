import React from 'react';
import { format } from 'date-fns';

import { IPost } from '../../mocks/posts';
import {
  PostBig,
  PostBigContent,
  PostBigDescription,
  PostBigImage,
  PostBigImageContent,
  PostBigTitle,
  PostUsername
} from './UIPosts';
import { IErrorsType } from '../../mocks/errorsType';
import { Spinner } from '../../common/components/Spinner';
import { ErrorList } from '../../common/components/ErrorList';

interface Props {
  post: { post?: IPost };
  onShowUserPost: (arg0: string | number, arg1: string) => void;
  loading: boolean;
  error?: IErrorsType;
}

export const Post = ({ post, onShowUserPost, loading, error }: Props) => {
  const item = !post ? null : post.post;

  return (
    <React.Fragment>
      <ErrorList errors={error} />
      {loading ? (
        <Spinner />
      ) : !item ? null : (
        <PostBig>
          {!item.image ? null : (
            <PostBigImage>
              <PostBigImageContent src={item.image} />
            </PostBigImage>
          )}
          <PostBigTitle>{item.title}</PostBigTitle>
          <PostBigContent>{item.post}</PostBigContent>
          <PostBigDescription>
            {format(new Date(item.createdAt), 'yyyy-MM-dd HH:mm')}
            <PostUsername
              onClick={() => onShowUserPost(item.user?.id, item.user?.username)}
            >
              {item.user?.username}
            </PostUsername>
          </PostBigDescription>
        </PostBig>
      )}
    </React.Fragment>
  );
};
