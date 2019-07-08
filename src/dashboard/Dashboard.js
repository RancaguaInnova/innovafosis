import ChartDayEvent from './chartDayEvent'
import ChartMonth from './chartMonth'
import Container from '@material-ui/core/Container'
import Event from './Event'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 300
  },
  fixedHeightPaperInformation: {
    height: 150
  }
}))

export default function Dashboard(props) {
  const classes = useStyles()

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const fixedHeightPaperInformation = clsx(classes.paper, classes.fixedHeightPaperInformation)

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={6}>
              <Paper className={fixedHeightPaper}>
                <ChartDayEvent />
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Paper className={fixedHeightPaper}>
                <ChartMonth />
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Event {...props} />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={3} md={3} lg={3}>
              <Paper className={fixedHeightPaperInformation}>
                <div>jdkasjd</div>
              </Paper>
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
              <Paper className={fixedHeightPaperInformation}>
                <div>jdkasjd</div>
              </Paper>
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
              <Paper className={fixedHeightPaperInformation}>
                <div>jdkasjd</div>
              </Paper>
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
              <Paper className={fixedHeightPaperInformation}>
                <div>jdkasjd</div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}
