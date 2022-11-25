// const sortByTab = (state, val) => {
//   const slice = state.tickets.slice()
//   let res
//   if (val == 'cheap') {
//     res = slice.sort((prev, next) => {
//       return prev.price > next.price
//     })
//   }
//   if (val == 'fast') {
//     res = slice.sort((prev, next) => {
//       const firstDuration = prev.segment[0].duration + prev.segment[1].duration
//       const secondDuration = next.segment[0].duration + next.segment[1].duration
//       return firstDuration > secondDuration
//     })
//   }
//   return res
// }

export default function tickets(state = { loading: true, tickets: [], errorCount: 0, showed: 5, current: [] }, action) {
  switch (action.type) {
    case 'ADD_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.payload] }
    case 'LOADING':
      return { ...state, loading: action.loading }
    case 'ERROR':
      return { ...state, errorCount: state.errorCount + 1 }
    case 'SHOW_MORE':
      return { ...state, showed: state.showed + 5 }
    // case 'SORT_BY_TAB':
    //   return {
    //     ...state,
    //     current: sortByTab(state, action.payload),
    //   }
    default:
      return state
  }
}
