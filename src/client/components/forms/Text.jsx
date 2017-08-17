import React from 'react'
import styles from './Form.css'

const Text = ({
  handleChange,
  htmlFor,
  id,
  labelText,
  type = 'text',
  value
}) => {
  return (
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
  )
}

export default Text
