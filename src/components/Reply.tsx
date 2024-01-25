import React from 'react';
import { Typography, Card, CardContent, Button, Box } from '@mui/material';
import { CommentProps } from '../models/CommentProps';

const Reply: React.FC<CommentProps> = ({ body}) => {
  return (
    <Card style={{ margin: '8px 0', border: 'none'}}>
      <CardContent>
        <Typography>{body}</Typography>
      </CardContent>
    </Card>
  );
};

export default Reply;
