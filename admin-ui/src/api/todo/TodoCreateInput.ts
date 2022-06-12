import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoCreateInput = {
  completed: boolean;
  details?: string | null;
  dueDate?: Date | null;
  owner: UserWhereUniqueInput;
  summary: string;
};
