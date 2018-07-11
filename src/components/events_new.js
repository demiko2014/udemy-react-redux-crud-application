import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderFieled(field) {
    const { input, label, type, meta: { touched, error } } = field
    console.log(touched)
    console.log(error)
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

  async onSubmit(values) {
    console.log('onSubmit')
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    console.log("render")
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" component={this.renderFieled} />
          <Field label="Body" name="body" component={this.renderFieled} />
        </div>
        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" containerElement={<Link to="/" />} />
      </form>
  )}
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter title, please"
  if (!values.body) errors.body = "Enter body, please"
  
  return errors
}

const mapDispatchTroProps = ({ postEvent })

export default connect(null, mapDispatchTroProps)(
  reduxForm({ validate, form: "eventNewForm" })(EventsNew)
)