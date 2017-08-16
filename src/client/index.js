import React from 'react'
import { render } from 'react-dom'
import AppContainer from './containers/App'
import { BrowserRouter } from 'react-router-dom'

render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  document.getElementById('root')
)
