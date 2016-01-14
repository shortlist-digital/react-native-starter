'use strict';

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet
} = React;

class TabView extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Tab #{this.props.name}</Text>
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

module.exports = TabView;
