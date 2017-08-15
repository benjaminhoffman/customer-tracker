import React, { Component } from 'react'
import styles from './Form.css'
import { sources, internetSources, doctors } from './CONSTANTS'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        age: '',
        country: '',
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
          {inputDiv({
            handleChange: this.handleChange,
            id: 'date',
            labelText: 'Date of Appointment',
            type: 'date',
            value: this.state.formData.date
          })}

          {/* INITIALS */}
          {inputDiv({
            handleChange: this.handleChange,
            id: 'initials',
            labelText: `Patient's Initials`,
            value: this.state.formData.initials
          })}

          {/* GENDER */}
          <div className={styles.group}>
            <span className={styles.labelWrapper}>
              <label htmlFor="gender">Patient's Gender:</label>
            </span>
            <span className={styles.controlRadio}>
              <label className={styles.labelRadio}>
                <input
                  checked
                  onChange={this.handleChange}
                  id="gender_male"
                  name="gender"
                  type="radio"
                  value="male"
                />Male
              </label>
              <label className={styles.labelRadio}>
                <input
                  onChange={this.handleChange}
                  id="gender_female"
                  name="gender"
                  type="radio"
                  value="female"
                />Female
              </label>
            </span>
          </div>

          {/* AGE */}
          {inputDiv({
            handleChange: this.handleChange,
            id: 'age',
            labelText: `Patient's Age`,
            type: 'number',
            value: this.state.formData.age
          })}

          {/* SOURCE */}
          {selectDiv({
            handleChange: this.handleChange,
            id: 'source',
            labelText: 'Referral Source',
            value: this.state.formData.source,
            values: sources
          })}

          {/* INTERNET */}
          {selectDiv({
            handleChange: this.handleChange,
            id: 'internetSources',
            labelText: 'Internet',
            value: this.state.formData.internetSources,
            values: internetSources
          })}

          {/* OTHER */}
          {inputDiv({
            handleChange: this.handleChange,
            id: 'other',
            labelText: `Other`,
            value: this.state.formData.other
          })}

          {/* DOCTOR */}
          {selectDiv({
            handleChange: this.handleChange,
            id: 'doctor',
            labelText: `Doctor`,
            value: this.state.formData.doctor,
            values: doctors
          })}

          {/* COUNTRY */}
          <div className={styles.group}>
            <span className={styles.labelWrapper}>
              <label htmlFor="country">Country:</label>
            </span>
            <span className={styles.controlRadio}>
              <label className={styles.labelRadio}>
                <input
                  checked
                  onChange={this.handleChange}
                  id="country_usa"
                  name="country"
                  type="radio"
                  value="usa"
                />USA
              </label>
              <label className={styles.labelRadio}>
                <input
                  onChange={this.handleChange}
                  id="country_other"
                  name="country"
                  type="radio"
                  value="other"
                />Other
              </label>
            </span>
          </div>

          {/* ZIP */}
          {inputDiv({
            handleChange: this.handleChange,
            id: 'zip',
            labelText: `Zip Code`,
            value: this.state.formData.zip
          })}

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

const inputDiv = ({
  handleChange,
  htmlFor,
  id,
  labelText,
  type = 'text',
  value
}) =>
  <div className={styles.group}>
    <span className={styles.labelWrapper}>
      <label htmlFor={id}>
        {labelText}:
      </label>
    </span>
    <input
      className={styles.control}
      id={id}
      name={id}
      onChange={handleChange}
      type={type}
      value={value}
    />
  </div>

const selectDiv = ({ labelText, id, value, values, handleChange }) =>
  <div className={styles.group}>
    <span className={styles.labelWrapper}>
      <label htmlFor={id}>
        {labelText}:
      </label>
    </span>
    <select
      className={styles.controlSelect}
      id={id}
      name={id}
      onChange={handleChange}
      value={value}
    >
      {values.map(option =>
        <option value={option} key={option}>
          {option}
        </option>
      )}
    </select>
  </div>

const getToday = () => new Date().toISOString().substring(0, 10)

export default Form
