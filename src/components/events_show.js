import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { getEvent, deleteEvent, putEvent } from '../actions'

class EventsShow extends Component {
  constructor(props) {
    console.log("EventsShow")
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  renderFieled(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <TextField
        hint={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        { ...input }
        fullWidth={true}
      />
    )
  }

  async onDeleteClick() {
    console.log("onDeleteClick")
    console.log(this.props)
    const { id } = this.props.match.params
    console.log(id)
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values) {
    console.log('onSubmit')
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  componentDidMount() {
    const id = this.props.match.params.id
    if (id) this.props.getEvent(id)
  }

  render() {
    console.log("render")
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }
    console.log(pristine)
    console.log(submitting)
    console.log(invalid)
    return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="Title" name="title" component={this.renderFieled} />
            <Field label="Body" name="body" component={this.renderFieled} />
          </div>
          <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
          <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} />
          <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
        </form>
  )}
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter title, please"
  if (!values.body) errors.body = "Enter body, please"
  
  return errors
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event }
}

const mapDispatchTroProps = ({deleteEvent, getEvent, putEvent})

export default connect(mapStateToProps, mapDispatchTroProps)(
  reduxForm({ validate, form: "eventShowForm", enableReinitialize: true})(EventsShow)
)