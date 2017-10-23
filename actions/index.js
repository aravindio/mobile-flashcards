import * as API from '../utils/api'

export const SET_DECKS_TO_STORE = 'SET_DECKS_TO_STORE'

const setDecksToStore = decks => ({
  type: SET_DECKS_TO_STORE,
  decks
})

export const getDecks = () => dispatch =>
  API
    .getDecks()
    .then(decks => dispatch(setDecksToStore(decks)))