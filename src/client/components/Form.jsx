import React, { Component } from 'react'
import styles from './Form.css'
import { sources, internetSources, doctors } from './CONSTANTS'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        date: getToday()
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
                  onChange={e => this.handleChange(e, name)}
                  id="gender_male"
                  name="gender"
                  type="radio"
                  value="male"
                />Male
              </label>
              <label className={styles.labelRadio}>
                <input
                  onChange={e => this.handleChange(e, name)}
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
            id: 'internet_sources',
            labelText: 'Internet',
            value: this.state.formData.internet_sources,
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
                  onChange={e => this.handleChange(e, name)}
                  id="country_usa"
                  name="country"
                  type="radio"
                  value="usa"
                />USA
              </label>
              <label className={styles.labelRadio}>
                <input
                  onChange={e => this.handleChange(e, name)}
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

  handleChange(e, id) {
    this.setState({
      formData: {
        ...this.state.formData,
        [`${id}`]: e.target.value
      }
    })
  }
}

const inputDiv = ({
  labelText,
  id,
  type = 'text',
  value,
  htmlFor,
  handleChange
}) =>
  <div className={styles.group}>
    <span className={styles.labelWrapper}>
      <label htmlFor={id}>
        {labelText}:
      </label>
    </span>
    <input
      id={id}
      type={type}
      name={id}
      className={styles.control}
      value={value}
      onChange={e => handleChange(e, id)}
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
      name={id}
      id={id}
      value={value}
      className={styles.controlSelect}
      onChange={e => handleChange(e, name)}
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
