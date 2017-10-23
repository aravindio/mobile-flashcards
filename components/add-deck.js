import React, { Component } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import Button from './button'
import { white, black } from '../utils/colors'

class AddDeck extends Component {
  static navigationOptions = () => ({ title: 'Add Deck' })

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.title}>
              What is the title of your new deck?
            </Text>
            <TextInput
              autoCapitalize='sentences'
              underlineColorAndroid='rgba(0, 0, 0, 0)'
              placeholder='Deck Title'
              style={styles.textInput}
            />
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
  },
  textInput: {
    fontSize: 20,
    height: 50,
    color: black,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: black,
    borderStyle: 'solid',
    borderRadius: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20
  }
})

export default AddDeck