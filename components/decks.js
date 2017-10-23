import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../actions'

class Decks extends Component {
  componentWillMount() {
    this.props.getDecks()
  }

  isEmpty = store => Object.keys(store).length === 0

  render() {
    const store = this.props.store
    return (
      <View style={styles.container}>
        {
          store === null
            ? <Text>
                You haven't added any decks yet
              </Text>
            : this.isEmpty(store)
                ? <ActivityIndicator
                    style={{ marginTop: 30 }}
                    size={30}
                  />
                : <Text>
                    {JSON.stringify(store, null, 2)}
                  </Text>
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
    paddingLeft: 20,
    paddingRight: 20
  }
})

const mapStateToProps = store => ({ store })

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(getDecks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Decks)