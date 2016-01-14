'use strict';

var React = require('react-native');
var Button = require('apsl-react-native-button');
var Actions = require('react-native-router-flux').Actions;

var {
  View,
  Text,
  StyleSheet
} = React;

class FromBottom extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Page from the bottom</Text>
        <Button onPress={Actions.pop}>Close</Button>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});



module.exports = FromBottom;
