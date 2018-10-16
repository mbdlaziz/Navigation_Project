import React, {Component} from 'react';
import {Platform, Button, StyleSheet, Text, TextInput, View, StatusBar, TouchableOpacity} from 'react-native';  
import { createStackNavigator } from 'react-navigation';
import Biodata from './Components/Biodata';
import Login from './Components/login';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
         <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}> MASUK </Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text>Lupa kata sandi? </Text>
      </TouchableOpacity>
      <Button title="MASUK" onPress={() => this.props.navigation.navigate('Details')}/>
      </View>
    );
  }
}

 // <TextInput style = {styles.inputBox} placeholder="Telepon atau Email"/>
 //        <TextInput style = {styles.inputBox} placeholder="Password" secureTextEntry={true}/>
 //        <Button
 //          title="Login"
 //          onPress={() => this.props.navigation.navigate('Details')}/>

class DetailsScreen extends React.Component {
  render() {
    return (
      <Biodata/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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


const RootStack = createStackNavigator(
  {
    Home: App,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


export default class Apps extends React.Component {
  render() {
    return <RootStack />;
  }
}