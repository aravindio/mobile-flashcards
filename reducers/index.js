import { SET_DECKS_TO_STORE, ADD_DECK, ADD_CARD } from '../actions'

export default function reducer (state = {}, action) {
  switch (action.type) {
    case SET_DECKS_TO_STORE:
      return action.decks
    case ADD_DECK:
      return Object.assign({}, state, action.deck)
    case ADD_CARD:
    const { title, card } = action
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [ ...state[title].questions ].concat(card)
        }
      }
    default:
      return state
  }
}