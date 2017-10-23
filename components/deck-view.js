import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Button from './button'
import { white, darkGray } from '../utils/colors'

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
        <Button
          type='outline'
          onPress={() => navigation.navigate('AddCard', { title })}
        >
          Add Card
        </Button>
        {
          cardsCount > 0 && (
            <Button onPress={() => navigation.navigate('Quiz', { title })}>
              Start Quiz
            </Button>
          )
        }
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
  }
})

const mapStateToProps = store => ({ store })

export default connect(mapStateToProps)(DeckView)