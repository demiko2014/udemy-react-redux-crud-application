import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { readEvents } from '../actions'

class EventsIndex extends Component {

  componentDidMount() {
    console.log("componentDidMount")
    this.props.readEvents()
  }

  renderEvents() {
    console.log("renderEvents")
    return _.map(this.props.events, event => (
      <tr key={event.id} >
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
  ))}

  render() {
    console.log("render")
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
      <Link to="/events/new">New Event</Link>
      </React.Fragment>
  )}
}

const mapStateToProps = store => ({events: store.events})
const mapDispatchTroProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchTroProps)(EventsIndex)