'use strict';

import React, { Component } from 'react-native'
import Button from 'apsl-react-native-button'

let Actions = require('react-native-router-flux').Actions

let {
  View,
  Text,
  StyleSheet
} = React;

export default class FromBottom extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Page from the bottom</Text>
        <Button onPress={Actions.pop}>Close</Button>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})



module.exports = FromBottom
