import React from 'react'
import { View, Text, StatusBar as DefaultStatusBar } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Constants } from 'expo'
import reducer from './reducers'
import { black } from './utils/colors'

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

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar />
          <Text style={{ textAlign: 'center' }}>Hello world</Text>
        </View>
      </Provider>
    )
  }
}