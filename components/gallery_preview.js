import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import GalleryThumbnail from './gallery_thumbnail'


class GalleryPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onLoad: props.onLoad,
      limit: props.limit || 3,
      pictures: null,
      action: props.action,
      theme_display: props.themeDisplay,
      ideas: props.ideas || null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event)
  }

  componentDidMount() {
    const { limit, onLoad, ideas } = this.state

    if (ideas && ideas.length == 0) { return }

    url = `${API_ENDPOINT}/api/v1/pictures?limit=${limit}`
    if (ideas) { url += `&ideas=${ideas}` }

    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({pictures: response})
        onLoad ? onLoad(this.state.pictures) : null
      })
  }

  render() {
    const { action, pictures, theme_display, touchable } = this.state

    if (pictures) {
      return (
        <View style={styles.container} >
          {pictures.map((picture, i) => {
            return <GalleryThumbnail
              action={action ? (id) => {action(id)} : null}
              id={picture.id}
              key={picture.id}
              number={pictures.length}
              theme={theme_display ? picture.theme : null}
              image={picture.data}
            />
          })}
        </View>
      );
    }
    else {
      return (<Text>Loading...</Text>)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row'
  }
});

export default GalleryPreview;
