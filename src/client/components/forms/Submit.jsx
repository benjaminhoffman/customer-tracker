import React from 'react'
import styles from './Form.css'

const Submit = () => {
  return (
    <div className={styles.group}>
      <input type="submit" value="Submit" aria-label="Submit Form" />
    </div>
  )
}

export default Submit
