import React, { useEffect, useState, MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import Thread from './Thread';
import Comment from './Comment'; // Import the Comment component
import { ThreadProps } from '../models/ThreadProps';
import { Typography, Box, Card, CardContent } from '@mui/material';
import CommentInput from './CommentInput';
import { CommentProps } from '../models/CommentProps';

const SingleThread: React.FC = () => {
  const { threadId } = useParams<{ threadId: string }>();
  const [thread, setThread] = useState<ThreadProps>({
    id: 0,
    title: '',
    author: '',
    message: '',
    updatedAt: '',
    comments: [],
  });

  const [comment, setComment] = useState<CommentProps>({
    author: '',
    content: '',
    replies: [],
  })
  const handleReply = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  }
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
        { author: 'Commenter 1', 
          content: 'Great thread!' , 
          replies: [{author: 'Commenter 3', content: 'Amazing!',
                      replies: [{author: 'Commenter 4', content: 'Commenter 3 is right!'}]}]},
        { author: 'Commenter 2', content: 'I agree!' },
      ],
      tags: ['tag1', 'tag2', 'tag3'],
    };

    setThread(myThread);


    }, [threadId])

  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'center', margin: 4}}>
        <Card variant='outlined' sx={{width : '80%'}}>
          <CardContent>
            <Thread {...thread} />
            <CommentInput
              key={0}
              handleButtonClick={handleReply}/>
            <div>
              {thread.comments && thread.comments.map((comment, index) => (
                <Comment key={index} {...comment} handleReply={handleReply} />
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
