import React from 'react'
import Login from './Login'
import Form from './Form'
import Charts from './Charts'

const Body = ({ activeTab }) => {
  return (
    <div>
      {activeTab === 'login' && <Login />}
      {activeTab === 'form' && <Form />}
      {activeTab === 'charts' && <Charts />}
    </div>
  )
}

export default Body
