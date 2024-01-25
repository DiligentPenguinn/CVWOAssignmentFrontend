import React, {MouseEvent, useEffect, useState} from 'react';
import { Typography, Card, CardContent, Button, Box } from '@mui/material';
import { CommentProps } from '../models/CommentProps';
import CommentInput from './CommentInput';
import { ReplyProps } from '../models/ReplyProps';
import Reply from './Reply';
const Comment: React.FC<CommentProps> = ({ body, id }) => {
  const [replies, setReplies] = useState<ReplyProps[]>();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    setIsClicked(!isClicked);
  }

  useEffect(() => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let requestOptions = {
        method: "GET",
        headers: headers,
    }

    fetch(`http://localhost:8080/comment/${id}/replies`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
        setReplies(data);
    })
    .catch(err => {
        console.log(err);
    })

  }, [id])
  return (
    <Card style={{ margin: '8px 0', border: 'none'}}>
      <CardContent>
        <Typography>{body}</Typography>
      </CardContent>
      <Button color='primary' onClick={handleButtonClick} sx={{display: 'flex', justifyContent : 'right'}}>
        Reply
      </Button>
      <Box sx={{marginLeft: 5}}>
        {replies && replies.map((reply) => (
          <Reply {...reply} />
        ))}
      </Box>
      {isClicked
       && 
       <CommentInput type="reply" ID={id}/>}
    </Card>
  );
};

export default Comment;
