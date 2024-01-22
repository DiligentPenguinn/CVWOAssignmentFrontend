import React, { useEffect, useState, MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import Thread from './Thread';
import Comment from './Comment'; // Import the Comment component
import { ThreadProps } from '../models/ThreadProps';
import { Typography, Box, Card, CardContent } from '@mui/material';
import CommentInput from './CommentInput';
import { CommentProps } from '../models/CommentProps';
import { title } from 'process';

const SingleThread: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [thread, setThread] = useState<ThreadProps>();

  const [comment, setComment] = useState<CommentProps>()

  // {
  //   user_id: 0,
  //   content: '',
  //   replies: [],
  // }

  const handleReply = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  }

  useEffect(() => {
    let parsedId: number = 0
    if (id) {
      parsedId = parseInt(id, 10);
    }

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let requestOptions = {
        method: "GET",
        headers: headers,
    }

    fetch(`http://localhost:8080/thread/${parsedId}`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
        setThread(data);
        console.log(thread)
    })
    .catch(err => {
        console.log(err);
    })

    }, [id])

  return (
    <>
      {thread &&
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

    }
    </>
  );
};

export default SingleThread;

// Should Abstract the Box + Card + CardContent part, which is repetitive in both singleThread and ThreadInput
