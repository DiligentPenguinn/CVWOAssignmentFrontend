import React from 'react';
import { Card, CardContent, Typography, Grid, Stack } from '@mui/material';
import Chip from '@mui/material/Chip';
import { ThreadProps } from '../models/ThreadProps';

const Thread: React.FC<ThreadProps> = ({id, title, body, updated_at, tags }) => {
  return (
    <Card variant="outlined" style={{margin: 16}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Typography variant="caption" color="textSecondary">
              Updated at: {updated_at}
            </Typography>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={1} sx={{marginBottom : 2}}>
            {tags && tags.map(tag => {
              return <Chip 
                      label={tag}
                      variant='outlined'
                      />
            })}
         </Stack>
        <Typography variant="body1">
          <div className='half-hidden'>
            {body}
          </div>
        </Typography>

      </CardContent>
    </Card>
  );
};

export default Thread;
