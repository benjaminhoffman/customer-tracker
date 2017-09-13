import React from 'react'
import styles from './NewEntry.css'
import { sources, channels, doctors, radios } from '../CONSTANTS'
import Text from './forms/Text'
import Select from './forms/Select'
import Radio from './forms/Radio'
import Submit from './forms/Submit'
import PropTypes from 'prop-types'

const Form = ({ newEntryFields, onFormChange, onNewEntrySubmit }) => {
  const {
    date,
    initials,
    gender,
    age,
    source,
    channel,
    other,
    doctor,
    country,
    zip
  } = newEntryFields
  return (
    <div className={styles.formWrapper} aria-label="New Entry Form">
      <form className={styles.form} onSubmit={onNewEntrySubmit}>
        {/* DATE */}
        <Text
          handleChange={onFormChange}
          id="date"
          labelText="Date"
          type="date"
          value={date}
        />

        {/* INITIALS */}
        <Text
          handleChange={onFormChange}
          id="initials"
          labelText={`Patient's Initials`}
          value={initials}
        />

        {/* GENDER */}
        <Radio
          htmlFor="gender"
          labelText={`Patient's Gender`}
          handleChange={onFormChange}
          radios={radios.gender}
          checkedRadio={gender}
        />

        {/* AGE */}
        <Text
          handleChange={onFormChange}
          id="age"
          labelText={`Patient's Age`}
          type="number"
          value={age}
        />

        {/* SOURCE */}
        <Select
          handleChange={onFormChange}
          id="source"
          labelText="Referral Source"
          value={source}
          values={sources}
        />

        {/* INTERNET */}
        {source === 'Internet' && (
          <Select
            handleChange={onFormChange}
            id="channel"
            labelText="Internet"
            value={channel}
            values={channels}
          />
        )}

        {/* OTHER */}
        {source === 'Other' && (
          <Text
            handleChange={onFormChange}
            id="other"
            labelText="Other"
            value={other}
          />
        )}

        {/* DOCTOR */}
        <Select
          handleChange={onFormChange}
          id="doctor"
          labelText="Doctor"
          value={doctor}
          values={doctors}
        />

        {/* COUNTRY */}
        <Radio
          htmlFor="country"
          labelText="Country"
          handleChange={onFormChange}
          radios={radios.country}
          checkedRadio={country}
        />

        {/* ZIP */}
        <Text
          handleChange={onFormChange}
          id="zip"
          labelText={`Zip Code`}
          type="number"
          value={zip}
        />

        {/* SUBMIT */}
        <Submit />
      </form>
    </div>
  )
}

Form.displayName = 'New Entry Form'

Form.propTypes = {
  age: PropTypes.string,
  country: PropTypes.string,
  date: PropTypes.string,
  doctor: PropTypes.string,
  gender: PropTypes.string,
  initials: PropTypes.string,
  channel: PropTypes.string,
  other: PropTypes.string,
  source: PropTypes.string,
  zip: PropTypes.string
}

export default Form
