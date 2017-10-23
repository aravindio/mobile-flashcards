import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { white } from '../utils/colors'

class Quiz extends Component {
  static navigationOptions = () => ({ title: 'Quiz' })

  render() {
    return (
      <View style={styles.container}>
        <Text>Quiz for {this.props.navigation.state.params.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: white
  }
})

export default Quiz