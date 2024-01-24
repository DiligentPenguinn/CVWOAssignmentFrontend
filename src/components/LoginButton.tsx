import React, { useState, useEffect, MouseEvent, useContext } from 'react';
import { Card, CardContent, TextField, Button, Typography, Box, Stack, Paper, Container, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import { useJwtContext } from './Context';

const LoginButton: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const {setJwtToken, toggleRefresh} = useJwtContext();

  const navigate = useNavigate();

  useEffect(() => {
  }, [username]);
  
  const handleLoginRequest = () => {
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
              console.log(data.message)
                // setAlertClassName("alert-danger");
                // setAlertMessage(data.message);
            } else {
                setJwtToken(data.access_token);
                // setAlertClassName("d-none");
                // setAlertMessage("");
                toggleRefresh(true);
                navigate("/");
            }
        })
        .catch(error => {
          console.log(error);
            // setAlertClassName("alert-danger");
            // setAlertMessage(error);
        })
      // Clear the form after submission
      setUsername('');
      setPassword('');
      setEmail('');
      
      console.log("submitted succesfully!")
      handleClose();
  };

  const handleSignUpRequest = () => {
    console.log("Sign up!");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "login") {
      // User logs in
      handleLoginRequest();
    } else {
      // User signs up
      handleSignUpRequest();
    }
  };

    const [status, setStatus] = useState<string>("");
  
    const openLogin = () => {
      setStatus("login");
    };
  
    const handleClose = () => {
      setStatus("");
    };

    const openSignUp = () => {
      setStatus("signup");
    }


  return (
      <>
        <Button 
          variant="contained"
          color="primary"
          onClick={openLogin}
        >
            Login
        </Button>
          <Dialog open={status === "login"} onClose={handleClose} maxWidth="xs" fullWidth>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
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
                  id="password"
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

          <Dialog open={status === "signup"} onClose={handleClose} maxWidth="xs" fullWidth>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
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
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
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
                  id="password"
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
        </>
  );
};

export default LoginButton;
