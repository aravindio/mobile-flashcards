import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { black } from '../utils/colors'

export default function Input ({ placeholder, onChange, value, style={}, ml }) {
  let multiline = {}
  if (ml) {
    multiline = { multiline: true }
  }
  return (
    <TextInput
      autoCapitalize='sentences'
      underlineColorAndroid='rgba(0, 0, 0, 0)'
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      style={[styles.textInput, style]}
      { ...multiline }
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    height: 50,
    color: black,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: black,
    borderStyle: 'solid',
    borderRadius: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 20,
    marginRight: 20
  }
})