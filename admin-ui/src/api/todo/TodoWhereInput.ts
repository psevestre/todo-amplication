import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoWhereInput = {
  completed?: BooleanFilter;
  details?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
  summary?: StringFilter;
};
