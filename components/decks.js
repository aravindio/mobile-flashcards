import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Decks extends Component {
  render() {
    return (
      <Text style={styles.text}>Decks list will appear here</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 20
  }
})

export default Decks