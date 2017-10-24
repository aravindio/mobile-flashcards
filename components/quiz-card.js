import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated
} from 'react-native'
import Button from './button'
import { white, gray, black } from '../utils/colors'

export default class QuizCard extends Component {
  state = {
    animated: new Animated.Value(0),
    front: '',
    back: '',
    flipped: false
  }

  componentWillMount() {
    const { animated } = this.state
    const front = animated.interpolate(
      { inputRange: [0, 180], outputRange: ['0deg', '180deg'] }
    )
    const back = animated.interpolate(
      { inputRange: [0, 180], outputRange: ['180deg', '360deg'] }
    )
    this.setState({ front, back })
  }

  componentDidUpdate() {
    const { animated, flipped } = this.state
    const transformOptions = { toValue: !flipped ? 0 : 180 }
    Animated.spring(animated, transformOptions).start()
  }

  optionClick = option => {
    const { correct, incorrect } = this.props
    option ? correct() : incorrect()
    if (this.state.flipped)
      this.setState({ flipped: false })
  }

  render() {
    const { currentQuestion, questions } = this.props
    const { front, back, flipped } = this.state
    const zIndex = flipped ? 0 : 2
    const frontStyle = { transform: [{ rotateY: front }], zIndex }
    const backStyle = { transform: [{ rotateY: back }] }
    let questionScrollViewProps = {}
    let answerScrollViewProps = {}
    if (questions[currentQuestion].question.length < 100)
      questionScrollViewProps.contentContainerStyle = styles.scrollView
    if (questions[currentQuestion].answer.length < 100)
      answerScrollViewProps.contentContainerStyle = styles.scrollView
    return (
      <View style={styles.container}>
        <Text style={styles.quizStatus}>
          {`Question ${currentQuestion + 1} of ${questions.length}`}
        </Text>
        <View>
          <Animated.View style={[styles.cardContainer, frontStyle]}>
            <ScrollView { ...questionScrollViewProps }>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>
                  {questions[currentQuestion].question}
                </Text>
              </View>
            </ScrollView>
            <TouchableOpacity
              onPress={() => this.setState({ flipped: true })}
              style={styles.cardButton}
            >
              <Text style={{ color: white }}>Answer</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[backStyle, styles.cardContainer, styles.back]}
          >
            <ScrollView { ...answerScrollViewProps }>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardText}>
                  {questions[currentQuestion].answer}
                </Text>
              </View>
            </ScrollView>
            <TouchableOpacity
              onPress={() => this.setState({ flipped: false })}
              style={styles.cardButton}
            >
              <Text style={{ color: white }}>Question</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <Button onPress={() => this.optionClick(true)} icon='check-circle'>
          Correct
        </Button>
        <Button onPress={() => this.optionClick()} icon='times-circle'>
          Incorrect
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
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
    marginBottom: 60,
    backgroundColor: white
  },
  back: {
    position: 'absolute',
    top: 0
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center'
  },
  cardTextContainer: {
    padding: 20,
    paddingBottom: 50
  },
  cardText: {
    fontSize: 30,
    textAlign: 'center'
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