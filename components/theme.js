import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

class Theme extends Component {
  constructor(props) {
    super(props)

    this.state = {
      onLoad: props.onLoad,
      theme: null
    }
  }

  componentDidMount() {
    const { onLoad } = this.state
    var self = this

    fetch(`${API_ENDPOINT}/api/v1/themes`)
      .then(response => response.json())
      .then(response => {
        this.setState({theme: response})
        onLoad ? onLoad(this.state.theme) : null
      })
  }

  render() {
    const {theme} = this.state
    if (theme) {
      return (
        <Text style={styles.text}>{theme.text}</Text>
      )
    }
    else {
      return (
        <Text style={styles.text}>Loading...</Text>
      )
    }

  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 15,
    backgroundColor: '#f29bc1'
  }
})

export default Theme;
