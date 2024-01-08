import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, InputBase, Box } from '@mui/material';
import theme from '../models/Utils';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

const CreateThread: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='primary' style={{margin: '16 0 16 0'}}>

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
                placeholder="Create a new thread..."
                inputProps={{ 'aria-label': 'create a new thread' }}
                fullWidth
              />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default CreateThread;
