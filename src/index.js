import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import reducer from './reducers'
import App from './components/app'

const store = configureStore({ reducer: reducer, middleware: [reduxThunk] })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
