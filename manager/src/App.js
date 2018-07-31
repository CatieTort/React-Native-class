import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Header } from './Components/common';
import LoginForm from './Components/LoginForm';
import reducers from './reducers';
import firebase from 'firebase';
import {config} from './config';
import Router from './Router';


class App extends Component {
	componentWillMount(){
  		firebase.initializeApp(config);
	}

	render(){
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return(
			<Provider store={store}>
				<Router />
			</Provider>
		)
	}
}

export default App;
