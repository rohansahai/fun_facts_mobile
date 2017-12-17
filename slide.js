import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  }
})

class Slide extends React.Component {
  render() {
    return (
      <View style={styles.slide}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}

module.exports = Slide