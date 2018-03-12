import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

class RefreshButton extends Component {
  render() {
    return (
      <MaterialCommunityIcons.Button
      name='refresh'
      onPress={() => { this.props.action() }}
      style= {styles.button}
      color='black'
      />
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 0
  }
})

export default RefreshButton;
