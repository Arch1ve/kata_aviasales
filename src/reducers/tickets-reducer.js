export default function tickets(state = { loading: true, tickets: [], errorCount: 0 }, action) {
  switch (action.type) {
    case 'ADD_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.payload] }
    case 'LOADING':
      return { ...state, loading: action.loading }
    case 'ERROR':
      return { ...state, errorCount: state.errorCount + 1 }
    default:
      return state
  }
}
