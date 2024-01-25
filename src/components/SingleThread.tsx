import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Thread from './Thread';
import Comment from './Comment'; // Import the Comment component
import { ThreadProps } from '../models/ThreadProps';
import { Box, Card, CardContent } from '@mui/material';
import CommentInput from './CommentInput';
import { CommentProps } from '../models/CommentProps';

const SingleThread: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [thread, setThread] = useState<ThreadProps>();

  const [comments, setComments] = useState<CommentProps[]>()

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

    headers = new Headers();
    headers.append("Content-Type", "application/json");

    requestOptions = {
        method: "GET",
        headers: headers,
    }

    fetch(`http://localhost:8080/thread/${parsedId}/comments`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
        setComments(data);
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
                ID={thread.id}
                type={"comment"}/>
              <div>
                {comments && comments.map((comment) => (
                  <Comment {...comment} />
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