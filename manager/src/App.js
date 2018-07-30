import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './Components/common';
import LoginForm from './Components/LoginForm';
import reducers from './reducers';
import firebase from 'firebase'


class App extends Component {
	componentWillMount(){
		const config = {
		    apiKey: "AIzaSyC1CikTBiNtL5tJthjxK67O5YjuBe7sZNk",
		    authDomain: "managerapp-reactnative.firebaseapp.com",
		    databaseURL: "https://managerapp-reactnative.firebaseio.com",
		    projectId: "managerapp-reactnative",
		    storageBucket: "managerapp-reactnative.appspot.com",
		    messagingSenderId: "245579089862"
		  };
  		firebase.initializeApp(config);
	}

	render(){
		return(
			<Provider store={createStore(reducers)}>
				<View>
					<Header headerText="Employee Management" />
					<LoginForm />
				</View>
			</Provider>
		)
	}
}

export default App;
