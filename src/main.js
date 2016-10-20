

import React, {Component} from 'react'
import {StyleSheet, Navigator} from 'react-native';

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Tweets = require('./components/tweets/tweets');

var ROUTES = {
  signin: Signin,
  signup: Signup,
  tweets: Tweets
};

module.exports = React.createClass({
  componentWillMount: function(){
    Parse.initialize("ks0dVebk90W3zdUzDNdpvVh6CoK8FWUjoDnTec8a","dBuRKhtFFAZlhxHNE4d4vvIW79OtI4zIFy77waKS");
  },
  renderScene: function(route, navigator){
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function(){
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight; }}
        />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
