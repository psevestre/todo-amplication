import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoUpdateInput = {
  completed?: boolean;
  details?: string | null;
  dueDate?: Date | null;
  owner?: UserWhereUniqueInput;
  summary?: string;
};
