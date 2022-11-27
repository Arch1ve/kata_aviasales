import { configureStore, combineReducers } from '@reduxjs/toolkit'

import tickets from './tickets'

const rootReducer = combineReducers({ tickets })

const store = configureStore({
  reducer: rootReducer,
})

export default store
