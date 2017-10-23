import { AsyncStorage } from 'react-native'

const DECK_KEY = 'MobileFlashcards:Decks'

export const getDecks = () =>
  AsyncStorage.getItem(DECK_KEY)
    .then(JSON.parse)
    .then(decks => decks)

export const saveDeckTitle = deck =>
  AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(deck))
    .then(() => deck)

export const addCardToDeck = (title, card) =>
  AsyncStorage.getItem(DECK_KEY)
    .then(JSON.parse)
    .then(decks => {
      const newDeck = {
        ...decks,
        [title]: {
          ...decks[title],
          questions: [ ...decks[title].questions ].concat(card)
        }
      }
      return AsyncStorage.setItem(DECK_KEY, JSON.stringify(newDeck))
        .then(() => ({ title, card }))
    })