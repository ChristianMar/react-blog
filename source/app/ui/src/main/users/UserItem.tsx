import React from 'react';

import { IUserItem } from '../../mocks/users';
import {
  UserItem as UserItemUI,
  UserElement,
  UserImage,
  UserImageContent,
  User,
  Username,
  Name
} from './UIUsers';

interface Props {
  user: IUserItem;
  onShowUserPost: (arg0: string | number, arg1: string) => void;
}

export const UserItem = ({ user, onShowUserPost }: Props) => {
  return (
    <UserItemUI>
      <UserElement>
        {!user.avatar ? null : (
          <UserImage>
            <UserImageContent src={user.avatar} />
          </UserImage>
        )}
        <User full={!user.avatar ? true : false}>
          <Username onClick={() => onShowUserPost(user.id, user.username)}>
            {user.username}
          </Username>
          <Name>{`${user.firstName} ${user.lastName}`}</Name>
        </User>
      </UserElement>
    </UserItemUI>
  );
};
