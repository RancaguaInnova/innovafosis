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

import GeneraldiscussionChatList from './post'
import React from 'react'
import RichTextInput from 'ra-input-rich-text'

export const GeneraldiscussionList = props => (
  <div>
    <List {...props} title='Temas de discusión general'>
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
  <Edit {...props} title='Editando tema'>
    <SimpleForm>
      <TextInput source='id' />
      <BooleanInput source='active' label='Activo' />
      <DateTimeInput source='date' label='Fecha' options={{ format: 'DD/MM/YYYY, HH:mm:ss' }} />
      <TextInput source='description' label='Descripción' />
    </SimpleForm>
  </Edit>
)
export const GeneraldiscussionShow = props => (
  <Show {...props} title='Mostrando Tema de discusión general'>
    <SimpleShowLayout>
      <TextField source='id' />
      <BooleanField source='active' label='Activo' />
      <DateField source='date' label='Fecha' options={{ format: 'DD/MM/YYYY, HH:mm:ss' }} />
      <TextField source='description' label='Descripción' />
    </SimpleShowLayout>
  </Show>
)
