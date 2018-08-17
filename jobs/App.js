import Expo, { Notifications } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Provider } from 'react-redux';
import registerForNotifications from './Services/push_notifications';
import store from './Store';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Welcome from './Screens/Welcome';
import Auth from './Screens/Auth';
import JobDeck from './Screens/JobDeck';
import Map from './Screens/Map';
import ReviewJobs from './Screens/ReviewJobs';
import Settings from './Screens/Settings';

export default class App extends React.Component {
		componentDidMount(){
			registerForNotifications();
			Notifications.addListener((notification) => {
					const { data: { text }, origin } = notification;

					if(origin === 'received' && text){
						Alert.alert(
							'New Push Notification',
							text,
							[{ text: 'OK'}]
						);
					}
			})
		}

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
		  }, {
			  navigationOptions: ({ navigation }) => ({
				tabBarIcon: ({focused, tintColor }) => {
					const { routeName } = navigation.state;
					let iconName;
					if(routeName === 'map') {
						iconName = 'map-o';
					}else if (routeName === 'jobs'){
						iconName = 'briefcase';
					} else if (routeName === 'review'){
						iconName =  'list';
					}
					return <FontAwesome name={iconName} size={25}  style={{marginTop: 3}} color={tintColor} />
				}
			}),
			tabBarOptions: {
				labelStyle: {fontSize: 12},
				activeTintColor: '#22c39d',
				inactiveTintColor: '#fff',
				activeBackgroundColor: '#5f6060',
				inactiveBackgroundColor: '#5f6060',
			}
		  })
	  }, {
		  navigationOptions: {
		  	tabBarVisible: false
		  },
		  lazy: true
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
