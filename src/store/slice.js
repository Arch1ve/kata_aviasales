import { createSlice } from '@reduxjs/toolkit'

const getDuration = (ticket) => {
  return ticket.segments.reduce((acc, el) => {
    return acc + el.duration
  }, 0)
}

const slice = createSlice({
  name: 'tickets',
  initialState: {
    loading: true,
    tickets: [],
    errorCount: 0,
    showed: 5,
  },
  reducers: {
    addTickets(state, action) {
      state.tickets.push(...action.payload)
    },
    showMore(state) {
      state.showed = state.showed + 5
    },
    setLoading(state, action) {
      state.loading = action.loading
    },
    setErrorCount(state) {
      state.errorCount = state.errorCount + 1
    },
    sortByPrice(state) {
      const slice = state.tickets.slice()
      state.tickets = slice.sort((prev, next) => prev.price > next.price)
    },
    sortBySpeed(state) {
      const slice = state.tickets.slice()
      state.tickets = slice.sort((prev, next) => {
        return getDuration(prev) > getDuration(next)
      })
    },
    sortByOptimal(state) {
      const slice = state.tickets.slice()
      state.tickets = slice.sort((prev, next) => prev.price + getDuration(prev) > next.price + getDuration(next))
    },
  },
})

export default slice.reducer
