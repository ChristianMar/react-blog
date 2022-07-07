import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

import { selectUserById } from '../../store/slices/usersSlice';
import { UserItem as UserItemUI } from '@ui/main/users/UserItem';
import { IUserItem } from '../../mocks/users';

export const UserItem = ({ userId }: { userId: string | number }) => {
  const user = useSelector((state: RootState) => selectUserById(state, userId));
  const navigate = useNavigate();

  const onShowUserPost = (id: string | number, username: string) => {
    navigate('/app/users_post', { state: { id: id, username: username } });
  };

  return (
    <UserItemUI user={user as IUserItem} onShowUserPost={onShowUserPost} />
  );
};
