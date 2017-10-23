import { SET_DECKS_TO_STORE } from '../actions'

export default function reducer (state = {}, action) {
  switch (action.type) {
    case SET_DECKS_TO_STORE:
      return action.decks
    default:
      return state
  }
}