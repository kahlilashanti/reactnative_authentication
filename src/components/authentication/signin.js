import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput,} from 'react-native';

var Parse = require('parse/react-native');
var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  render: function(){
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
          />
        <Text style= {styles.label}>Password:</Text>
        <TextInput secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          />
        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Sign In'} onPress={this.onPress} />
      </View>
    );
  },
  onPress: function(){
      Parse.User.login(this.state.username, this.state.password, {
        success: (user) => { console.log(user); },
        error: (data, error) => { this.setState({ errorMessage: error.message }); }
      });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
