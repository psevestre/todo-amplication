import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TodoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Todos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="completed" source="completed" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="details" source="details" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="ID" source="id" />
        <ReferenceField label="owner" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="summary" source="summary" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
