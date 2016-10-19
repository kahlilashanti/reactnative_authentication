

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native';

var Signin = require('./components/authentication/signin')

module.exports = React.createClass({
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