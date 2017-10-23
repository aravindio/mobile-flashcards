import { SET_DECKS_TO_STORE, ADD_DECK } from '../actions'

export default function reducer (state = {}, action) {
  switch (action.type) {
    case SET_DECKS_TO_STORE:
      return action.decks
    case ADD_DECK:
      return Object.assign({}, state, action.deck)
    default:
      return state
  }
}