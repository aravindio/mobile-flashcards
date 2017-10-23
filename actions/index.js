import * as API from '../utils/api'

export const SET_DECKS_TO_STORE = 'SET_DECKS_TO_STORE'
export const ADD_DECK = 'ADD_DECK'

const setDecksToStore = decks => ({
  type: SET_DECKS_TO_STORE,
  decks
})

export const getDecks = () => dispatch =>
  API
    .getDecks()
    .then(decks => dispatch(setDecksToStore(decks)))

export const addDeck = deck => ({
  type: ADD_DECK,
  deck
})

export const saveDeckTitle = deck => dispatch => (
  API
    .saveDeckTitle(deck)
    .then(deck => dispatch(addDeck(deck)))
)