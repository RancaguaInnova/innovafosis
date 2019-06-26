import {
  Datagrid,
  DateField,
  DateInput,
  Edit,
  EmailField,
  List,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput
} from 'react-admin'

import { PostActions } from '../botons'
import React from 'react'

const postRowStyle = (record, index) => ({
  backgroundColor: index % 2 === 0 ? '#DAF7FA' : 'white'
})
export const ProfessionalList = props => (
  <List {...props} title='Listado profesionales' actions={<PostActions />}>
    <Datagrid rowClick='edit' rowStyle={postRowStyle}>
      <TextField source='name' label='Nombres' />
      <TextField source='lastName' label='Apellidos' />
      <DateField source='birthdate' label='Fecha de Nacimiento' />
      <EmailField source='email' label='Email' />
      <TextField source='institution' label='Institución' />
      <TextField source='phone.areaCode' label='Código de area' />
      <TextField source='phone.phone' label='Teléfono' />
      <TextField source='phone.mobile' label='Célular' />
      <TextField source='profession' label='Profesión' />
    </Datagrid>
  </List>
)

export const ProfessionalEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='name' label='Nombres' />
      <TextInput source='lastName' label='Apellidos' />
      <DateInput source='birthdate' label='Fecha de Nacimiento' />
      <TextInput source='email' label='Email' />
      <TextInput source='profession' label='Profesión' />
      <TextInput source='institution' label='Institución' />
      <TextInput source='phone.areaCode' label='Código de area' />
      <TextInput source='phone.phone' label='Teléfono' />
      <TextInput source='phone.mobile' label='Célular' />
    </SimpleForm>
  </Edit>
)
export const ProfessionalShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='name' label='Nombres' />
      <TextField source='lastName' label='Apellidos' />
      <DateField source='birthdate' label='Fecha de Nacimiento' />
      <EmailField source='email' label='Email' />
      <TextField source='profession' label='Profesión' />
      <TextField source='institution' label='Institución' />
      <TextField source='phone.areaCode' label='Código de area' />
      <TextField source='phone.phone' label='Teléfono' />
      <TextField source='phone.mobile' label='Célular' />
    </SimpleShowLayout>
  </Show>
)
