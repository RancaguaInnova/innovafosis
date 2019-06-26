import {
  BooleanField,
  BooleanInput,
  Datagrid,
  DateField,
  DateInput,
  DateTimeInput,
  Edit,
  Filter,
  FunctionField,
  List,
  ReferenceField,
  SelectInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput
} from 'react-admin'

import { PostActions } from '../botons'
import React from 'react'
import RichTextInput from 'ra-input-rich-text'

const postRowStyle = (record, index) => ({
  backgroundColor: index % 2 === 0 ? '#DAF7FA' : 'white'
})
const PostFilter = props => (
  <Filter {...props}>
    <DateInput source='date' label='Fecha' options={{ format: 'DD/MM/YYYY' }} alwaysOn />

    <SelectInput
      source='eventType'
      label='Tipo Evento'
      choices={[
        { id: '¡AYUDA!', name: '¡AYUDA!' },
        { id: 'CARABINEROS', name: 'CARABINEROS' },
        { id: 'RED DE APOYO', name: 'RED DE APOYO' }
      ]}
    />
    <SelectInput
      source='state'
      label='Estado'
      choices={[
        { id: 'Pendiente', name: 'Pendiente' },
        { id: 'Atendido', name: 'Atendido' },
        { id: 'Cerrado', name: 'Cerrado' }
      ]}
    />
  </Filter>
)

export const EventList = props => (
  <List
    {...props}
    title='Registro historico de eventos'
    actions={<PostActions />}
    filters={<PostFilter />}
  >
    <Datagrid rowClick='edit' rowStyle={postRowStyle}>
      <DateField source='date' label='Fecha' options={{ format: 'DD/MM/YYYY, HH:mm:ss' }} />
      <TextField source='state' label='Estado' />
      <BooleanField source='assistedBySupportNetwork' label='Asistido por red de apoyo' />
      <BooleanField source='reportPolice' label='Genera Denuncia' />
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
  <Edit undoable={false} {...props} title='Editando evento'>
    <SimpleForm redirect='list'>
      <DateTimeInput source='date' label='Fecha' options={{ format: 'DD/MM/YYYY, HH:mm:ss' }} />
      <BooleanInput source='assistedBySupportNetwork' label='Asistido por red de apoyo' />
      <SelectInput
        source='state'
        label='Estado'
        choices={[
          { id: 'Pendiente', name: 'Pendiente' },
          { id: 'Atendido', name: 'Atendido' },
          { id: 'Cerrado', name: 'Cerrado' }
        ]}
      />
      <BooleanInput source='reportPolice' label='Genera Denuncia' />
      <TextInput source='reportNumber' label='Número de denuncia' />
      <SelectInput
        source='eventType'
        label='Tipo Evento'
        choices={[
          { id: '¡AYUDA!', name: '¡AYUDA!' },
          { id: 'CARABINEROS', name: 'CARABINEROS' },
          { id: 'RED DE APOYO', name: 'RED DE APOYO' }
        ]}
      />
      <RichTextInput source='description' label='Descripción' />
      <RichTextInput source='comment' label='Comentario' />
    </SimpleForm>
  </Edit>
)
export const EventShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <DateField source='date' label='Fecha' options={{ format: 'DD/MM/YYYY, HH:mm:ss' }} />
      <BooleanField source='assistedBySupportNetwork' label='Asistido por red de apoyo' />
      <BooleanField source='reportPolice' label='Genera Denuncia' />
      <TextField source='reportNumber' label='Número de  Denuncia' />
      <TextField source='state' label='Estado' />
      <TextField source='eventType' label='Tipo Evento' />
      <ReferenceField label='Victima' source='victimId' reference='Victim' linkType='show'>
        <TextField source='Documento' />
      </ReferenceField>
      <TextField source='comment' label='Descripción' />
      <TextField source='comment' label='Comentario' />
    </SimpleShowLayout>
  </Show>
)
