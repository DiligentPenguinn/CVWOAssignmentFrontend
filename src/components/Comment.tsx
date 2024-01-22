import React, {MouseEvent, useState} from 'react';
import { Typography, Card, CardContent, Button, Box } from '@mui/material';
import { CommentProps } from '../models/CommentProps';
import CommentInput from './CommentInput';

const Comment: React.FC<CommentProps> = ({ content, replies, handleReply }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    setIsClicked(!isClicked);
  }

  const handleComment = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Sent!');
    setIsClicked(false);
  }
  return (
    <Card style={{ margin: '8px 0', border: 'none'}}>
      <CardContent>
        {/* <Typography variant="subtitle1" color="textSecondary">
          {author}
        </Typography> */}
        <Typography>{content}</Typography>
      </CardContent>
      <Button color='primary' onClick={handleButtonClick} sx={{display: 'flex', justifyContent : 'right'}}>
        Reply
      </Button>
      {isClicked
       && 
       <CommentInput handleButtonClick={handleReply ? handleReply : () => console.log('nothing happens')}/>}
       <Box sx={{marginLeft: 2}}>
          {replies && replies.map(reply => {
              return <Comment {... reply} handleReply={handleReply}/>
          })}
        </Box>
    </Card>
  );
};

export default Comment;
