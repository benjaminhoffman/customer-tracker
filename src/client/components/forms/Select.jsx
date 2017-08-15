import React from 'react'
import styles from './Form.css'

const Select = ({ labelText, id, value, values, handleChange }) =>
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

export default Select
