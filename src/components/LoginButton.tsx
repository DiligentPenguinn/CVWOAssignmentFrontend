import React, { useState, useEffect, MouseEvent, useContext } from 'react';
import { Card, CardContent, TextField, Button, Typography, Box, Stack, Paper, Container, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import { useJwtContext } from './Context';
import LoginForm from './LoginForm';

const LoginButton: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  
  const openLogin = () => {
      setStatus("login");
  };
  
  const handleClose = () => {
      setStatus("");
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
