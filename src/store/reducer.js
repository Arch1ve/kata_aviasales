import { createReducer, createAction } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}
const inc = createAction('INC')
export default createReducer(initialState, {
  [inc]: (state) => {
    state.count = state.count + 1
  },
})
