import React from 'react'
import styles from './Form.css'
import PropTypes from 'prop-types'

const Select = ({ labelText, id, value, values, handleChange }) => {
  return (
    <div className={styles.group}>
      <div className={styles.labelWrapper}>
        <label htmlFor={id}>{labelText}:</label>
      </div>
      <div className={styles.fieldWrapper}>
        <select
          className={styles.controlSelect}
          id={id}
          name={id}
          onChange={handleChange}
          value={value}
        >
          {values.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

Select.displayName = 'Select Field'

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Select
