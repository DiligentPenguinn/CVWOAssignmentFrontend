import React, { useState, useEffect, MouseEvent } from 'react';
import { Card, CardContent, TextField, Button, Typography, Box, Stack} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';

const ThreadInput: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [clickedTags, setClickedTags] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('clicked!');
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
          <Stack direction="row" spacing={1} sx={{marginBottom : 2}}>
            {tags && tags.map(tag => {
              return <Chip 
                      label={tag} 
                      onClick={() => handleChipClick(tag)} 
                      variant={isClicked(tag) ? 'filled' : 'outlined'}/>
            })}
         </Stack>
          <Box >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button variant="contained" color="secondary" sx={{marginLeft: 2}} onClick={handleClick}>
              Cancel
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  </Box>
  );
};

export default ThreadInput;
