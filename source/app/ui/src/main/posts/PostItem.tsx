import React from 'react';
import { format } from 'date-fns';

import { IPost } from '../../mocks/posts';
import {
  PostItem as PostItemUI,
  PostImage,
  PostImageContent,
  Post as PostUI,
  PostTitle,
  PostContent,
  PostDescription,
  PostUsername,
  PostTags,
  PostTag
} from './UIPosts';

interface Props {
  post: IPost;
  onShowUserPost: (arg0: string | number, arg1: string) => void;
  onShowTagPost: (arg0: string) => void;
  onShowPost: (arg0: string | number) => void;
}

export const PostItem = ({
  post,
  onShowUserPost,
  onShowPost,
  onShowTagPost
}: Props) => {
  return (
    <PostItemUI>
      {!post.image ? null : (
        <PostImage>
          <PostImageContent src={post.image} />
        </PostImage>
      )}
      <PostUI>
        <PostTags>
          {post.tags.map((tag, i) => (
            <>
              {i !== 0 ? ', ' : ''}
              <PostTag isFirst={i === 0} onClick={() => onShowTagPost(tag)}>
                {tag}
              </PostTag>
            </>
          ))}
        </PostTags>
        <PostTitle onClick={() => onShowPost(post.id)}>{post.title}</PostTitle>
        <PostContent>{post.post}</PostContent>
        <PostDescription>
          {format(new Date(post.createdAt), 'yyyy-MM-dd HH:mm')}
          <PostUsername
            onClick={() => onShowUserPost(post?.user?.id, post?.user?.username)}
          >
            {post?.user?.username}
          </PostUsername>
        </PostDescription>
      </PostUI>
    </PostItemUI>
  );
};
