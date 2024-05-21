import { Comment } from "../comment/Comment";
import { Post } from "../post/Post";

export type Author = {
  bio: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  id: string;
  name: string | null;
  posts?: Array<Post>;
  updatedAt: Date;
};
