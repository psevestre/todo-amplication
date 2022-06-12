import { Todo as TTodo } from "../api/todo/Todo";

export const TODO_TITLE_FIELD = "summary";

export const TodoTitle = (record: TTodo): string => {
  return record.summary || record.id;
};
