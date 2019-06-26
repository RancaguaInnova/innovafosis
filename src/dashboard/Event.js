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
  ReferenceField,
  SaveButton,
  SelectInput,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  Toolbar,
  withDataProvider
} from 'react-admin'

import React from 'react'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}))

function Event() {
  const [open, setOpen] = React.useState(true)

  const classes = useStyles()

  return (
    <div>
      <List basePath='/Dashboard' resource='Event' location='' title='Dashboard'>
        <Datagrid>
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
    </div>
  )
}
export default compose(withDataProvider)(Event)
