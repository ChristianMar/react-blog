import React, { ReactNode } from 'react';
import { Button } from '@mui/material';

import { IErrorsType } from '../../mocks/errorsType';
import { ErrorList } from '../../common/components/ErrorList';
import { Spinner } from '../../common/components/Spinner';
import { LoadMore, PostTitleUsername } from './UIPosts';
import { LabelButton } from '../../common/inputs/LabelButton';

interface Props {
  loading: boolean;
  loadingMore: boolean;
  error?: IErrorsType;
  children: ReactNode;
  hasNext: boolean | undefined;
  loadMorePosts: () => void;
  username?: string;
}

export const PostsList = ({
  loading,
  loadingMore,
  error,
  children,
  hasNext,
  loadMorePosts,
  username
}: Props) => {
  return (
    <React.Fragment>
      <ErrorList errors={error} />
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {!username ? null : <PostTitleUsername>{username}</PostTitleUsername>}
          {children}
          <LoadMore>
            <Button onClick={loadMorePosts} disabled={!hasNext}>
              <LabelButton label={'LOAD MORE'} loading={loadingMore} />
            </Button>
          </LoadMore>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
