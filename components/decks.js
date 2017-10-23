import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../actions'
import { white, gray, darkGray } from '../utils/colors'

class Decks extends Component {
  componentWillMount() {
    this.props.getDecks()
  }

  isEmpty = store => Object.keys(Object.assign({}, store)).length === 0

  changeShape = store =>
    [
      ...Object.keys(Object.assign({}, store)).map(title => ({
        title: store[title].title,
        cardsCount: store[title].questions.length
      }))
    ]

  renderItem = ({ item }) => {
    const { title, cardsCount } = item
    const { navigate } = this.props.navigation
    return (
      <View style={styles.touchableContainer}>
        <TouchableOpacity
          onPress={() => navigate('DeckView', { title })}
        >
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardsCount}>
              {`${cardsCount} card${cardsCount === 1 ? '' : 's'}`}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { store } = this.props
    const data = this.changeShape(store)
    const props = {
      style: data.length > 0 ? styles.listContainer : styles.container
    }
    return (
      <View { ...props }>
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
                : <FlatList
                    data={data}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderItem}
                  />
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
    alignSelf: 'stretch',
    backgroundColor: white
  },
  listContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: white
  },
  touchableContainer: {
    borderBottomColor: gray,
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  cardContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 40
  },
  cardTitle: {
    fontSize: 30,
    textAlign: 'center'
  },
  cardsCount: {
    fontSize: 18,
    textAlign: 'center',
    color: darkGray
  }
})

const mapStateToProps = store => ({ store })

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(getDecks())
})

export default connect(mapStateToProps, mapDispatchToProps)(Decks)