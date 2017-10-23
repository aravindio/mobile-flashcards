import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import QuizCard from './quiz-card'
import Result from './result'
import { white } from '../utils/colors'

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
            ? <QuizCard
                correct={this.correct}
                incorrect={this.incorrect}
                currentQuestion={currentQuestion}
                questions={questions}
              />
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
  }
})

const mapStateToProps = store => ({ store })

export default connect(mapStateToProps)(Quiz)