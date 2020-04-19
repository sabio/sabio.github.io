import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './redux/store';
import './index.css'
import 'normalize.css'
import App from './containers/App'


let initialState = {
  language: "es"
};

ReactDOM.render(
  <Provider store={configureStore(initialState)}>
    <App />
  </Provider>,
  document.getElementById('app')
)
