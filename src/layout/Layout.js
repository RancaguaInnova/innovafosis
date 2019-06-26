import { Layout, Sidebar } from 'react-admin'
import { darkTheme, lightTheme } from './themes'

import AppBar from './AppBar'
import Menu from './Menu'
import React from 'react'
import { connect } from 'react-redux'

const CustomSidebar = props => <Sidebar {...props} size={250} />
const CustomLayout = props => (
  <Layout {...props} appBar={AppBar} sidebar={CustomSidebar} menu={Menu} />
)

export default connect(
  state => ({
    theme: state.theme === 'dark' ? darkTheme : lightTheme
  }),
  {}
)(CustomLayout)
