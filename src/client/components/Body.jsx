import React from 'react'
import Login from './Login'
import NewEntry from './NewEntry'
import Charts from './Charts'
import { Route } from 'react-router-dom'
import styles from './Body.css'
import PropTypes from 'prop-types'

const Body = ({
  // activeTab,
  newEntryFields,
  onLogin,
  onFormChange,
  onNewEntrySubmit
}) => {
  return (
    <main className={styles.main} role="main">
      <Route exact path="/" render={() => <Login onLogin={onLogin} />} />
      <Route exact path="/login" render={() => <Login onLogin={onLogin} />} />
      <Route
        path="/entry"
        render={() => (
          <NewEntry
            newEntryFields={newEntryFields}
            onFormChange={onFormChange}
            onNewEntrySubmit={onNewEntrySubmit}
          />
        )}
      />
      <Route path="/charts" component={Charts} />
    </main>
  )
}

Body.displayName = 'Body'

Body.propTypes = {
  // activeTab: PropTypes.string.isRequired,
  newEntryFields: PropTypes.shape({
    age: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    doctor: PropTypes.string,
    gender: PropTypes.string,
    initials: PropTypes.string,
    channel: PropTypes.string,
    other: PropTypes.string,
    source: PropTypes.string,
    zip: PropTypes.string
  }).isRequired,
  onFormChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onNewEntrySubmit: PropTypes.func.isRequired
}

export default Body
