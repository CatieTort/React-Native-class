import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './Components/common';
import LoginForm from './Components/LoginForm';

class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			loggedIn: null
		}
	}

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

	  firebase.auth().onAuthStateChanged((user) => {
		  	if(user) {
				this.setState({loggedIn: true });
			} else {
				this.setState({loggedIn: false });
			}
	  })
	}

	renderContent(){
		const {loggedIn} = this.state
		switch(loggedIn){
			case true:
				return(
					<View style={{flexDirection: "row", paddingTop: 10}}>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</View>
				);
			case false:
				return <LoginForm />;
			default:
				return (
				<View style={{flexDirection: "row", justifyContent: "center", alignItems: "center", paddingTop: 50}}>
					<Spinner size="large" />
				</View>
				);
		}

	}

	render (){
		return(
			<View>
			<Header headerText="Authentication" />
			{this.renderContent()}
			</View>
		)
	}
}

export default App
