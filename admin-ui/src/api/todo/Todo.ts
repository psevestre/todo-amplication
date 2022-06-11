import { User } from "../user/User";

export type Todo = {
  completed: boolean;
  createdAt: Date;
  details: string | null;
  dueDate: Date | null;
  id: string;
  owner?: User;
  summary: string;
  updatedAt: Date;
};
