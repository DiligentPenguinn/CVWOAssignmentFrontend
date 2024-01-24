import React, { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, InputBase, Box } from '@mui/material';
import theme from '../models/Utils';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useJwtContext } from './Context';
import LoginForm from './LoginForm';

const CreateThread: React.FC = () => {
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const [status, setStatus] = useState<string>("");
  const handleClose = () => {
    setStatus("");
  }
  const {jwtToken} = useJwtContext();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('clicked!');
    if (jwtToken === "") {
      setStatus("login");
    } else {
      navigate('/create');
    }
  };


  return (
    
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <LoginForm status={status} setStatus={setStatus} handleClose={handleClose}/>
        <AppBar position="static" color='primary'>

          <Toolbar>
            {jwtToken !== "" 
            &&
            <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="secondary"
                    >
                <AccountCircle />
            </IconButton>
            }

              <InputBase
                placeholder = 'Create new thread...'
                onClick = {handleClick}
                onChange = {handleChange}
                fullWidth
              />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default CreateThread;
