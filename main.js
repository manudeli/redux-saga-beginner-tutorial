import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import User from './src/components/User'
import { Provider } from 'react-redux'
import store from './src/store'

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <User />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
