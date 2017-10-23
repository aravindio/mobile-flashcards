import React, { Component } from 'react'
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard
} from 'react-native'
import Input from './input'
import Button from './button'
import { white } from '../utils/colors'

class AddCard extends Component {
  static navigationOptions = () => ({ title: 'Add Card' })

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Input
              style={styles.questionInput}
              placeholder='Question'
            />
            <Input
              style={styles.answerInput}
              placeholder='Answer'
            />
            <Button>Add Card</Button>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    backgroundColor: white
  },
  questionInput: {
    marginTop: 0,
    marginBottom: 20
  },
  answerInput: {
    marginTop: 0,
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 5
  }
})

export default AddCard