import React from 'react'
import styles from './Form.css'
import PropTypes from 'prop-types'

const Text = ({ handleChange, id, labelText, type, value }) => {
  return (
    <div className={styles.group}>
      <span className={styles.labelWrapper}>
        <label htmlFor={id}>{labelText}:</label>
      </span>
      <div className={styles.fieldWrapper}>
        <input
          className={styles.control}
          id={id}
          name={id}
          onChange={handleChange}
          type={type}
          value={value}
        />
      </div>
    </div>
  )
}

Text.displayName = 'Text Field'

Text.defaultProps = {
  type: 'text'
}

Text.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Text
