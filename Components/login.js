import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TextInput
      style = {styles.inputBox}
      placeholder="Telepon atau Email"
      />
      <TextInput
      style = {styles.inputBox}
      placeholder="Password"
      secureTextEntry={true}
      />
      </View>     
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
  },

  inputBox:{
    width: 250,
    fontSize: 13,
    color: '#000000'
  },

  button:{
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B5998',
    marginVertical: 10,
    paddingHorizontal: 80
  },

  buttonText:{
    fontSize:13,
    color:'#f7f7f7'
  }
})