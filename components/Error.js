'use strict';

var React = require('react-native');
var Button = require('apsl-react-native-button');
var Actions = require('react-native-router-flux').Actions;

var {
  View,
  Text,
  StyleSheet
} = React;

class Error extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>{this.props.data}</Text>
        <Button onPress={Actions.dismiss}>Close</Button>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    width:300,
    height:300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
});


module.exports = Error;
