import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

class DoneButton extends Component {
  render() {
    return(
      <View>
        <FontAwesome.Button
          name="camera-retro"
          backgroundColor="#f29bc1"
          onPress={_ => { this.props.action() }}
        >
          <Text style={styles.textButton} >Upload your art!</Text>
        </FontAwesome.Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 12,
    color: '#fff'
  }
})

export default DoneButton;
