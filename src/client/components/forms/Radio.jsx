import React from 'react'
import styles from './Form.css'

const Radio = ({ radios, handleChange, htmlFor, labelText, checkedRadio }) => {
  return (
    <div className={styles.group}>
      <span className={styles.labelWrapper}>
        <label htmlFor={htmlFor}>
          {labelText}:
        </label>
      </span>
      <span className={styles.controlRadio}>
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
      </span>
    </div>
  )
}

export default Radio
