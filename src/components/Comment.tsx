import React from 'react';
import { Typography, Paper } from '@mui/material';
import { CommentProps } from '../models/CommentProps';


const Comment: React.FC<CommentProps> = ({ author, content }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '8px 0' }}>
      <Typography variant="subtitle1" color="textSecondary">
        {author}
      </Typography>
      <Typography>{content}</Typography>
    </Paper>
  );
};

export default Comment;
