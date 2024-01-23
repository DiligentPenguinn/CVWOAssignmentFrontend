import { MouseEventHandler } from "react";

export interface CommentProps {
  id: number;
  user_id: number;
  parent_id: number;
  body: string;
  updated_at: string;
  handleReply?: MouseEventHandler;
}

//put all interfaces in one place
// name needs to match that of Go's JSON?