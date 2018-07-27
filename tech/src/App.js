import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Header } from './Components/common';
import reducers from './reducers';

class App extends Component {
	render(){
		return (
			<Provider store={createStore(reducers)}>
			<View>
				<Header headerText="Tech Stack" />
			</View>
			</Provider>
		)
	}
}

export default App;
