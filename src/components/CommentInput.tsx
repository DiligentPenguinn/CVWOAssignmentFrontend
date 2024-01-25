import React, { ChangeEvent, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, InputBase, Box, IconButton } from '@mui/material';
import theme from '../models/Utils';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Send } from '@mui/icons-material';
import { useJwtContext, useLoginFormContext } from './Context';
import LoginForm from './LoginForm';

interface CommentInputProps {
  ID: number;
  type: string;
}
const CommentInput: React.FC<CommentInputProps> = ({ID, type}) => {
  const [comment, setComment] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const {status, setStatus, handleClose} = useLoginFormContext();
  const {jwtToken} = useJwtContext();

  const handleButtonClick = () => {
    if (jwtToken === "") {
      setStatus("login");
    } else {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + jwtToken);

    let payload = {
      body: comment,
      parent_id: ID,
    }

    let requestOptions : RequestInit = {
      body: JSON.stringify(payload),
      method: "PUT",
      headers: headers,
      credentials: "include",
    };

    fetch(`http://localhost:8080/create/${type}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.message);
        } else {
          setComment("");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <LoginForm status={status} setStatus={setStatus} handleClose={handleClose}/>
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

