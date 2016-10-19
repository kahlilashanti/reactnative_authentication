

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native';

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin')

module.exports = React.createClass({
  componentWillMount: function(){
    Parse.initialize("ks0dVebk90W3zdUzDNdpvVh6CoK8FWUjoDnTec8a","dBuRKhtFFAZlhxHNE4d4vvIW79OtI4zIFy77waKS");
  },
  render: function(){
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
