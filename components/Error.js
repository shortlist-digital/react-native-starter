'use strict';

import React, { Component } from 'react-native'
import Button from 'apsl-react-native-button'

const Actions = require('react-native-router-flux').Actions

const {
  View,
  Text,
  StyleSheet
} = React

export default class Error extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>{this.props.data}</Text>
        <Button onPress={Actions.dismiss}>Close</Button>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    width:300,
    height:300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
})


module.exports = Error
