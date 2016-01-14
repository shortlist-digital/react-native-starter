'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight} = React;
var Button = require('apsl-react-native-button');
var Actions = require('react-native-router-flux').Actions;

class Launch extends React.Component {
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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});

module.exports = Launch;
