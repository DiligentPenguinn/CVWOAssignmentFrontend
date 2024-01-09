import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreateThreadForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clicked!');
    navigate('/');
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inputs if needed

    // Call the onSubmit callback with the thread data

    // Clear the form after submission
    setTitle('');
    setBody('');
  };

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', margin: 4}}>
    <Card variant='outlined' sx={{width:'80%'}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Create a New Thread
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ '& .MuiTextField-root': { marginBottom: 2 } }}>
            <TextField
              fullWidth
              required
              id="title"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              multiline
              minRows={1}
            />
            <TextField
              fullWidth
              required
              id="body"
              label="Body"
              variant="outlined"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              multiline
              minRows={4}
            />
          </Box>
          <Box >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button variant="contained" color="secondary" sx={{marginLeft: 2}} onClick={handleOnClick}>
              Cancel
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  </Box>
  );
};

export default CreateThreadForm;
