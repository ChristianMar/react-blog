import React from 'react';
import { Container } from '@mui/system';
import { AppBar, Toolbar } from '@mui/material';

import { NavbarContainer, NavbarIcon, NavbarItem } from './UINavbar';
import { UserMenu } from './UserMenu';
import { NavigationMenu } from './NavigationMenu';
import { LoginMenu } from './LoginMenu';

interface navbar {
  labels: {
    login: string;
    signup: string;
  };
  logged: boolean;
  icon?: string;
  avatar: string;
  username: string;
  menu: {
    id: string;
    label: string;
  }[];
  onMenuClick: (id: string) => void;
  userMenu: {
    id: string;
    label: string;
  }[];
  onUserMenuClick: (id: string) => void;
  onHome: () => void;
  onLogin: () => void;
  onSignup: () => void;
}

export const Navbar = ({
  labels,
  logged,
  icon,
  avatar,
  username,
  menu,
  onMenuClick,
  userMenu,
  onUserMenuClick,
  onHome,
  onLogin,
  onSignup
}: navbar) => {
  console.log('logged', logged);
  return (
    <NavbarContainer>
      {!icon ? null : (
        <NavbarIcon src={`data:image/png;base64,${icon}`} onClick={onHome} />
      )}
      {!logged ? (
        <LoginMenu labels={labels} onLogin={onLogin} onSignup={onSignup} />
      ) : (
        <UserMenu
          avatar={avatar}
          username={username}
          userMenu={userMenu}
          onUserMenuClick={onUserMenuClick}
        />
      )}
    </NavbarContainer>
  );
  // return (
  //   <AppBar position="static">
  //     <Container maxWidth="xl">
  //       <Toolbar disableGutters>
  //         {!icon ? null : (
  //           <NavbarIcon
  //             src={`data:image/png;base64,${icon}`}
  //             onClick={onHome}
  //           />
  //         )}
  //         <NavigationMenu menu={menu} onMenuClick={onMenuClick} />
  //         {!logged ? (
  //           <LoginMenu labels={labels} onLogin={onLogin} onSignup={onSignup} />
  //         ) : (
  //           <UserMenu
  //             avatar={avatar}
  //             username={username}
  //             userMenu={userMenu}
  //             onUserMenuClick={onUserMenuClick}
  //           />
  //         )}
  //       </Toolbar>
  //     </Container>
  //   </AppBar>
  // );
};
