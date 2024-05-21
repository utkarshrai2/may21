import { CommentUpdateManyWithoutAuthorsInput } from "./CommentUpdateManyWithoutAuthorsInput";
import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  bio?: string | null;
  comments?: CommentUpdateManyWithoutAuthorsInput;
  name?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
};
