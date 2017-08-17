import React, { Component } from 'react'
import styles from './NewEntry.css'
import { sources, channels, doctors, radios } from '../CONSTANTS'
import Text from './forms/Text'
import Select from './forms/Select'
import Radio from './forms/Radio'
import Submit from './forms/Submit'

const getToday = () => new Date().toISOString().substring(0, 10)

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        age: '',
        country: 'USA',
        date: getToday(),
        doctor: '',
        gender: 'male',
        initials: '',
        channel: '',
        other: '',
        source: '',
        zip: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const { onNewEntrySubmit } = this.props
    return (
      <form
        className={styles.form}
        onSubmit={e => onNewEntrySubmit(e, this.state.formData)}
      >
        {/* DATE */}
        <Text
          handleChange={this.handleChange}
          id="date"
          labelText="Date of Appointment"
          type="date"
          value={this.state.formData.date}
        />

        {/* INITIALS */}
        <Text
          handleChange={this.handleChange}
          id="initials"
          labelText={`Patient's Initials`}
          value={this.state.formData.initials}
        />

        {/* GENDER */}
        <Radio
          htmlFor="gender"
          labelText={`Patient's Gender`}
          handleChange={this.handleChange}
          radios={radios.gender}
          checkedRadio={this.state.formData.gender}
        />

        {/* AGE */}
        <Text
          handleChange={this.handleChange}
          id="age"
          labelText={`Patient's Age`}
          type="number"
          value={this.state.formData.age}
        />

        {/* SOURCE */}
        <Select
          handleChange={this.handleChange}
          id="source"
          labelText="Referral Source"
          value={this.state.formData.source}
          values={sources}
        />

        {/* INTERNET */}
        {this.state.formData.source === 'Internet' &&
          <Select
            handleChange={this.handleChange}
            id="channel"
            labelText="Internet"
            value={this.state.formData.channel}
            values={channels}
          />}

        {/* OTHER */}
        {this.state.formData.source === 'Other' &&
          <Text
            handleChange={this.handleChange}
            id="other"
            labelText="Other"
            value={this.state.formData.other}
          />}

        {/* DOCTOR */}
        <Select
          handleChange={this.handleChange}
          id="doctor"
          labelText="Doctor"
          value={this.state.formData.doctor}
          values={doctors}
        />

        {/* COUNTRY */}
        <Radio
          htmlFor="country"
          labelText="Country"
          handleChange={this.handleChange}
          radios={radios.country}
          checkedRadio={this.state.formData.country}
        />

        {/* ZIP */}
        <Text
          handleChange={this.handleChange}
          id="zip"
          labelText={`Zip Code`}
          type="number"
          value={this.state.formData.zip}
        />

        {/* SUBMIT */}
        <Submit />
      </form>
    )
  }

  handleChange(e) {
    const value = formatValue(e.target.name, e.target.value)
    this.setState({
      formData: {
        ...this.state.formData,
        [`${e.target.name}`]: value
      }
    })
  }
}

// helper func; format form values to match what db expects
const formatValue = (name, val) => {
  switch (name) {
    case 'initials':
      return val.toUpperCase().slice(0, 2)
    case 'zip':
      return val.slice(0, 5)
    case 'age':
      return val.slice(0, 2)
    default:
      return val
  }
}

export default Form
