import React, { useState, useEffect, MouseEvent } from 'react';
import { Card, CardContent, TextField, Button, Typography, Box, Stack, Paper, Container, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [clickedTags, setClickedTags] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    navigate('/');
  };

  const handleChipClick = (tag: string) => {
    if (clickedTags.includes(tag)) {
      setClickedTags(clickedTags.filter(clickedTag => clickedTag !== tag));
    } else {
      setClickedTags([...clickedTags, tag]);
    }
  }

  const isClicked = (tag: string) => {
    return clickedTags.includes(tag);
  }

  

  useEffect(() => {
    let my_tags : string[] = ['tag1', 'tag2', 'tag3'];
    setTags(my_tags);
  }, [tags]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inputs if needed

    // Call the onSubmit callback with the thread data
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let requestOptions = {
        method: "GET",
        headers: headers,
    }

    // fetch(`http://localhost:8080/thread/${parsedId}`, requestOptions)
    // .then((response) => response.json())
    // .then((data) => {
    //     setThread(data);
    //     console.log(thread)
    // })
    // .catch(err => {
    //     console.log(err);
    // })
    // Clear the form after submission
    setTitle('');
    setBody('');
    console.log("submitted succesfully!")
    navigate("/");
  };

    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


  return (
      <Container component="main" maxWidth="xs">
        <Button 
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
            Sign Up
        </Button>
          <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
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
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="secondary">
                Sign Up
              </Button>
            </DialogActions>
            <Typography style={{ textAlign: 'center', marginTop: '10px' }}>
              Already have an account? <Link to={`somewhere`}>Login</Link>
            </Typography>
          </Dialog>
      </Container>
  );
};

export default SignUp;
