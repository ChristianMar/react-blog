import React from 'react';
import { format } from 'date-fns';
import { Button, IconButton } from '@mui/material';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import { useTranslate } from 'react-polyglot';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { IPost } from '../../mocks/posts';
import {
  PostBig,
  PostBigContent,
  PostBigDescription,
  PostBigImage,
  PostBigImageContent,
  PostBigTitle,
  PostUsername,
  BackButton,
  PostButton,
  PostTags,
  PostTag,
  Post as PostUI
} from './UIPosts';
import { IErrorsType } from '../../mocks/errorsType';
import { Spinner } from '../../common/components/Spinner';
import { ErrorList } from '../../common/components/ErrorList';

interface Props {
  post: { post?: IPost };
  onShowUserPost: (arg0: string | number, arg1: string) => void;
  onShowTagPost: (arg0: string) => void;
  loading: boolean;
  error?: IErrorsType;
  loadingDelete: boolean;
  errorDelete?: IErrorsType;
  onGoBack?: () => void;
  userId: string | number;
  onEditPost: () => void;
  onDeletePost: () => void;
}

export const Post = ({
  post,
  onShowUserPost,
  onShowTagPost,
  loading,
  error,
  loadingDelete,
  errorDelete,
  onGoBack,
  userId,
  onEditPost,
  onDeletePost
}: Props) => {
  const t = useTranslate();
  const item = !post ? null : post.post;

  return (
    <React.Fragment>
      <ErrorList errors={error || errorDelete} />
      <BackButton>
        {!onGoBack ? null : (
          <Button startIcon={<ArrowBackIos />} onClick={onGoBack}>
            {t('common.back')}
          </Button>
        )}
        {!item ? null : userId !== item.userId ? null : (
          <PostButton>
            <IconButton onClick={onDeletePost}>
              {!loadingDelete ? <DeleteIcon /> : <Spinner size={25} />}
            </IconButton>
            <IconButton onClick={onEditPost}>
              <EditIcon />
            </IconButton>
          </PostButton>
        )}
      </BackButton>
      {loading ? (
        <Spinner />
      ) : !item ? null : (
        <PostBig>
          {!item.image ? null : (
            <PostBigImage>
              <PostBigImageContent src={item.image} />
            </PostBigImage>
          )}
          <PostUI>
            <PostTags>
              {item.tags.map((tag, i) => (
                <>
                  {i !== 0 ? ', ' : ''}
                  <PostTag isFirst={i === 0} onClick={() => onShowTagPost(tag)}>
                    {tag}
                  </PostTag>
                </>
              ))}
            </PostTags>
            <PostBigTitle>{item.title}</PostBigTitle>
            <PostBigContent>{item.post}</PostBigContent>
            <PostBigDescription>
              {format(new Date(item.createdAt), 'yyyy-MM-dd HH:mm')}
              <PostUsername
                onClick={() =>
                  onShowUserPost(item.user?.id, item.user?.username)
                }
              >
                {item.user?.username}
              </PostUsername>
            </PostBigDescription>
          </PostUI>
        </PostBig>
      )}
    </React.Fragment>
  );
};
