import {
  BooleanField,
  BooleanInput,
  Datagrid,
  DateField,
  DateInput,
  DateTimeInput,
  Edit,
  List,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput
} from 'react-admin'

import GeneraldiscussionChatList from './chats'
import React from 'react'
import RichTextInput from 'ra-input-rich-text'

export const GeneraldiscussionList = props => (
  <div>
    <List {...props}>
      <Datagrid rowClick='expand' expand={<GeneraldiscussionChatList {...props} />}>
        <TextField source='title' label='Título' />
        <BooleanField source='active' label='Activa' />
        <DateField source='date' label='Fecha de creación' />
        <TextField source='description' label='Descripción' />
      </Datagrid>
    </List>
  </div>
)
export const GeneraldiscussionEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='id' />
      <BooleanInput source='active' label='Activo' />
      <DateTimeInput source='date' label='Fecha' options={{ format: 'DD/MM/YYYY, HH:mm:ss' }} />
      <TextInput source='description' label='Descripción' />
    </SimpleForm>
  </Edit>
)
export const GeneraldiscussionShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='id' />
      <BooleanField source='active' />
      <DateField source='date' />
      <TextField source='description' />
    </SimpleShowLayout>
  </Show>
)
