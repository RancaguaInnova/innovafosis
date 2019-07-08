import {
  AddAlert,
  Book,
  Comment,
  EventNote,
  Feedback,
  Forum,
  LiveTv,
  LocalActivity,
  ModeComment,
  People,
  Person
} from '@material-ui/icons'
import { DashboardMenuItem, MenuItemLink, Responsive } from 'react-admin'
import React, { Component } from 'react'

import Badge from '@material-ui/core/Badge'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import PropTypes from 'prop-types'
import SettingsIcon from '@material-ui/icons/Settings'
import SubMenu from './SubMenu'
import Typography from '@material-ui/core/Typography'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

class Menu extends Component {
  state = {
    menuVictim: false,
    menuForo: false,
    menuGeneralDiscussion: false,
    menuAula: false,
    menuActivity: false
  }

  static propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object
  }

  handleToggle = menu => {
    this.setState(state => ({ [menu]: !state[menu] }))
  }

  render() {
    const { onMenuClick, open, logout } = this.props
    return (
      <React.Fragment>
        <CssBaseline />

        <Box color='primary'>
          <MenuItemLink
            to={`/Dashboard`}
            key='Dashboard'
            primaryText='Dashboard'
            onClick={onMenuClick}
            leftIcon={<AddAlert />}
          />
          <SubMenu
            handleToggle={() => this.handleToggle('menuVictim')}
            isOpen={this.state.menuVictim}
            sidebarIsOpen={open}
            key='Victimas Y Eventos'
            name='Emergencia'
            label='Victimas Y Eventos'
            icon={
              <Badge badgeContent={3} color='primary'>
                <AddAlert />
              </Badge>
            }
          >
            <MenuItemLink
              to={`/Live`}
              key='Eventos en vivo'
              primaryText=' Eventos en vivo'
              onClick={onMenuClick}
              leftIcon={<LiveTv />}
            />
            <MenuItemLink
              to={`/Event`}
              key='Eventos'
              primaryText='Eventos'
              onClick={onMenuClick}
              leftIcon={<EventNote />}
            />
            <MenuItemLink
              to={`/Victim`}
              key='Victimas'
              primaryText='Victimas'
              onClick={onMenuClick}
              leftIcon={<People />}
            />
            <MenuItemLink
              key='Profesionales'
              to={`/Professional`}
              primaryText='Profesionales'
              onClick={onMenuClick}
              leftIcon={<Person />}
            />
            <MenuItemLink
              key='Chat'
              to={`/Chat`}
              primaryText='Chat'
              onClick={onMenuClick}
              leftIcon={<Forum />}
            />
          </SubMenu>
          <SubMenu
            handleToggle={() => this.handleToggle('menuForo')}
            isOpen={this.state.menuForo}
            sidebarIsOpen={open}
            name='Comunidad'
            label='Comunidad'
            icon={<Comment />}
          >
            <MenuItemLink
              to={`/Announcements`}
              key='Announcements'
              primaryText='Anuncios'
              onClick={onMenuClick}
              leftIcon={<EventNote />}
            />
            <MenuItemLink
              to={`/Blogs`}
              key='Blogs'
              primaryText='Blog'
              onClick={onMenuClick}
              leftIcon={<Forum />}
            />
            <MenuItemLink
              key='CommentsFeedback'
              to={`/CommentsFeedback`}
              primaryText='Comentarios'
              onClick={onMenuClick}
              leftIcon={<Feedback />}
            />

            <MenuItemLink
              key='GeneralDiscussion Temas'
              to={`/GeneralDiscussion`}
              primaryText='Discusión General'
              onClick={onMenuClick}
              leftIcon={<ModeComment />}
            />
          </SubMenu>
          <SubMenu
            handleToggle={() => this.handleToggle('menuAula')}
            isOpen={this.state.menuAula}
            sidebarIsOpen={open}
            key='Aula'
            name='Aula'
            label='Aula'
            Notes
            icon={<Book />}
          >
            <MenuItemLink
              to={`/Course`}
              key='Cursos'
              primaryText='Cursos'
              onClick={onMenuClick}
              leftIcon={<Book />}
            />{' '}
            <MenuItemLink
              to={`/workshops`}
              key='Talleres'
              primaryText='Talleres'
              onClick={onMenuClick}
              leftIcon={<Book />}
            />
          </SubMenu>
          <SubMenu
            handleToggle={() => this.handleToggle('menuActivity')}
            isOpen={this.state.menuVictim}
            sidebarIsOpen={open}
            key='Actividades'
            name='Actividades'
            label='Actividades'
            icon={<LocalActivity />}
          />
          <Responsive small={logout} medium={null} />
        </Box>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
  open: state.admin.ui.sidebarOpen,
  theme: state.theme,
  locale: state.i18n.locale
})
const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,

    {}
  )
)

export default enhance(Menu)
