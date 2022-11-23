const setLoading = (loading) => ({ type: 'LOADING', loading })
const addTickets = (payload) => ({ type: 'ADD_TICKETS', payload })

export const fetchTickets = () => {
  return (dispatch) => {
    dispatch(setLoading(true))
    const id = 'searchId=' + sessionStorage.getItem('searchId')
    fetch(`https://aviasales-test-api.kata.academy/tickets?${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (!res.stop) {
          dispatch(addTickets(res.tickets))
        } else {
          dispatch(setLoading(false))
        }
      })
  }
}
