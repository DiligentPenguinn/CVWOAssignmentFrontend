import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Thread from './Thread';
import Comment from './Comment'; // Import the Comment component
import { ThreadProps } from '../models/ThreadProps';
import { Typography, Box, Card, CardContent } from '@mui/material';
import CommentInput from './CommentInput';

const SingleThread: React.FC = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const [thread, SetThread] = useState<ThreadProps>({
    id: 0,
    title: '',
    author: '',
    message: '',
    updatedAt: '',
    comments: [],
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
      updatedAt: "2023-01-01 12:00 PM",
      comments: [    
        { author: 'Commenter 1', content: 'Great thread!' },
        { author: 'Commenter 2', content: 'I agree!' },
      ],
    };

    SetThread(myThread);


    }, [threadId])

  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'center', margin: 4}}>
        <Card variant='outlined' sx={{width : '80%'}}>
          <CardContent>
            <Thread {...thread} />
            <CommentInput/>
            <div>
              {thread.comments && thread.comments.map((comment, index) => (
                <Comment key={index} {...comment} />
              ))}
            </div>

          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default SingleThread;

// Should Abstract the Box + Card + CardContent part, which is repetitive in both singleThread and ThreadInput
