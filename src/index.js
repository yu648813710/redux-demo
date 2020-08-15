import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import store from './store'

// 初次渲染
render(
    <App />,
  document.getElementById('root')
)
// 监听变化然后重新渲染
store.subscribe(()=> {
    render(
        <App />,
      document.getElementById('root')
    )
})