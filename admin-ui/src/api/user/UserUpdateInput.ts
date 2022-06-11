import { TodoUpdateManyWithoutUsersInput } from "./TodoUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  todos?: TodoUpdateManyWithoutUsersInput;
  username?: string;
};
