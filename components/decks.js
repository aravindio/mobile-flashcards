import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../actions'

class Decks extends Component {
  componentWillMount() {
    this.props.getDecks()
  }

  render() {
    return (
      <Text style={styles.text}>
        {JSON.stringify(this.props.store, null, 2)}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 20
  }
})

const mapStateToProps = store => ({ store })

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(getDecks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Decks)