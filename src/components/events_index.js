import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { readEvents } from '../actions'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import NavigationSubdirectoryArrowLeft from 'material-ui/svg-icons/content/add';

class EventsIndex extends Component {

  componentDidMount() {
    console.log("componentDidMount")
    this.props.readEvents()
  }

  renderEvents() {
    console.log("renderEvents")
    return _.map(this.props.events, event => (
      <TableRow key={event.id} >
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
  ))}

  render() {
    console.log("render")
    const style = {
      position: 'fixed',
      right: 12,
      bottom: 12
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to='/events/new' />}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader 
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
  )}
}

const mapStateToProps = store => ({events: store.events})
const mapDispatchTroProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchTroProps)(EventsIndex)