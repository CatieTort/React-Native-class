import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

const App = () => (
	<View style={{flex: 1}}>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

AppRegistry.registerComponent('albums', () => App);
