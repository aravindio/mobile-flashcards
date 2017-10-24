import React from 'react'
import { View, Text, StatusBar as DefaultStatusBar } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import Decks from './components/decks'
import DeckView from './components/deck-view'
import AddDeck from './components/add-deck'
import AddCard from './components/add-card'
import Quiz from './components/quiz'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'
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

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck'
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: white,
    indicatorStyle: { backgroundColor: white },
    style: { backgroundColor: black }
  }
})

const stackNavigatorOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: black
  }
}

const MainNavigation = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: stackNavigatorOptions
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: stackNavigatorOptions
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: stackNavigatorOptions
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

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