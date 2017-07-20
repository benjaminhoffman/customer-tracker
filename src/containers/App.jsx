import React, { Component } from 'react'
import Tabs from '../components/Tabs'
import Body from '../components/Body'
import styles from './App.css'

export default class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.onTabClick = this.onTabClick.bind(this)
    this.onLogin = this.onLogin.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)

    this.state = {
      tabs: [
        {
          name: 'Login',
          value: 'login'
        },
        {
          name: 'Form',
          value: 'form'
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
        <Tabs
          className={styles.tabs}
          tabs={this.state.tabs}
          onTabClick={this.onTabClick}
          activeTab={this.state.activeTab}
        />
        <Body
          className={styles.body}
          activeTab={this.state.activeTab}
          onLogin={this.onLogin}
          onFormSubmit={this.onFormSubmit}
        />
      </div>
    )
  }

  onTabClick(tab) {
    this.setState({
      activeTab: tab
    })
  }

  onLogin(e) {
    e.preventDefault()
    console.log('submitted')
  }

  onFormSubmit(e) {
    e.preventDefault()

    console.log('submitted')
  }
}
