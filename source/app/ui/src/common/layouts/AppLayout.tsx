import { ThemeProvider } from '@emotion/react';
import React, { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';

import customTheme from '../../styles/UITheme';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
