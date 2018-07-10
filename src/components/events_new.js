import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//import { postEvent } from '../actions'

class EventsNew extends Component {
  render() {
    console.log("render")
    return (
      <React.Fragment>
        <div>Hi</div>
      </React.Fragment>
  )}
}

const mapStateToProps = store => ({events: store.events})
const mapDispatchTroProps = ({ })

export default connect(null, mapDispatchTroProps)(EventsNew)