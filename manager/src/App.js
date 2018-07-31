import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './Components/common';
import LoginForm from './Components/LoginForm';
import reducers from './reducers';
import firebase from 'firebase'
import config from "../config.js"


class App extends Component {
	componentWillMount(){
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
