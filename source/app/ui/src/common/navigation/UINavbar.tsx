import { styled } from '@mui/system';

import { Colors } from '@ui/styles/UIColors';

export const NavbarContainer = styled('div')({
  minWidth: 400,
  width: '100%',
  backgroundColor: Colors.navbarColor,
  height: 65,
  boxShadow: `0 4px 0 0 ${Colors.navbarShadowColor}`,
  display: 'flex',
  flexDirection: 'row',
  padding: '0 35px',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const NavbarItem = styled('div')({
  width: 50,
  margin: 10,
  backgroundColor: Colors.postColor
});

export const NavbarIcon = styled('img')({
  height: 40,
  cursor: 'pointer'
});
