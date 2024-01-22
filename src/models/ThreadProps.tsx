import { CommentProps } from "./CommentProps";

export interface ThreadProps {
  id: number;
  title: string;
  user_id: number;
  body: string;
  updatedAt: string;
  comments?: CommentProps[];
  tags?: string[];
}
