import React, { Component } from 'react'
import styles from './Login.css'
import Text from './forms/Text'
import Submit from './forms/Submit'
import PropTypes from 'prop-types'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    const { onLogin } = this.props
    return (
      <div className={styles.formWrapper} aria-label="Login Form">
        <form className={styles.form} onSubmit={e => onLogin(e, this.state)}>
          {/* EMAIL ADDRESS */}
          <Text
            handleChange={this.handleChange}
            id="email"
            labelText="Email Address"
            type="email"
            value={this.state.email}
          />

          {/* PASSWORD */}
          <Text
            handleChange={this.handleChange}
            id="password"
            labelText="Password"
            type="password"
            value={this.state.password}
          />

          <Submit />
        </form>
      </div>
    )
  }

  handleChange(e) {
    this.setState({
      [`${e.target.name}`]: e.target.value
    })
  }
}

Login.displayName = 'Login'

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
}

export default Login
