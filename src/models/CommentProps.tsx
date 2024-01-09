export interface CommentProps {
  author: string;
  content: string;
  replies?: CommentProps[];
}