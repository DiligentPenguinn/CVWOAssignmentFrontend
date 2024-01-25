import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Alert, Snackbar} from '@mui/material';
import { LoginFormProps } from '../models/LoginFormProps';
import { useJwtContext } from './Context';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC<LoginFormProps> = (props) => {

  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isUsernameError, setIsUsernameError] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false); 
  const {setJwtToken, toggleRefresh} = useJwtContext();

  const navigate = useNavigate();
  useEffect(() => {
  }, []);
  
  const handleClosePopUp = () => {
    setIsSuccessful(false);
  }
  const handleLoginRequest = () => {
    // Reset error
    setIsPasswordError(false);
    setIsUsernameError(false);
    let payload = {
      username: username,
      password: password,
    }

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(payload),
    };

    fetch(`http://localhost:8080/authenticate`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {

              setError(data.message);
              error.includes("password")
              ? setIsPasswordError(true)
              : setIsUsernameError(true)
            } else {
                setJwtToken(data.access_token);
                toggleRefresh(true);
                handleClose();
                console.log("submitted succesfully!")
                handleClose();
            }
        })
        .catch(error => {
          console.log(error);
        }) 
  };

  const handleSignUpRequest = () => {
    console.log("Sign up!");
    let payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: username,
      password: password,
    }

    const requestOptions: RequestInit = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      // credentials: 'include',
      body: JSON.stringify(payload),
    };

    fetch(`http://localhost:8080/signup`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
              console.log(data.message)
            } else {
              console.log("Sign up successfully");
              setIsSuccessful(true);
              props.setStatus("login");
            }
        })
        .catch(error => {
          console.log(error);
        })
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.status === "login") {
      // User logs in
      handleLoginRequest();
    } else {
      // User signs up
      handleSignUpRequest();
    }
  };
  
  const openLogin = () => {
    props.setStatus("login");
  };

  const handleClose = () => {
    props.setStatus("");
  };

  const openSignUp = () => {
    props.setStatus("signup");
  }
  
  return (
      <>
          <Dialog open={props.status === "login"} onClose={handleClose} maxWidth="xs" fullWidth>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Username"
                  name="username"
                  autoFocus
                  error={isUsernameError}
                  helperText={isUsernameError ? error: ''}
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  error={isPasswordError}
                  helperText={isPasswordError ? error: ''}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <DialogActions>
                  <Button onClick={handleClose} color="secondary">
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" color="secondary">
                    Log In
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
            <Typography style={{ textAlign: 'center', marginTop: '10px' }}>
              Don't have an account? 
              <Button variant="text" onClick={openSignUp} sx={{color:"blue"}} >
                  Sign Up
              </Button>
            </Typography>
          </Dialog>

          <Dialog open={props.status === "signup"} onClose={handleClose} maxWidth="xs" fullWidth>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="First Name"
                  name="firstName"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  autoFocus
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Username"
                  name="username"
                  autoFocus
                  error={isUsernameError}
                  helperText={isUsernameError ? error: ''}
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  error={isPasswordError}
                  helperText={isPasswordError ? error: ''}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <DialogActions>
                  <Button onClick={handleClose} color="secondary">
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" color="secondary">
                    Sign Up
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
            <Typography style={{ textAlign: 'center', marginTop: '10px' }}>
              Already have an account? 
              <Button 
                variant="text" 
                onClick={openLogin} 
                sx={{color:"blue"}}>
                  Login
              </Button>
            </Typography>
          </Dialog>
          <Snackbar open={isSuccessful} autoHideDuration={6000} onClose={handleClosePopUp}>
            <Alert onClose={handleClosePopUp} severity="success">
              Signup successfully!
            </Alert>
          </Snackbar>
        </>
  );
};

export default LoginForm;
