import React, { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, InputBase, Box } from '@mui/material';
import theme from '../models/Utils';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';


const CreateThread: React.FC = () => {
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('clicked!');
    navigate('/create');
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='primary'>

          <Toolbar>
            <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="secondary"
                    >
                <AccountCircle />
            </IconButton>

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
