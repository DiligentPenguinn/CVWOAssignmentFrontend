import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import {ThreadProps} from '../models/ThreadProps'

const Thread: React.FC<ThreadProps> = ({id, title, author, message, updatedAt }) => {
  return (
    <Card variant="outlined" style={{ margin: '16px' }}>
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
        <Typography variant="body1">
          {message}
        </Typography>

      </CardContent>
    </Card>
  );
};

export default Thread;
