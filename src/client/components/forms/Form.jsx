import React, { Component } from 'react'
import styles from './Form.css'
import { sources, internetSources, doctors, radios } from './CONSTANTS'
import Text from './Text'
import Select from './Select'
import Radio from './Radio'

const getToday = () => new Date().toISOString().substring(0, 10)

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        age: '',
        country: 'usa',
        date: getToday(),
        doctor: '',
        gender: 'male',
        initials: '',
        internetSources: '',
        other: '',
        source: '',
        zip: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const { onFormSubmit } = this.props
    return (
      <div className={styles.formWrapper}>
        <form
          className={styles.form}
          onSubmit={e => onFormSubmit(e, this.state.formData)}
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
          <Select
            handleChange={this.handleChange}
            id="internetSources"
            labelText="Internet"
            value={this.state.formData.internetSources}
            values={internetSources}
          />

          {/* OTHER */}
          <Text
            handleChange={this.handleChange}
            id="other"
            labelText="Other"
            value={this.state.formData.other}
          />

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
            value={this.state.formData.zip}
          />

          {/* SUBMIT */}
          <div className={styles.submit}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }

  handleChange(e) {
    this.setState({
      formData: {
        ...this.state.formData,
        [`${e.target.name}`]: e.target.value
      }
    })
  }
}

export default Form
