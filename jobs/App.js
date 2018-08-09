import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Store';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import {Welcome, Auth, JobDeck, Map, ReviewJobs, Settings} from './Screens';

export default class App extends React.Component {
  render() {
	  const MainNavigator = createBottomTabNavigator({
		  welcome: Welcome,
		  auth: Auth,
		  main: createBottomTabNavigator({
			  map: Map,
			  jobs: JobDeck,
			  review: createStackNavigator({
				  savedJobs: ReviewJobs,
				  settings: Settings
			  })
		  })
	  });
    return (
		<Provider store={store} >
	      <View style={styles.container}>
		  	<MainNavigator />
	      </View>
		</Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});


// welcome > auth > Main flow > Map and deck, Review Flow > ReviewJobs, job deck & settings
