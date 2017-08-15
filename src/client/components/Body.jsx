import React from 'react'
import Login from './Login'
import Form from './forms/Form'
import Charts from './Charts'

const Body = ({ activeTab, onLogin, onFormSubmit }) => {
  return (
    <div>
      {activeTab === 'login' && <Login onLogin={onLogin} />}
      {activeTab === 'form' && <Form onFormSubmit={onFormSubmit} />}
      {activeTab === 'charts' && <Charts />}
    </div>
  )
}

export default Body
