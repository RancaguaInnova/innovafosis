import { AppBar, MenuItemLink, UserMenu, translate } from "react-admin";

import Logo from "./Logo";
import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  spacer: {
    flex: 1
  }
};

const CustomUserMenu = translate(({ translate, ...props }) => (
  <UserMenu {...props}>
    <MenuItemLink to="/configuration" primaryText="Configuración" leftIcon={<SettingsIcon />} />
  </UserMenu>
));

const CustomAppBar = ({ classes, ...props }) => (
  <AppBar {...props} userMenu={<CustomUserMenu />}>
    <Typography variant="h3" color="inherit" className={classes.title} id="react-admin-title" />
    <Logo />
    <span className={classes.spacer} />
  </AppBar>
);

export default withStyles(styles)(CustomAppBar);
