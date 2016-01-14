'use strict';

var React = require('react-native');
var {AppRegistry, Navigator, StyleSheet,Text,View} = React;
var Launch = require('./components/Launch');
var FromBottom = require('./components/FromBottom');
var {Router, Route, Schema, Animations, TabBar} = require('react-native-router-flux');
var Error = require('./components/Error');
var TabView = require('./components/TabView');

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

class Header extends React.Component {
    render(){
        return <Text>Header</Text>
    }
}

export default class Example extends React.Component {
  render() {
    return (
      <Router hideNavBar={true} >
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" icon={TabIcon} />

        <Route name="FromBottom" schema="modal">
            <Router name="FromBottomRouter">
                <Route name="FromBottomModal" component={FromBottom} title="FromBottom" schema="modal"/>
            </Router>
        </Route>
        <Route name="tabbar">
            <Router footer={TabBar} showNavigationBar={false}>
                <Route name="tab1" schema="tab" title="Tab #1" >
                    <Router onPop={()=>{console.log("onPop is called!"); return true} }>
                        <Route name="tab1" component={TabView} title="Tab #1" />
                    </Router>
                </Route>
                <Route name="tab2" schema="tab" title="Tab #2" component={TabView} />
                <Route name="tab3" schema="tab" title="Tab #3" component={TabView} />
                <Route name="tab4" schema="tab" title="Tab #4" component={TabView} />
                <Route name="tab5" schema="tab" title="Tab #5" component={TabView} />
            </Router>
        </Route>
        <Route name="launch" header={Header} component={Launch} wrapRouter={true} title="Launch" hideNavBar={true} initial={true}/>
      </Router>
    );
  }
}
