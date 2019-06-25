import {
  AddAlert,
  AlarmRounded,
  ChatBubble,
  Comment,
  EventNote,
  Feedback,
  Forum,
  LiveTv,
  LocalActivity,
  ModeComment,
  Notes,
  People,
  Person,
  Portrait
} from '@material-ui/icons'
import { MenuItemLink, Responsive } from 'react-admin'
import React, { Component } from 'react'

import PropTypes from 'prop-types'
import SettingsIcon from '@material-ui/icons/Settings'
import SubMenu from './SubMenu'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Menu extends Component {
  state = {
    menuVictim: false,
    menuForo: false,
    menuGeneralDiscussion: false
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
      <div>
        <SubMenu
          handleToggle={() => this.handleToggle('menuVictim')}
          isOpen={this.state.menuVictim}
          sidebarIsOpen={open}
          key='Victimas Y Eventos'
          name='Emergencia'
          label='Victimas Y Eventos'
          icon={<AddAlert />}
        >
          <MenuItemLink
            to={`/Live`}
            key='Eventos en vivo'
            primaryText='Eventos en vivo'
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
            primaryText='Blogs'
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
          <SubMenu
            handleToggle={() => this.handleToggle('menuGeneralDiscussion')}
            isOpen={this.state.menuGeneralDiscussion}
            sidebarIsOpen={open}
            key='GeneralDiscussion'
            name='Discusión General'
            label='Discusión General'
            icon={<ModeComment />}
          >
            <MenuItemLink
              key='GeneralDiscussion Temas'
              to={`/GeneralDiscussion`}
              primaryText='Temas'
              onClick={onMenuClick}
              leftIcon={<Forum />}
            />
            <MenuItemLink
              key='Chats'
              name='Chats'
              to={`/GeneralDiscussion-chats`}
              primaryText='Chats'
              onClick={onMenuClick}
              leftIcon={<ChatBubble />}
            />
          </SubMenu>
        </SubMenu>
        <SubMenu
          handleToggle={() => this.handleToggle('menuVictim')}
          isOpen={this.state.menuVictim}
          sidebarIsOpen={open}
          key='Cursos'
          name='Cursos'
          label='Cursos'
          Notes
          icon={<Notes />}
        />
        <SubMenu
          handleToggle={() => this.handleToggle('menuVictim')}
          isOpen={this.state.menuVictim}
          sidebarIsOpen={open}
          key='Actividades'
          name='Actividades'
          label='Actividades'
          icon={<LocalActivity />}
        />

        <Responsive
          small={logout}
          medium={null} // Pass null to render nothing on larger devices
        />
      </div>
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
