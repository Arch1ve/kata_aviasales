export default function tickets(state = { loading: true, tickets: [] }, action) {
  switch (action.type) {
    case 'ADD_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.payload] }
    case 'LOADING':
      return { ...state, loading: action.loading }
    default:
      return state
  }
}
