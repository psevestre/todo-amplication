import { TodoCreateNestedManyWithoutUsersInput } from "./TodoCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  todos?: TodoCreateNestedManyWithoutUsersInput;
  username: string;
};
