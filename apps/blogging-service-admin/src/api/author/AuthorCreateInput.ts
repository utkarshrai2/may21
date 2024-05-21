import { CommentCreateNestedManyWithoutAuthorsInput } from "./CommentCreateNestedManyWithoutAuthorsInput";
import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  bio?: string | null;
  comments?: CommentCreateNestedManyWithoutAuthorsInput;
  name?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
};
