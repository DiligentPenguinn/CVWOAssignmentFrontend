import React from 'react';
import { Button } from '@mui/material';
import { useLoginFormContext } from './Context';
import LoginForm from './LoginForm';

const LoginButton: React.FC = () => {
  const {status, setStatus, handleClose} = useLoginFormContext();
  
  const openLogin = () => {
      setStatus("login");
  };

  
  return (
      <>
        <Button 
          variant="contained"
          color="primary"
          onClick={openLogin}
        >
            Login
        </Button>
        <LoginForm 
          status={status}
          setStatus={setStatus}
          handleClose={handleClose}
          />
        </>
  );
};

export default LoginButton;
