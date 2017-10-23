import React from 'react'
import { View, Text, StatusBar as DefaultStatusBar } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import Decks from './components/decks'
import DeckView from './components/deck-view'
import AddDeck from './components/add-deck'
import reducer from './reducers'
import { black, white } from './utils/colors'

const store = createStore(reducer, applyMiddleware(thunk))

function StatusBar () {
  const props = {
    style: {
      backgroundColor: black,
      height: Constants.statusBarHeight
    }
  }
  return (
    <View { ...props }>
      <DefaultStatusBar
        translucent
        backgroundColor={black}
        barStyle='light-content'
      />
    </View>
  )
}

const stackNavigatorOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: black
  }
}

const MainNavigation = StackNavigator({
  Home: {
    screen: Decks,
    navigationOptions: {
      header: null
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: stackNavigatorOptions
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: stackNavigatorOptions
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar />
          <MainNavigation />
        </View>
      </Provider>
    )
  }
}