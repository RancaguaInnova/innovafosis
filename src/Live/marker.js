import './style.css'

import {
  BooleanInput,
  DateTimeInput,
  DisabledInput,
  Edit,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar
} from 'react-admin'

import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Modal from '@material-ui/core/Modal'
import React from 'react'
import RichTextInput from 'ra-input-rich-text'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Warning } from '@material-ui/icons'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  avatar: {
    margin: 10
  },
  icon: {
    fontSize: '4em',
    cursor: 'pointer'
  },
  iconRedApoyo: {
    color: '#4F4D4D',
    fontSize: '3em'
  },
  iconCarabineros: {
    color: '#19DF28',
    fontSize: '3em'
  },
  iconAlerta: {
    color: '#F0260E',
    fontSize: '3em'
  },
  root: {
    minWidth: 500
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1em'
  },
  input: {
    width: '100%'
  },
  inlineField: {
    display: 'inline-block',
    width: '50%'
  },
  SaveButton: {
    backgroundColor: '#0B3454',
    color: 'white',
    marginLeft: 10
  },
  ChatButton: {
    backgroundColor: '#C5DD2E',
    color: 'black',
    marginLeft: 10
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none'
  },
  chatTitle: {
    color: '#0ED2B7'
  }
}))
function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

function Marker(props) {
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)

  const [state, setState] = React.useState({
    right: false,
    postDefaultValue: props.event
  })
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const Chat = () => {
    console.log('chat')
    setOpen(true)
  }

  const handleSaveClick = () => {
    setState({ ...state, right: false })
  }

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [side]: open })
  }

  return (
    <Container>
      <div>
        {(() => {
          switch (state.postDefaultValue.eventType) {
            case '¡AYUDA!':
              return (
                <Warning
                  className={classes.iconAlerta}
                  color='inherit'
                  onClick={toggleDrawer('right', true)}
                />
              )
            case 'CARABINEROS':
              return (
                <Warning
                  className={classes.iconCarabineros}
                  color='inherit'
                  onClick={toggleDrawer('right', true)}
                />
              )
            case 'RED DE APOYO':
              return (
                <Warning
                  className={classes.iconRedApoyo}
                  color='inherit'
                  onClick={toggleDrawer('right', true)}
                />
              )
            default:
              return (
                <Warning
                  className={classes.icon}
                  color='#cccccc'
                  onClick={toggleDrawer('right', true)}
                />
              )
          }
        })()}
      </div>

      <Drawer open={state.right} onClose={toggleDrawer('right', false)} anchor='right'>
        <Box fixed>
          <Box className={classes.title} color='primary'>
            <Typography variant='h4'>Detalle del evento</Typography>
            <IconButton onClick={toggleDrawer('right', false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <div>
            <Grid container alignItems='center'>
              <Avatar
                alt='Demo victima'
                src='https://s3.amazonaws.com/uifaces/faces/twitter/jqiuss/128.jpg?size=32x32'
                className={classes.avatar}
              />
              <Typography>Nombre victima </Typography>
            </Grid>
          </div>
          <Edit undoable={false} resource='Event' id={state.postDefaultValue.id} basePath={'/Live'}>
            <SimpleForm>
              <DisabledInput source='id' label='id' className={classes.input} />
              <DateTimeInput
                source='date'
                label='Fecha'
                options={{ format: 'DD/MM/YYYY, HH:mm:ss' }}
              />
              <BooleanInput
                source='assistedBySupportNetwork'
                label='Asistido por red de apoyo'
                className={classes.input}
              />
              <SelectInput
                source='state'
                label='Estado'
                choices={[
                  { id: 'Pendiente', name: 'Pendiente' },
                  { id: 'Atendido', name: 'Atendido' },
                  { id: 'Cerrado', name: 'Cerrado' }
                ]}
                className={classes.input}
              />
              <BooleanInput
                source='reportPolice'
                label='Genera Denuncia'
                className={classes.input}
              />
              <TextInput
                source='reportNumber'
                label='Número de denuncia'
                className={classes.input}
              />
              <SelectInput
                source='eventType'
                label='Tipo Evento'
                choices={[
                  { id: '¡AYUDA!', name: '¡AYUDA!' },
                  { id: 'CARABINEROS', name: 'CARABINEROS' },
                  { id: 'RED DE APOYO', name: 'RED DE APOYO' }
                ]}
              />
              <TextInput source='description' label='Descripción del evento' />
              <TextInput source='comment' label='Comentario' />
              <DisabledInput source='Location.latitude' label='Latitud' className={classes.input} />
              <DisabledInput
                source='Location.longitude'
                label='Longitud'
                className={classes.input}
              />
            </SimpleForm>
          </Edit>
        </Box>
      </Drawer>
    </Container>
  )
}

export default Marker
