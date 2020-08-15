import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'

// 判断是否有redux的开发者工具

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{}

const store = createStore(reducer, reduxDevtools)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
