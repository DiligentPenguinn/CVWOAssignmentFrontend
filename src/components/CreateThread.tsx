import React from 'react';
import {  } from 'react-router-dom';
import { AppBar, Toolbar, InputBase, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const CreateThread: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <InputBase
          placeholder="Create a new thread..."
          inputProps={{ 'aria-label': 'create a new thread' }}
          fullWidth
        />
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CreateThread;
