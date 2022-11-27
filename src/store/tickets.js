import { createSlice } from '@reduxjs/toolkit'

const getDuration = (ticket) => {
  return ticket.segments.reduce((acc, el) => {
    return acc + el.duration
  }, 0)
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    loading: true,
    tickets: [],
    errorCount: 0,
    showed: 5,
    transfers: { all: true, noTransfer: true, one: true, two: true, three: true },
  },
  reducers: {
    addTickets(state, action) {
      state.tickets.push(...action.payload)
    },
    showMore(state) {
      state.showed = state.showed + 5
    },
    setLoading(state, action) {
      state.loading = action.payload
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
    setTransfers(state, action) {
      state.transfers = action.payload
    },
  },
})

const { addTickets, showMore, setLoading, setErrorCount, sortByPrice, sortBySpeed, sortByOptimal, setTransfers } =
  ticketsSlice.actions

export const fetchTickets = () => {
  return (dispatch) => {
    dispatch(setLoading(true))
    const id = 'searchId=' + sessionStorage.getItem('searchId')
    fetch(`https://aviasales-test-api.kata.academy/tickets?${id}`)
      .then(
        (res) => res.json(),
        (err) => err
      )
      .then(
        (res) => {
          if (!res.stop) {
            dispatch(addTickets(res.tickets))
          } else {
            dispatch(setLoading(false))
          }
        },
        () => {
          dispatch(setErrorCount())
        }
      )
  }
}

export default ticketsSlice.reducer
export { showMore, sortByPrice, sortBySpeed, sortByOptimal, setTransfers }
