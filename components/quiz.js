import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import Button from './button'
import Result from './result'
import { white, gray, black } from '../utils/colors'

class Quiz extends Component {
  static navigationOptions = () => ({ title: 'Quiz' })

  state = {
    title: '',
    questions: [],
    currentQuestion: 0,
    questionsCorrect: 0
  }

  componentWillMount() {
    const { navigation, store } = this.props
    const { title } = navigation.state.params
    this.setState({
      title,
      questions: store[title].questions
    })
  }

  processAnswer = correct => {
    this.setState(({ questionsCorrect, currentQuestion }) => ({
      questionsCorrect: correct ? questionsCorrect + 1 : questionsCorrect,
      currentQuestion: currentQuestion + 1
    }))
  }

  correct = () => this.processAnswer(true)

  incorrect = () => this.processAnswer()

  restart = () => this.setState({ currentQuestion: 0, questionsCorrect: 0 })

  goBack = () => this.props.navigation.dispatch({ type: 'Navigation/BACK' })

  getPercentage = () => {
    const { questionsCorrect, questions } = this.state
    return Math.floor(questionsCorrect / questions.length * 100)
  }

  render() {
    const { currentQuestion, questions, questionsCorrect } = this.state
    return (
      <View style={styles.container}>
        {
          currentQuestion < questions.length
            ? <View style={styles.container}>
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
                    <Text style={{ color: white }}>Flip</Text>
                  </TouchableOpacity>
                </View>
                <Button onPress={this.correct}>Correct</Button>
                <Button onPress={this.incorrect}>Incorrect</Button>
              </View>
            : <Result
                percentage={this.getPercentage()}
                restart={this.restart}
                goBack={this.goBack}
                correct={questionsCorrect}
                count={questions.length}
              />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: white
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

const mapStateToProps = store => ({ store })

export default connect(mapStateToProps)(Quiz)