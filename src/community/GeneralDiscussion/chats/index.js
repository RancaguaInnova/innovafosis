import { GET_LIST, withDataProvider } from 'react-admin'

import GoogleMapReact from 'google-map-react'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import compose from 'recompose/compose'
import { connect } from 'react-redux'

class Chats extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      ChatsData: []
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  componentDidUpdate(prevProps) {
    if (this.props.version !== prevProps.version) {
      this.fetchData()
    }
  }

  fetchData() {
    this.fetchEvents()
  }

  async fetchEvents() {
    const { dataProvider, id } = this.props
    try {
      const { data: ChatsData } = await dataProvider(GET_LIST, 'GeneralDiscussion-chats', {
        filter: { GeneralDiscussionId: id },
        sort: {
          field: 'date',
          order: 'DESC'
        },
        pagination: {
          page: 1,
          perPage: 50
        }
      })

      this.setState({ ChatsData })
    } catch (e) {}
  }
  render() {
    const { dataProvider } = this.props
    return (
      <div>
        {this.state.ChatsData && (
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Comentario</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Id Discusión</TableCell>
                  <TableCell>Usuario</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.ChatsData.map((item, key) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.comment}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.GeneralDiscussionId}</TableCell>
                    <TableCell>{item.User}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  version: state.admin.ui.viewVersion
})
export default compose(
  connect(mapStateToProps),
  withDataProvider
)(Chats)
