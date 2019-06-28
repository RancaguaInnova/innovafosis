import {
  BooleanField,
  BooleanInput,
  Datagrid,
  DateField,
  DateInput,
  DateTimeInput,
  DisabledInput,
  Edit,
  Filter,
  FunctionField,
  List,
  LongTextInput,
  NumberField,
  NumberInput,
  ReferenceField,
  RichTextField,
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
import StarField from '../component/field/star'
import { connect } from 'react-redux'

StarField.defaultProps = { label: 'Calificación' }

const postRowStyle = (record, index) => ({
  backgroundColor: index % 2 === 0 ? '#DAF7FA' : 'white'
})

export const CourseEdit = props => (
  <Edit {...props} title='Editando Curso'>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='name' />
      <RichTextInput source='description' label='Descripción' />
      <DateInput source='initDate' label='Fecha de inicio' />
      <DateInput source='endDate' label='Fecha de fin' />
      <NumberInput source='qualification' label-='Calificación' />
      <BooleanInput source='certificate' label='Certificado' />
      <BooleanInput source='virtual' label='Es virtual' />
      <TextInput source='entity' label='Entidad' />

      <RichTextInput source='temary' label='Temario' />
      <TextInput source='type' label='Tipo de curso' />
      <TextInput source='urlCurriculum' label='Malla curricular' />
    </SimpleForm>
  </Edit>
)

export const CourseShow = props => (
  <Show {...props} title='Mostrando Curso'>
    <SimpleShowLayout>
      <TextField source='name' label='Nombre' />
      <TextField source='description' label='Descripción' />
      <DateField source='initDate' label='Fecha de inicio' />
      <DateField source='endDate' label='Fecha de fin' />
      <StarField source='qualification' label-='Calificación' />
      <BooleanField source='certificate' label='Certificado' />
      <BooleanField source='virtual' label='Es virtual' />
      <TextField source='entity' label='Entidad' />
      <TextField source='temary' label='Temario' />
      <TextField source='type' label='Tipo de curso' />
      <TextField source='urlCurriculum' label='Malla curricular' />
    </SimpleShowLayout>
  </Show>
)

export const CourseList = props => (
  <List {...props} title='Listado de cursos'>
    <Datagrid rowClick='edit' rowStyle={postRowStyle}>
      <TextField source='name' label='Nombre' />
      <RichTextField
        source='description'
        label='Descripción'
        style={{
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: 100,
          overflow: 'hidden'
        }}
      />
      <DateField source='initDate' label='Fecha de inicio' />
      <DateField source='endDate' label='Fecha de fin' />
      <StarField source='qualification' label-='Calificación' />
      <BooleanField source='certificate' label='Certificado' />
      <BooleanField source='virtual' label='Es virtual' />
      <TextField source='entity' label='Entidad' />
      <RichTextField
        source='temary'
        label='Temario'
        style={{
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: 100,
          overflow: 'hidden'
        }}
      />
      <TextField source='type' label='Tipo de curso' />
      <TextField source='urlCurriculum' label='Malla curricular' />
    </Datagrid>
  </List>
)
