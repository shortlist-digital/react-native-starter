var React = require('react-native');
var Router = require('react-native-router');

var {
  StyleSheet,
  View,
  Text, 
  AppRegistry,
  TouchableOpacity
} = React;

var HelloPage = React.createClass({

  nextPage: function() {
    this.props.toRoute({
      name: "A new screen",
      component: HelloPage
    });
  },

   render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.nextPage}>
          <View style={styles.box}>
            <Text>Hello {this.props.name}. Please click me.</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

});

var firstRoute = {
  name: 'Welcome!',
  component: HelloPage
};

var ReactNativeStarter = React.createClass({
  render() {
    return (
      <Router firstRoute = {firstRoute} />
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter);
