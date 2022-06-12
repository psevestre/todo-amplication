import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TodoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="completed" source="completed" />
        <TextInput label="details" multiline source="details" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <ReferenceInput source="user.id" reference="User" label="owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="summary" source="summary" />
      </SimpleForm>
    </Create>
  );
};
