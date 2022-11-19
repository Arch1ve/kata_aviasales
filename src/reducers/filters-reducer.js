function checkAll(obj) {
  const slicedValues = Object.values(obj).slice(1)
  for (let i of slicedValues) {
    if (i == false) return { ...obj, all: false }
  }
  return { ...obj, all: true }
}

export default function filters(
  state = { all: false, noTransfer: false, one: false, two: false, three: false },
  action
) {
  const checked = action.checked == true
  switch (action.type) {
    case 'ALL':
      if (!checked) {
        return { all: false, noTransfer: false, one: false, two: false, three: false }
      }
      return { all: true, noTransfer: true, one: true, two: true, three: true }
    case 'NO_TRANSFER':
      return checkAll({ ...state, noTransfer: checked })
    case 'ONE_TRANSFER':
      return checkAll({ ...state, one: checked })
    case 'TWO_TRANSFERS':
      return checkAll({ ...state, two: checked })
    case 'THREE_TRANSFERS':
      return checkAll({ ...state, three: checked })
    default:
      return state
  }
}
