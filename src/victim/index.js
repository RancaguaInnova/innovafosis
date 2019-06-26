import './style.css'

import {
  ChipField,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  List,
  ReferenceField,
  ReferenceManyField,
  Show,
  SimpleForm,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  TextInput
} from 'react-admin'

import React from 'react'

const postRowStyle = (record, index) => ({
  backgroundColor: index % 2 === 0 ? '#DAF7FA' : 'white'
})
export const VictimList = props => (
  <List {...props} title='Listado de victimas'>
    <Datagrid rowClick='edit' rowStyle={postRowStyle}>
      <TextField source='name' label='Nombre' />
      <TextField source='lastName' label='Apellidos' />
      <TextField source='documentType' label='Tipo Documento' />
      <TextField source='document' label='Documento' />
      <ReferenceManyField
        label='Eventos relacionados'
        reference='Event'
        target='victimId'
        linkType='show'
      >
        <SingleFieldList>
          <DateField
            className='dateReference'
            source='date'
            label='Fecha'
            options={{ format: 'DD/MM/YYYY, HH:mm:ss' }}
          />
        </SingleFieldList>
      </ReferenceManyField>

      <TextField source='sex' label='Sexo' />
      <ReferenceField
        label='Profesional Asignado'
        source='professionalIdAssigned'
        reference='Professional'
        linkType='show'
      >
        <TextField source='name' />
      </ReferenceField>
    </Datagrid>
  </List>
)

export const VictimEdit = props => (
  <Edit {...props} title='Editar Victima'>
    <SimpleForm>
      <TextInput source='name' label='Nombre' />
      <TextInput source='lastName' label='Apellidos' />
      <TextInput source='documentType' label='Tipo Documento' />
      <TextInput source='document' label='Documento' />
      <DateInput source='birthdate' label='Fecha Nacimiento' />
      <TextInput source='sex' label='Sexo' />
      <TextInput source='address.street' label='Calle' />
      <TextInput source='address.number' label='Numero' />
      <TextInput source='address.dpto' label='Dpto' />
      <TextInput source='address.commune' label='Comuna' />
      <TextInput source='address.city' label='Ciudad' />
      <TextInput source='address.provincial' label='Provincial' />
      <TextInput source='address.region' label='Región' />
    </SimpleForm>
  </Edit>
)

export const VictimShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='name' label='Nombre' />
      <TextField source='lastName' label='Apellido Paterno' />
      <TextField source='documentType' label='Tipo Documento' />
      <TextField source='document' label='Documento' />
      <DateField source='birthdate' label='Fecha Nacimiento' />
      <TextField source='sex' label='Sexo' />
      <TextField source='address.street' label='Calle' />
      <TextField source='address.number' label='Número' />
      <TextField source='address.dpto' label='Dpto' />
      <TextField source='address.commune' label='Comuna' />
      <TextField source='address.city' label='Ciudad' />
      <TextField source='address.provincial' label='Provincial' />
      <TextField source='address.region' label='Región' />
    </SimpleShowLayout>
  </Show>
)
