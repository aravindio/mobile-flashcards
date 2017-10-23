import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import Button from './button'
import { white, gray, black } from '../utils/colors'

export default class QuizCard extends Component {
  render() {
    const { currentQuestion, questions, correct, incorrect } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.quizStatus}>
          {`Question ${currentQuestion + 1} of ${questions.length}`}
        </Text>
        <View style={styles.cardContainer}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.cardTextContainer}>
              <Text style={{ fontSize: 30 }}>
                {questions[currentQuestion].question}
              </Text>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={{ color: white }}>Answer</Text>
          </TouchableOpacity>
        </View>
        <Button onPress={correct}>Correct</Button>
        <Button onPress={incorrect}>Incorrect</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  quizStatus: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: Dimensions.get('window').width - 90,
    marginLeft: 45,
    marginRight: 45,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: gray,
    borderRadius: 2,
    marginBottom: 30
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center'
  },
  cardTextContainer: {
    padding: 20,
    paddingBottom: 50
  },
  cardButton: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: black,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 2
  }
})