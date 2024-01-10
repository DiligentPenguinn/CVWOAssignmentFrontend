import React, { ChangeEvent, MouseEvent, MouseEventHandler, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, InputBase, Box, IconButton } from '@mui/material';
import theme from '../models/Utils';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Send } from '@mui/icons-material';

interface CommentInputProps {
  handleButtonClick : MouseEventHandler;
}

const CommentInput: React.FC<CommentInputProps> = ({handleButtonClick}) => {
  const [comment, setComment] = useState<string>('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
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
                placeholder = 'Add comment...'
                onChange = {handleChange}
                fullWidth
                multiline
                minRows={1}
              />
            <IconButton 
              onClick={handleButtonClick}
              disabled={comment === ''}
            >
              <Send color={comment === '' ? 'primary' : 'secondary'}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default CommentInput;

// How comment and thread are related -- what does the database look like?