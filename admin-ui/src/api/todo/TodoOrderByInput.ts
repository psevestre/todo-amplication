import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  completed?: SortOrder;
  createdAt?: SortOrder;
  details?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  summary?: SortOrder;
  updatedAt?: SortOrder;
};
