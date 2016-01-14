'use strict';

var React = require('react-native');
var Button = require('apsl-react-native-button');
var Actions = require('react-native-router-flux').Actions;

var {
  View,
  Text,
  StyleSheet
} = React;


class TabView extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Next Screen</Text>
        {this.props.name === "tab1_1" &&
        <Button onPress={Actions.tab1_2}>next screen</Button>
        }
        <Button onPress={Actions.pop}>Go Back</Button>
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
  }
});

module.exports = TabView;
