import React, { Component } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import styles from './App.css'
import axios from 'axios'

export default class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.onTabClick = this.onTabClick.bind(this)
    this.onLogin = this.onLogin.bind(this)
    this.onNewEntrySubmit = this.onNewEntrySubmit.bind(this)

    this.state = {
      tabs: [
        {
          name: 'Login',
          value: 'login'
        },
        {
          name: 'New Entry',
          value: 'entry'
        },
        {
          name: 'Entries',
          value: 'entries'
        },
        {
          name: 'Charts',
          value: 'charts'
        }
      ],
      activeTab: 'form'
    }
  }

  render() {
    return (
      <div className={styles.page}>
        <Header
          className={styles.tabs}
          tabs={this.state.tabs}
          onTabClick={this.onTabClick}
          activeTab={this.state.activeTab}
        />
        <Body
          className={styles.body}
          activeTab={this.state.activeTab}
          onLogin={this.onLogin}
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

  onNewEntrySubmit(e, formData) {
    e.preventDefault()
    axios
      .post('http://localhost:3001/api/new-patient', formData)
      .then(res => {
        // TODO show success message to user
      })
      .catch(e => {
        // TODO capture err
        // TODO inform user that their entry did _not_ submit
        console.log(e)
      })
  }
}
