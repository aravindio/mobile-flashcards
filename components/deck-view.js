import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { connect } from 'react-redux'
import { white } from '../utils/colors'

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
        <Text>{title}</Text>
        <Text>
          {`${cardsCount} card${cardsCount === 1 ? '' : 's'}`}
        </Text>
        <TouchableNativeFeedback
          useForeground
          background={TouchableNativeFeedback.Ripple('#CCCCCC', true)}
          style={{ flex: 1 }}
        >
          <View>
            <Text>Add card</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          useForeground
          background={TouchableNativeFeedback.Ripple('#606060', true)}
          style={{ flex: 1 }}
        >
          <View>
            <Text>Start Quiz</Text>
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
  }
})

const mapStateToProps = store => ({ store })

export default connect(mapStateToProps)(DeckView)