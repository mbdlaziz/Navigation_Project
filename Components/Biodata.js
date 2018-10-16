import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.welcome}>Nama  : Muhammad Abdul Aziz</Text>
        <Text style={styles.welcome}>Kelas : XI RPL 1</Text>
        <Text style={styles.welcome}>No  : 23</Text>
        <Image style = {{width : 250, height : 300}}
        source={require('./fotoku.jpg')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    color: "black",
    textAlign: 'left',
    margin: 10,
  },
});