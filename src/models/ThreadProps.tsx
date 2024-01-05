import { CommentProps } from "./CommentProps";

export interface ThreadProps {
  id: number;
  title: string;
  author: string;
  message: string;
  updatedAt: string;
  comments?: CommentProps[];
}
