import React from 'react'
import styles from './Login.css'

const Login = ({ onLogin }) => {
  return (
    <form onSubmit={onLogin} className={styles.form}>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" />
      </label>

      <label htmlFor="password">
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Login
