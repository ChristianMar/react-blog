import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { NoMatch } from './NoMatch';
import { Navbar } from './Navbar';
import { PostsProfileList } from '../components/posts/PostsProfileList';
import { AllUsersContextProvider } from '../context/AllUsersContext';
import { AllPostsContextProvider } from '../context/AllPostsContext';
import { UserPostsContextProvider } from '../context/UserPostsContext';
import { ModalContextProvider } from '../context/ModalContext';

export const LoggedLayout = () => {
  return (
    <React.Fragment>
      <AllPostsContextProvider>
        <UserPostsContextProvider>
          <AllUsersContextProvider>
            <ModalContextProvider>
              <Navbar />
              <Routes>
                <Route path="profile" element={<PostsProfileList />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </ModalContextProvider>
          </AllUsersContextProvider>
        </UserPostsContextProvider>
      </AllPostsContextProvider>
    </React.Fragment>
  );
};
