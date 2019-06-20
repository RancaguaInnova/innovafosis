import { EventNote, LiveTv, People, Person, Portrait } from "@material-ui/icons";
import { MenuItemLink, Responsive, translate } from "react-admin";
import React, { Component } from "react";

import PropTypes from "prop-types";
import SettingsIcon from "@material-ui/icons/Settings";
import SubMenu from "./SubMenu";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Menu extends Component {
  state = {
    menuVictim: false,
    menuForo: false
  };

  static propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object
  };

  handleToggle = menu => {
    this.setState(state => ({ [menu]: !state[menu] }));
  };

  render() {
    const { onMenuClick, open, logout } = this.props;
    return (
      <div>
        <SubMenu
          handleToggle={() => this.handleToggle("menuVictim")}
          isOpen={this.state.menuVictim}
          sidebarIsOpen={open}
          key="Victimas Y Eventos"
          name="Emergencia"
          label="Victimas Y Eventos"
          icon={<Portrait />}
        >
          <MenuItemLink
            to={`/Live`}
            key="Eventos en vivo"
            primaryText="Eventos en vivo"
            onClick={onMenuClick}
            leftIcon={<LiveTv />}
          />

          <MenuItemLink to={`/Event`} key="Eventos" primaryText="Eventos" onClick={onMenuClick} leftIcon={<EventNote />} />
          <MenuItemLink to={`/Victim`} key="Victimas" primaryText="Victimas" onClick={onMenuClick} leftIcon={<People />} />
          <MenuItemLink
            key="Profesionales"
            to={`/Professional`}
            primaryText="Profesionales"
            onClick={onMenuClick}
            leftIcon={<Person />}
          />
        </SubMenu>
        <SubMenu
          handleToggle={() => this.handleToggle("menuForo")}
          isOpen={this.state.menuForo}
          sidebarIsOpen={open}
          name="Comunidad"
          label="Comunidad"
          icon={<Portrait />}
        >
          <MenuItemLink
            to={`/Announcements`}
            key="Announcements"
            primaryText="Anuncios"
            onClick={onMenuClick}
            leftIcon={<EventNote />}
          />
          <MenuItemLink to={`/Blogs`} key="Blogs" primaryText="Blogs" onClick={onMenuClick} leftIcon={<People />} />
          <MenuItemLink
            key="CommentsFeedback"
            to={`/CommentsFeedback`}
            primaryText="Comentarios"
            onClick={onMenuClick}
            leftIcon={<Person />}
          />
        </SubMenu>
        <SubMenu
          handleToggle={() => this.handleToggle("menuVictim")}
          isOpen={this.state.menuVictim}
          sidebarIsOpen={open}
          key="Cursos"
          name="Cursos"
          label="Cursos"
          icon={<Portrait />}
        />
        <SubMenu
          handleToggle={() => this.handleToggle("menuVictim")}
          isOpen={this.state.menuVictim}
          sidebarIsOpen={open}
          key="Actividades"
          name="Actividades"
          label="Actividades"
          icon={<Portrait />}
        />
        <Responsive
          xsmall={
            <MenuItemLink to="/configuration" primaryText="Configuración" leftIcon={<SettingsIcon />} onClick={onMenuClick} />
          }
          medium={null}
        />
        <Responsive
          small={logout}
          medium={null} // Pass null to render nothing on larger devices
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  open: state.admin.ui.sidebarOpen,
  theme: state.theme,
  locale: state.i18n.locale
});

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    {}
  ),
  translate
);

export default enhance(Menu);
