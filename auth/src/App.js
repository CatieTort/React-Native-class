import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/common';
import LoginForm from './Components/LoginForm';


class App extends Component {
	componentWillMount(){
	  // Initialize Firebase
	  firebase.initializeApp({
		  apiKey: "AIzaSyByFozwwrCjLxLOcNJbGPLH4UbR8dMjZxI",
		  authDomain: "auth-reactnative-ba277.firebaseapp.com",
		  databaseURL: "https://auth-reactnative-ba277.firebaseio.com",
		  projectId: "auth-reactnative-ba277",
		  storageBucket: "auth-reactnative-ba277.appspot.com",
		  messagingSenderId: "1045052771667"
  	  });
	}

	render (){
		return(
			<View>
			<Header headerText="Authentication" />
			<LoginForm />
			</View>
		)
	}
}

export default App
