import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { black, white } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'

export default function Button ({ onPress, children, type, icon }) {
  const isTypeOutline = type === 'outline'
  const rippleColor = isTypeOutline ? '#CCCCCC' : '#606060'
  const backgroundColor = isTypeOutline ? white : black
  const color = isTypeOutline ? black : white
  return (
    <TouchableNativeFeedback
      useForeground
      background={TouchableNativeFeedback.Ripple(rippleColor, true)}
      onPress={onPress}
      style={{ flex: 1 }}
    >
      <View style={[styles.button, { backgroundColor }]}>
        <Text style={[styles.buttonText, { color }]}>
          {icon && <FontAwesome name={icon} size={16} color={white} />}
          {icon ? ' ' + children : children}
        </Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
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