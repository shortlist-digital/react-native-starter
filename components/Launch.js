import React, { Component } from 'react-native'
import Button from 'apsl-react-native-button'

const {
  View,
  StyleSheet,
} = React

const Actions = require('react-native-router-flux').Actions


export default class Launch extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Button onPress={Actions.tabbar}>Go to the next page</Button>
        <Button onPress={()=>Actions.BottomView({data:"Custom data", title:'Custom title' })}>Swipe page from the bottom</Button>
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
