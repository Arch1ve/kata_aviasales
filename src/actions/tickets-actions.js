const setLoading = (loading) => ({ type: 'LOADING', loading })
const addTickets = (payload) => ({ type: 'ADD_TICKETS', payload })
const setErrorCount = () => ({ type: 'ERROR' })

export const showMore = () => ({ type: 'SHOW_MORE' })
export const sortByTab = (tabs) => {
  return { type: 'SORT_BY_TAB', payload: tabs }
}
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
