import React from 'react'
import { render } from 'react-dom'
import AppContainer from './containers/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

store.subscribe(() => {
  console.log('store changed', store.getState())
})

render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
