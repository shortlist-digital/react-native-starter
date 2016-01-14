'use strict'

import React, { Component } from 'react-native'
import Button from 'apsl-react-native-button'

const {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} = React

const Actions = require('react-native-router-flux').Actions


export default class Launch extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Launch Page</Text>
        <Button onPress={Actions.tabbar}>Go to the next page</Button>
        <Button onPress={()=>Actions.FromBottom({data:"Custom data", title:'Custom title' })}>Swipe page from the bottom</Button>
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

export default Launch
