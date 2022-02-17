import { RECEIVE_API_DATA } from '../actions'

export default (state = { user: null }, action) => {
  switch (action.type) {
    case RECEIVE_API_DATA: {
      return { ...state, user: action.payload }
    }

    default: {
      return state
    }
  }
}
