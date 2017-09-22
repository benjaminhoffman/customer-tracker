import React, { Component } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import styles from './App.css'
import axios from 'axios'
// import { logger } from 'redux-logger'
import updateNewEntryField from '../actions/NewEntryForm'
import store from '../store'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.onTabClick = this.onTabClick.bind(this)
    this.onLogin = this.onLogin.bind(this)
    this.onNewEntrySubmit = this.onNewEntrySubmit.bind(this)

    this.state = {
      tabs: [
        { name: 'Login', value: 'login' },
        { name: 'New Entry', value: 'entry' },
        { name: 'Entries', value: 'entries' },
        { name: 'Charts', value: 'charts' }
      ],
      activeTab: 'form'
    }
  }

  render() {
    return (
      <div className={styles.page}>
        <Header
          className={styles.header}
          tabs={this.state.tabs}
          onTabClick={this.onTabClick}
          activeTab={this.state.activeTab}
        />
        <Body
          className={styles.body}
          activeTab={this.state.activeTab}
          newEntryFields={this.props.newEntry}
          onLogin={this.onLogin}
          onFormChange={this.props.onFormChange}
          onNewEntrySubmit={this.onNewEntrySubmit}
        />
      </div>
    )
  }

  onTabClick(tab) {
    this.setState({
      activeTab: tab
    })
  }

  onLogin(e, data) {
    e.preventDefault()
    // TODO authentication
  }

  onNewEntrySubmit(e) {
    e.preventDefault()
    const formData = store.getState().newEntry
    console.log(formData)
    axios
      .post('http://localhost:3001/api/new-entry', formData)
      .then(res => {
        // TODO show success message to user
        alert('submitted!')
      })
      .catch(e => {
        // TODO capture err
        // TODO inform user that their entry did _not_ submit
        console.log(e)
      })
  }
}

const mapStateToProps = state => {
  return { ...state }
}

const mapDispatchToProps = dispatch => {
  return {
    onFormChange: e =>
      dispatch(updateNewEntryField({ [`${e.target.name}`]: e.target.value }))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AppContainer)
)
