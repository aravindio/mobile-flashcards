import React, { Component } from 'react'
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard
} from 'react-native'
import { connect } from 'react-redux'
import Input from './input'
import Button from './button'
import { addCardToDeck } from '../actions'
import { white } from '../utils/colors'

class AddCard extends Component {
  static navigationOptions = () => ({ title: 'Add Card' })

  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { question, answer } = this.state
    if (question === '' || answer === '') {
      question === ''
        ? alert(`Question can't be empty.`)
        : answer === '' && alert(`Answer can't be empty.`)
    } else {
      const { addCardToDeck, navigation } = this.props
      const { title } = navigation.state.params
      const card = { question, answer }
      addCardToDeck(title, card)
      navigation.dispatch({ type: 'Navigation/BACK' })
    }
    Keyboard.dismiss()
  }

  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Input
              style={styles.questionInput}
              placeholder='Question'
              value={question}
              onChange={question => this.setState({ question })}
            />
            <Input
              ml={true}
              style={styles.answerInput}
              placeholder='Answer'
              value={answer}
              onChange={answer => this.setState({ answer })}
            />
            <Button onPress={this.submit}>Add Card</Button>
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

const mapDispatchToProps = dispatch => ({
  addCardToDeck: (title, card) => dispatch(addCardToDeck(title, card))
})

export default connect(null, mapDispatchToProps)(AddCard)