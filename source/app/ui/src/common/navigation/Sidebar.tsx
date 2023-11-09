import React, { ReactNode } from 'react';

import { SidebarContainer } from './UISidebar';

interface sidebar {
  // labels: {
  //   login: string;
  //   signup: string;
  // };
  // logged: boolean;
  // icon?: string;
  // avatar: string;
  // username: string;
  // userMenu: {
  //   id: string;
  //   label: string;
  // }[];
  // onUserMenuClick: (id: string) => void;
  // onHome: () => void;
  // onLogin: () => void;
  // onSignup: () => void;
  children: ReactNode;
}

export const Sidebar = ({
  // labels,
  // logged,
  // icon,
  // avatar,
  // username,
  // userMenu,
  // onUserMenuClick,
  // onHome,
  // onLogin,
  // onSignup,
  children
}: sidebar) => {
  return <SidebarContainer>{children}</SidebarContainer>;
};
