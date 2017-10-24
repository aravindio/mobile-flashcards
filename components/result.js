import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import Button from './button'
import { black } from '../utils/colors'

export default class Result extends Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0),
    fontSize: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity, width, height, fontSize } = this.state
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
    Animated.spring(width, { toValue: 200, speed: 5 }).start()
    Animated.spring(height, { toValue: 200, speed: 5 }).start()
    Animated.spring(fontSize, { toValue: 50, speed: 5 }).start()
  }

  render() {
    const { percentage, restart, goBack, correct, count } = this.props
    const { opacity, width, height, fontSize } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.status}>
          Quiz completed {percentage >= 50 ? '😁' : '😟'}
        </Text>
        <Text style={{ textAlign: 'center' }}>
          {`${correct} out of ${count} questions correct`}
        </Text>
        <View style={styles.percentageContainer}>
          <Animated.View
            style={[styles.percentage, { opacity, width, height }]}
          >
            <Animated.Text
              style={[{ textAlign: 'center' }, { opacity, fontSize }]}
            >
              {`${percentage}%`}
            </Animated.Text>
          </Animated.View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={restart}>Restart Quiz</Button>
          <Button onPress={goBack}>Back to Deck</Button>
        </View>
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
  status: {
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center'
  },
  percentageContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 60
  },
  percentage: {
    borderRadius: 100,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    flex: 1,
    alignSelf: 'stretch'
  }
})