import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image, View } from 'react-native';

class Border extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Image style={styles.corner_top_left} source={require('../assets/img/corner-top-left.png')} />
        <Image style={styles.corner_top_right} source={require('../assets/img/corner-top-right.png')} />
        <Image style={styles.corner_bot_left} source={require('../assets/img/corner-bot-left.png')} />
        <Image style={styles.corner_bot_right} source={require('../assets/img/corner-bot-right.png')} />

        <View style={this.props.style}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  corner_top_left: { zIndex: 10, position: 'absolute', top: 0, left: 0, height: 50, width: 50},
  corner_top_right: { zIndex: 10, position: 'absolute', top: 0, right: 0, height: 50, width: 50 },
  corner_bot_left: { zIndex: 10, position: 'absolute', bottom: 0, left: 0, height: 50, width: 50 },
  corner_bot_right: { zIndex: 10, position: 'absolute', bottom: 0, right: 0, height: 50, width: 50 },
});

export default Border;
