
import { create } from '../../api/api'

export default function taskReducer(state = [], action) {
  switch (action.type) {
    case 'addTask':
      return create(action.payload)
    case 'delete':
      return state.filter(a => a.task === action.payload)
    default:
      return state
  }
}