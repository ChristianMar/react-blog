import React, { useEffect, useState } from 'react';
import { useTranslate } from 'react-polyglot';
import { useSelector } from 'react-redux';

import { UsersList as UsersListUI } from '@ui/main/users/UsersList';
import { getErrorMessage } from '../../utils/getErrorMessage';
import { IErrorQuery } from '../../mocks/errorQuery';
import { UserItem } from './UserItem';
import { useGetUsersMutation } from '../../store/api/usersApi';
import { selectUsersIds } from '../../store/slices/usersSlice';

export const UsersList = () => {
  const [page, setPage] = useState(1);
  const t = useTranslate();
  const orderedUsersIds = useSelector(selectUsersIds);

  const [getUsers, { data, isLoading, error, isError }] = useGetUsersMutation();

  const loadPosts = (page: number) => {
    getUsers({
      limit: 50,
      page: page
    });
  };

  useEffect(() => {
    loadPosts(page);
  }, []);

  const loadNextUsers = () => {
    setPage(page + 1);
    loadPosts(page + 1);
  };

  const loadPrevUsers = () => {
    setPage(page - 1);
    loadPosts(page - 1);
  };

  return (
    <UsersListUI
      loading={isLoading}
      error={getErrorMessage(isError, error as IErrorQuery)}
      hasNext={data?.cursor.next}
      hasPrev={data?.cursor.prev && page !== 1}
      loadNextUsers={loadNextUsers}
      loadPrevUsers={loadPrevUsers}
    >
      {orderedUsersIds.map((userId) => (
        <UserItem key={userId} userId={userId} />
      ))}
    </UsersListUI>
  );
};
