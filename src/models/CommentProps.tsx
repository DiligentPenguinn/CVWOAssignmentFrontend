import { MouseEventHandler } from "react";

export interface CommentProps {
  author: string;
  content: string;
  replies?: CommentProps[];
  handleReply?: MouseEventHandler;
}