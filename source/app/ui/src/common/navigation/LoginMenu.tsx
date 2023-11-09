import { Button } from '@mui/material';
import React from 'react';

interface loginMenu {
  labels: {
    login: string;
    signup: string;
  };
  onLogin: () => void;
  onSignup: () => void;
}

export const LoginMenu = ({ labels, onLogin, onSignup }: loginMenu) => {
  return (
    <div>
      <Button variant="text" onClick={onLogin}>
        {labels.login}
      </Button>
      <Button variant="text" onClick={onSignup}>
        {labels.signup}
      </Button>
    </div>
  );
};
