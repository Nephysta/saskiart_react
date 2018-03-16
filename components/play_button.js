import React, { Component } from 'react'
import { StyleSheet, Text, Dimensions, View, Button, YellowBox, Icon } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

class PlayButton extends Component {
  render() {
    return (
      <View>
        <MaterialCommunityIcons.Button
          name="lightbulb-on-outline"
          backgroundColor="#f29bc1"
          onPress={_ => { this.props.action() }}
        >
          <Text style={styles.textButton} >Get inspired!</Text>
        </MaterialCommunityIcons.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textButton: {
    fontFamily: 'open-sans-condensed-light',
    fontSize: 32,
    color: '#fff'
  }
});

export default PlayButton;
