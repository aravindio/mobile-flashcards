import { AsyncStorage } from 'react-native'

const DECK_KEY = 'MobileFlashcards:Decks'

export const getDecks = () =>
  AsyncStorage.getItem(DECK_KEY)
    .then(JSON.parse)
    .then(decks => decks)

export const saveDeckTitle = deck =>
  AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(deck))
    .then(() => deck)