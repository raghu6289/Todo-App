export default function theme(state = {}, action) {
  switch (action.type) {
    case 'changeColor':
      return { ...state, color: action.payload }
    default:
      return state
  }
}