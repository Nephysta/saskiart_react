import React, { Component }from 'react';
import { StyleSheet, Text, Dimensions, View, Button, YellowBox, Icon } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

class PlayButton extends Component {
  render() {
    return (
      <View>
        <MaterialCommunityIcons.Button
        name="lightbulb-on-outline"
        backgroundColor="#efec4a"
        onPress={() => { this.props.action() }}>
          <Text style={styles.textButton} >Get inspired!</Text>
        </MaterialCommunityIcons.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 32,
    color: '#fff'
  }
});

export default PlayButton;
