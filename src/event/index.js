import {
  Datagrid,
  DateField,
  DateInput,
  Edit,
  FunctionField,
  List,
  ReferenceField,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput
} from 'react-admin'

import { PostActions } from '../botons'
import React from 'react'

export const EventList = props => (
  <List {...props} title='Registro historico de eventos' actions={<PostActions />}>
    <Datagrid rowClick='edit'>
      <TextField source='date' label='Fecha' />
      <TextField source='state' label='Estado' />
      <TextField source='assistedBySupportNetwork' label='Asistido por red de apoyo' />
      <TextField source='reportPolice' label='Genera Denuncia' />
      <TextField source='reportNumber' label='Número de denuncia' />
      <TextField source='eventType' label='Tipo Evento' />
      <FunctionField
        label='Ubicación'
        render={record => `${record.Location._lat}, ${record.Location._long}`}
      />

      <ReferenceField label='Victima' source='victimId' reference='Victim' linkType='show'>
        <TextField source='document' />
      </ReferenceField>
    </Datagrid>
  </List>
)
export const EventEdit = props => (
  <Edit {...props} title='Editando evento'>
    <SimpleForm>
      <DateInput source='date' label='Fecha' />
      <TextInput source='assistedBySupportNetwork' label='Asistido por red de apoyo' />
      <TextInput source='state' label='Estado' />
      <TextInput source='reportPolice' label='Genera Denuncia' />
      <TextInput source='reportNumber' label='Número de denuncia' />
      <TextInput source='eventType' label='Tipo Evento' />
    </SimpleForm>
  </Edit>
)
export const EventShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <DateField source='date' label='Fecha' />
      <TextField source='assistedBySupportNetwork' label='Asistido por red de apoyo' />
      <TextField source='state' label='Estado' />
      <TextField source='reportPolice' label='Genera Denuncia' />
      <TextField source='eventType' label='Tipo Evento' />
      <ReferenceField label='Victima' source='victimId' reference='Victim' linkType='show'>
        <TextField source='Documento' />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
)
