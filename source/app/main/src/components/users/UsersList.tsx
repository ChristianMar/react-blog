import React, { useContext } from 'react';

import { AllUsersContext } from '../../context/AllUsersContext';
import { UsersList as UsersListUI } from '@ui/main/users/UsersList';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { IErrorQuery } from '../../mocks/errorQuery';
import { UserItem } from './UserItem';
import {
  useGetUsersQuery,
  usersSelectors,
  usersAdapter
} from '../../store/slices/usersSlice';

export const UsersList = () => {
  const allUsersContext = useContext(AllUsersContext);

  const { isLoading, isFetching, isError, error } = useGetUsersQuery({
    limit: allUsersContext.limit,
    page: allUsersContext.page
  });

  const { cursor, usersIds } = useGetUsersQuery(
    {
      limit: allUsersContext.limit,
      page: allUsersContext.page
    },
    {
      selectFromResult: (result) => {
        return {
          cursor: result.data?.cursor,
          usersIds: usersSelectors.selectIds(
            result.data?.users ?? usersAdapter.getInitialState()
          )
        };
      }
    }
  );

  const loadNextUsers = () => {
    allUsersContext.loadNextUser();
  };

  const loadPrevUsers = () => {
    allUsersContext.loadPrevUser();
  };

  return (
    <UsersListUI
      loading={isLoading || isFetching}
      error={getErrorMessage(isError, error as IErrorQuery)}
      hasNext={cursor?.next}
      hasPrev={cursor?.prev}
      loadNextUsers={loadNextUsers}
      loadPrevUsers={loadPrevUsers}
    >
      {usersIds.map((userId) => (
        <UserItem key={userId} userId={userId} />
      ))}
    </UsersListUI>
  );
};
