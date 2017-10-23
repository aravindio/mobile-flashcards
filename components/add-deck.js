import React, { Component } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import Input from './input'
import Button from './button'
import { white } from '../utils/colors'

class AddDeck extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.title}>
              What is the title of your new deck?
            </Text>
            <Input placeholder='Deck Title' />
            <Button>Create Deck</Button>
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

export default AddDeck