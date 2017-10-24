import React, { Component } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import Input from './input'
import Button from './button'
import { saveDeckTitle } from '../actions'
import { white } from '../utils/colors'

class AddDeck extends Component {
  state = {
    title: ''
  }

  submit = () => {
    Keyboard.dismiss()
    setTimeout(() => {
      const { title } = this.state
      if (title === '')
        alert(`Deck title can't be empty.`)
      else {
        const deck = { [title]: { title, questions: [] } }
        const { saveDeckTitle, navigation } = this.props
        const { reset, navigate } = NavigationActions
        const home = navigate({ routeName: 'Home' })
        const deckView = navigate({ routeName: 'DeckView', params: { title } })
        const actions = [home, deckView]
        saveDeckTitle(deck)
          .then(() => {
            navigation.dispatch(reset({ index: 1, actions }))
            this.setState({ title: '' })
          })
      }
    }, 100)
  }

  render() {
    const { title } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.title}>
              What is the title of your new deck?
            </Text>
            <Input
              value={title}
              placeholder='Deck Title'
              onChange={title => this.setState({ title })}
            />
            <Button onPress={this.submit}>Create Deck</Button>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: white
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20
  }
})

const mapDispatchToProps = dispatch => ({
  saveDeckTitle: deck => dispatch(saveDeckTitle(deck))
})

export default connect(null, mapDispatchToProps)(AddDeck)