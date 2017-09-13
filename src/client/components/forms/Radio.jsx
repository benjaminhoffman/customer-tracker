import React from 'react'
import styles from './Form.css'
import PropTypes from 'prop-types'

const Radio = ({ radios, handleChange, htmlFor, labelText, checkedRadio }) => {
  return (
    <div className={styles.group}>
      <div className={styles.labelWrapper}>
        <legend htmlFor={htmlFor}>{labelText}:</legend>
      </div>
      <div className={styles.fieldWrapper}>
        <div className={styles.controlRadio}>
          {radios.map(radio => {
            return (
              <label key={radio.id} className={styles.labelRadio}>
                <input
                  checked={radio.checked === `${checkedRadio}`}
                  onChange={handleChange}
                  id={radio.id}
                  name={radio.name}
                  type="radio"
                  value={radio.value}
                />
                {radio.inputText}
              </label>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Radio.displayName = 'Radio Field'

Radio.propTypes = {
  checkedRadio: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  htmlFor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  radios: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      inputText: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Radio
