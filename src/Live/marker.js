import "./style.css";

import { DateInput, DeleteButton, Edit, SaveButton, SimpleForm, TextInput, Toolbar } from "react-admin";

import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { Warning } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core";

const toolbarStyles = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
};

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  avatar: {
    margin: 10
  },
  icon: {
    fontSize: "3em",
    cursor: "pointer"
  },
  root: {
    minWidth: 500
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1em",
    backgroundColor: "#00A0B0"
  },
  input: {
    width: "100%"
  },

  inlineField: {
    display: "inline-block",
    width: "50%"
  }
});

export default function Marker(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
    postDefaultValue: props.event
  });

  const handleSaveClick = () => {
    setState({ ...state, right: false });
  };

  const CustomToolbar = withStyles(toolbarStyles)(props => (
    <Toolbar {...props}>
      <SaveButton undoable={false} onClick={handleSaveClick} />
      <DeleteButton undoable={false} />
    </Toolbar>
  ));

  const toggleDrawer = (side, open) => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div>
      <div>
        <Warning className={classes.icon} color="error" onClick={toggleDrawer("right", true)} />
      </div>

      <Drawer open={state.right} onClose={toggleDrawer("right", false)} anchor="right">
        <div className={classes.root}>
          <div className={classes.title}>
            <Typography variant="h4">Detalle del evento</Typography>
            <IconButton onClick={toggleDrawer("right", false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <div>
            <Grid container alignItems="center">
              <Avatar
                alt="Demo victima"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/jqiuss/128.jpg?size=32x32"
                className={classes.avatar}
              />
              <Typography>Nombre victima </Typography>
            </Grid>
          </div>
          <Edit undoable={false} resource="Event" id={state.postDefaultValue.id} basePath={"/Live"}>
            <SimpleForm toolbar={<CustomToolbar />}>
              <TextInput source="id" label="id" className={classes.input} />
              <DateInput source="date" label="Fecha" className={classes.input} />
              <TextInput source="assistedBySupportNetwork" label="Asistido por red de apoyo" className={classes.input} />
              <TextInput source="state" label="Estado" className={classes.input} />
              <TextInput source="reportPolice" label="Genera Denuncia" className={classes.input} />
              <TextInput source="reportNumber" label="Número de denuncia" className={classes.input} />
              <TextInput source="eventType" label="Tipo Evento" className={classes.input} />
              <TextInput source="description" label="Descripción del evento" className={classes.input} />
              <TextInput source="comment" label="Comentario" className={classes.input} />
            </SimpleForm>
          </Edit>
        </div>
      </Drawer>
    </div>
  );
}
