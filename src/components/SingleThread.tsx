import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Thread from './Thread';
import Comment from './Comment'; // Import the Comment component
import { ThreadProps } from '../models/ThreadProps';
import { Typography } from '@mui/material';

const SingleThread: React.FC = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const [thread, SetThread] = useState<ThreadProps>({
    id: 0,
    title: '',
    author: '',
    message: '',
    updatedAt: ''
  });
  useEffect(() => {
    let parsedThreadId: number = 0
    if (threadId) {
      parsedThreadId = parseInt(threadId, 10);
    } 
    let myThread: ThreadProps = {
      id: parsedThreadId,
      title: "Testing",
      author: "John",
      message: "I'm testing",
      updatedAt: "2023-01-01 12:00 PM"
    };

    SetThread(myThread);
    }, [threadId])

  const comments = [
    { author: 'Commenter 1', content: 'Great thread!' },
    { author: 'Commenter 2', content: 'I agree!' },
    // Add more comments as needed
  ];

  return (
    <div>
      <Thread {...thread} />
      <div>
        <Typography variant="h5" gutterBottom>
          Comments
        </Typography>
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
      {/* Add your comment input or form here */}
    </div>
  );
};

export default SingleThread;
