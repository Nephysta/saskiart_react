import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

class Theme extends Component {
  constructor(props) {
    super(props)

    this.state = {
      onLoad: props.onLoad,
      theme: null
    }
  }

  fetchTheme() {
    const { onLoad } = this.state

    fetch(`${API_ENDPOINT}/api/v1/themes`)
      .then(response => response.json())
      .then(response => {
        this.setState({ theme: response })
        onLoad ? onLoad(this.state.theme) : null
      })
  }

  componentDidMount() {
    this.fetchTheme()
  }

  render() {
    const { theme } = this.state

    if (theme) {
      return (
        <View>
          <TouchableOpacity
            style={ styles.theme }
            activeOpacity={0.6}
            onPress={ _ => { this.fetchTheme() } }
          >
            <Text style={ styles.text }>{ theme.text }</Text>
          </TouchableOpacity>
          <Text style={ { textAlign: 'center' } }>Tap to reload.</Text>
        </View>
      )
    }
    else {
      return (
        <Text style={ styles.theme }>Loading...</Text>
      )
    }
  }
}

const styles = StyleSheet.create({
  theme: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 15,
    backgroundColor: '#f29bc1'
  },
  text: {
    padding: 10,
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
  }
})

export default Theme;
