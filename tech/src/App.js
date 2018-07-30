import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Header } from './Components/common';
import reducers from './reducers';
import LibraryList from './Components/LibraryList';

class App extends Component {
	render(){
		return (
			<Provider store={createStore(reducers)}>
			<View style={{flex: 1}}>
				<Header headerText="Tech Stack" />
				<LibraryList />
			</View>
			</Provider>
		)
	}
}

export default App;
