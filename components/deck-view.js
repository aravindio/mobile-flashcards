import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { white, darkGray, black } from '../utils/colors'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params
    return { title }
  }

  render() {
    const { store, navigation } = this.props
    const { title } = navigation.state.params
    const deck = store[title]
    const cardsCount = deck.questions && deck.questions.length
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardsCount}>
          {`${cardsCount} card${cardsCount === 1 ? '' : 's'}`}
        </Text>
        <TouchableNativeFeedback
          useForeground
          background={TouchableNativeFeedback.Ripple('#CCCCCC', true)}
          style={{ flex: 1 }}
        >
          <View style={[styles.button, { backgroundColor: white }]}>
            <Text style={[styles.buttonText, { color: black }]}>
              Add card
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          useForeground
          background={TouchableNativeFeedback.Ripple('#606060', true)}
          style={{ flex: 1 }}
        >
          <View style={[styles.button, { backgroundColor: black }]}>
            <Text style={[styles.buttonText, { color: white }]}>
              Start Quiz
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  cardsCount: {
    fontSize: 18,
    textAlign: 'center',
    color: darkGray,
    marginBottom: 50
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    marginLeft: 45,
    marginRight: 45,
    justifyContent: 'center',
    borderRadius: 2,
    height: 50,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: black
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16
  }
})

const mapStateToProps = store => ({ store })

export default connect(mapStateToProps)(DeckView)