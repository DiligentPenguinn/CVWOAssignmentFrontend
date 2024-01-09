import React from 'react';
import { Typography, Paper, Button, Card, CardContent, Box } from '@mui/material';
import { CommentProps } from '../models/CommentProps';
import UserInput from './input/UserInput';


const CommentInput: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('clicked!');
  };
  return (
    <>
      <Box>
        <UserInput 
          placeholder='Add a comment...'
          onChange={handleChange}
          onClick={handleClick}/>
        <Button variant="contained" color="primary">
          Comment
        </Button>
      </Box>
    </>
  );
};

export default CommentInput;
// Should divide the user input to smaller components: UserIcon, Input (maybe just TextField), Button
// Toggle disable/enable of the button according to the comment content state: content !== '' => enable