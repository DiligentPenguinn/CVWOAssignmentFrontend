// src/Message.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface MessageProps {
  author: string;
  content: string;
}

const Message: React.FC<MessageProps> = ({ author, content }) => {
  return (
    <Card variant="outlined" style={{ margin: '8px' }}>
      <CardContent>
        <Typography variant="body1">
          <strong>{author}:</strong> {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Message;
