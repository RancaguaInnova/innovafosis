import { Layout, Sidebar } from "react-admin";
import { darkTheme, lightTheme } from "./themes";

import Menu from "./Menu";
import React from "react";
import { connect } from "react-redux";

const CustomSidebar = props => <Sidebar {...props} size={200} />;
const CustomLayout = props => <Layout {...props} sidebar={CustomSidebar} menu={Menu} />;

export default connect(
  state => ({
    theme: state.theme === "dark" ? darkTheme : lightTheme
  }),
  {}
)(CustomLayout);
