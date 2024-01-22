import { MouseEventHandler } from "react";

export interface CommentProps {
  user_id: number;
  content: string;
  replies?: CommentProps[];
  handleReply?: MouseEventHandler;
}