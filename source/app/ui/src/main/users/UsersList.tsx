import React, { ReactNode } from 'react';
import { Button } from '@mui/material';

import { IErrorsType } from '../../mocks/errorsType';
import { ErrorList } from '../../common/components/ErrorList';
import { Spinner } from '../../common/components/Spinner';
import { LoadMore } from './UIUsers';
import { LabelButton } from '../../common/inputs/LabelButton';

interface Props {
  loading: boolean;
  error?: IErrorsType;
  children: ReactNode;
  hasNext: boolean | undefined;
  hasPrev: boolean | undefined;
  loadNextUsers: () => void;
  loadPrevUsers: () => void;
}

export const UsersList = ({
  loading,
  error,
  children,
  hasNext,
  hasPrev,
  loadNextUsers,
  loadPrevUsers
}: Props) => {
  return (
    <React.Fragment>
      <ErrorList errors={error} />
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {children}
          <LoadMore>
            <Button onClick={loadPrevUsers} disabled={!hasPrev}>
              <LabelButton label={'PREV'} />
            </Button>
            <Button onClick={loadNextUsers} disabled={!hasNext}>
              <LabelButton label={'NEXT'} />
            </Button>
          </LoadMore>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
