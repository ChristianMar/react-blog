import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useTranslate } from 'react-polyglot';
import { useNavigate } from 'react-router-dom';

import { NoMatch } from './NoMatch';
import { Navbar } from '../../../ui/src/common/navigation/Navbar';
import { ILogged } from '../mocks/auth';
import { selectCurrentUser } from '../store/slices/userSlice';
import { MENU, USER_MENU } from '../config';
import { PostsList } from '../components/posts/PostsList';
import { UserContext } from '../context/UserContext';
import { Post } from '../components/posts/Post';
import { PostsUserList } from '../components/posts/PostsUserList';
import { UsersList } from '../components/users/UsersList';

export const LoggedLayout = () => {
  const user: ILogged = useSelector(selectCurrentUser);
  const userContext = useContext(UserContext);
  const t = useTranslate();
  const navigate = useNavigate();

  const onMenuClick = (id: string) => {
    switch (id) {
      case 'profile':
        navigate('/app/profile', {
          state: { id: user.id, username: user.username }
        });
        break;
      case 'users':
        navigate('/app/users');
        break;

      default:
        break;
    }
  };

  const onUserMenuClick = (id: string) => {
    switch (id) {
      case 'addPost':
        break;
      case 'logout':
        userContext.onLogout();
        break;

      default:
        break;
    }
  };

  const onHome = () => {
    navigate('/app/posts');
  };

  return (
    <React.Fragment>
      <Navbar
        icon={process.env.FAVICON}
        avatar={user.avatar}
        username={user.username}
        menu={MENU.map((item) => ({ ...item, label: t(item.label) }))}
        onMenuClick={onMenuClick}
        userMenu={USER_MENU.map((item) => ({ ...item, label: t(item.label) }))}
        onUserMenuClick={onUserMenuClick}
        onHome={onHome}
      />
      <Routes>
        <Route path="posts" element={<PostsList />} />
        <Route path="profile" element={<PostsUserList />} />
        <Route path="users_post" element={<PostsUserList />} />
        <Route path="users" element={<UsersList />} />
        <Route path="post" element={<Post />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </React.Fragment>
  );
};
