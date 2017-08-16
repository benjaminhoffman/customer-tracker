import React from 'react'
import Login from './Login'
import NewEntry from './NewEntry'
import Charts from './Charts'
import { Route } from 'react-router-dom'

const Body = ({ activeTab, onLogin, onNewEntrySubmit }) => {
  return (
    <main>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" render={() => <Login onLogin={onLogin} />} />
      <Route
        path="/entry"
        render={() => <NewEntry onNewEntrySubmit={onNewEntrySubmit} />}
      />
      <Route path="/charts" component={Charts} />
    </main>
  )
}

export default Body
