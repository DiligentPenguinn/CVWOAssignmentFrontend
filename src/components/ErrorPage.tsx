import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ErrorIcon from '@mui/icons-material/Error';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data.message?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Paper
        sx={{
          padding: '16px',
          textAlign: 'center',
        }}
        elevation={3}
      >
        <ErrorIcon sx={{ fontSize: 64, color: 'red' }} />
        <Typography variant="h4" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="body1" paragraph>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <i>{errorMessage}</i>
        </Typography>
      </Paper>
    </Box>
  );
};

export default ErrorPage;
