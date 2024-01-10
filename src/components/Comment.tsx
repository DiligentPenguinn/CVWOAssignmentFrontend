import React, {MouseEvent, useState} from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';
import { CommentProps } from '../models/CommentProps';
import CommentInput from './CommentInput';

const Comment: React.FC<CommentProps> = ({ author, content }) => {
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
        <Typography variant="subtitle1" color="textSecondary">
          {author}
        </Typography>
        <Typography>{content}</Typography>
      </CardContent>
      <Button color='primary' onClick={handleButtonClick} sx={{display: 'flex', justifyContent : 'right'}}>
        Reply
      </Button>
      {isClicked
       && 
       <CommentInput handleButtonClick={handleComment}/>}
    </Card>
  );
};

export default Comment;
