import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderFieled(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    console.log('onSubmit')
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    console.log("render")
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" component={this.renderFieled} />
          <Field label="Body" name="body" component={this.renderFieled} />
        </div>

        <div>
          <input type="submit" valeu="Submit" disabled={false}/>
          <Link to="/">Cancel</Link>
        </div>
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