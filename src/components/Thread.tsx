import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { ThreadProps } from '../models/ThreadProps';

const Thread: React.FC<ThreadProps> = ({ id, title, author, message, updatedAt, tags }) => {
  return (
    <Card variant="outlined" style={{margin: 16}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="subtitle1" color="textSecondary">
              Posted by {author}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="textSecondary">
              Updated at: {updatedAt}
            </Typography>
          </Grid>
        </Grid>
        <Typography>
          Tags: {tags && tags.map(tag => `${tag} `)}
        </Typography>
        <Typography variant="body1">
          <div className='half-hidden'>
            {message}
          </div>
        </Typography>

      </CardContent>
    </Card>
  );
};

export default Thread;
