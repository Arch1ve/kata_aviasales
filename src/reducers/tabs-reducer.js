export default function tabs(state = 'cheap', action) {
  switch (action.type) {
    case 'CHEAP':
      return 'cheap'
    case 'FAST':
      return 'fast'
    case 'OPTIMAL':
      return 'optimal'
    default:
      return state
  }
}
