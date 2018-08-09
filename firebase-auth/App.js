import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import config from './config'
import firebase from 'firebase'
import SignUpForm from './Components/SignUpForm'
import SignInForm from './Components/SignInForm'


export default class App extends React.Component {

	componentDidMount(){
  		firebase.initializeApp(config);
	}

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
		<SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	padding: 20
  },
});
