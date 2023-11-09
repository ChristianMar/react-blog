import React, { useState, useEffect } from 'react';
import { I18n } from 'react-polyglot';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { it } from '../i18n/it';
import { en } from '../i18n/en';
import { AppLayout as AppLayoutUI } from '../../../ui/src/common/layouts/AppLayout';
import { UserContextProvider } from '../context/UserContext';
import LanguageContext from '../context/LanguageContext';
import { ErrorHandler } from './ErrorHandler';
import { NoMatch } from './NoMatch';
import { ILogged } from '../mocks/auth';
import { selectCurrentUser } from '../store/slices/userSlice';
import { Navbar } from './Navbar';
import { PostsList } from '../components/posts/PostsList';
import { PostsUserList } from '@main/components/posts/PostsUserList';
import { UsersList } from '@main/components/users/UsersList';
import { Post } from '@main/components/posts/Post';
import { AllPostsContextProvider } from '@main/context/AllPostsContext';
import { UserPostsContextProvider } from '@main/context/UserPostsContext';
import { AllUsersContextProvider } from '@main/context/AllUsersContext';
import { ModalContextProvider } from '@main/context/ModalContext';
import { TagPostsContextProvider } from '@main/context/TagPostsContext';
import { PostsTagList } from '@main/components/posts/PostsTagList';

const languages = {
  it: it,
  en: en
};

export const AppLayout = () => {
  const user: ILogged = useSelector(selectCurrentUser);
  const [language, setLanguage] = useState('en');
  const [messages, setMessages] = useState(en);
  const [error, setError] = useState(false);

  const getLanguage = () => {
    if (!user.token) {
      if (!navigator) return;
      if (navigator.languages[0] !== 'it' && navigator.languages[0] !== 'en')
        return;
      const lang = navigator.languages[0];
      setLanguage(lang);
      setMessages(languages[lang]);
    } else {
      const lang =
        user.language !== 'en' && user.language !== 'it' ? 'en' : user.language;
      setLanguage(lang);
      setMessages(languages[lang]);
    }
  };

  useEffect(() => {
    getLanguage();
  }, []);

  useEffect(() => {
    if (user.token) getLanguage();
  }, [user.token]);

  return (
    <AppLayoutUI>
      <I18n locale={language} messages={messages}>
        <UserContextProvider>
          <LanguageContext.Provider
            value={{
              language: language
            }}
          >
            <ErrorBoundary
              FallbackComponent={ErrorHandler}
              onReset={() => setError(false)}
              resetKeys={[error]}
            >
              <AllPostsContextProvider>
                <UserPostsContextProvider>
                  <TagPostsContextProvider>
                    <AllUsersContextProvider>
                      <ModalContextProvider>
                        <Navbar />
                        <Routes>
                          <Route path="/">
                            <Route path="/" element={<PostsList />} />
                            <Route
                              path="users_post"
                              element={<PostsUserList />}
                            />
                            <Route
                              path="tags_post"
                              element={<PostsTagList />}
                            />
                            <Route path="users" element={<UsersList />} />
                            <Route path="post" element={<Post />} />
                            <Route path="*" element={<NoMatch />} />
                          </Route>
                        </Routes>
                      </ModalContextProvider>
                    </AllUsersContextProvider>
                  </TagPostsContextProvider>
                </UserPostsContextProvider>
              </AllPostsContextProvider>
            </ErrorBoundary>
          </LanguageContext.Provider>
        </UserContextProvider>
      </I18n>
    </AppLayoutUI>
  );
};
