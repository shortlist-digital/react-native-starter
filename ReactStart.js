import React, { Component } from 'react-native'
import Launch from './components/Launch'
import BottomView from './components/BottomView'
import Error from './components/Error'
import TabView from './components/TabView'
import TabView2 from './components/TabView2'

const {
  Router,
  Route,
  Schema,
  Animations,
  TabBar,
} = require('react-native-router-flux')

const {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
} = React

export default class TabIcon extends Component {
  render(){
    return (
      <Text>{this.props.title}</Text>
    )
  }
}

export default class Example extends Component {
  render() {
    return (
      <Router showNavigationBar={false} >
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="withoutAnimation"/>
        <Schema name="tab" type="switch" icon={TabIcon} />

        <Route name="BottomView" schema="modal">
            <Router name="BottomViewRouter">
                <Route name="BottomViewModal" component={BottomView} title="BottomView" schema="modal"/>
            </Router>
        </Route>

        <Route name="tabbar">
          <Router footer={TabBar} showNavigationBar={true}>
              <Route name="tab1" schema="tab" title="Tab #1" component={TabView2} />
              <Route name="tab2" schema="tab" title="Tab #2" component={TabView2} />
              <Route name="tab3" schema="tab" title="Tab #3" component={TabView2} />
          </Router>
        </Route>

        <Route name="launch" component={Launch} wrapRouter={true} title="Launch" initial={true}/>

      </Router>
    )
  }
}
