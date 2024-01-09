import React, { ChangeEvent, MouseEventHandler } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, InputBase, Box } from '@mui/material';
import theme from '../../models/Utils';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface UserInputProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;

}
const UserInput: React.FC<UserInputProps> = (props) => {
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
                placeholder = {props.placeholder}
                onClick = {props.onClick}
                onChange = {props.onChange}
                fullWidth
              />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default UserInput;
