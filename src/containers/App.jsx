import React, { Component } from 'react'
import Tabs from '../components/Tabs'
import Body from '../components/Body'
import styles from './App.css'

export default class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.onTabClick = this.onTabClick.bind(this)

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
      activeTab: 'login'
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
        <Body className={styles.body} activeTab={this.state.activeTab} />
      </div>
    )
  }

  onTabClick(tab) {
    this.setState({
      activeTab: tab
    })
  }
}
