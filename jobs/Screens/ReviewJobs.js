import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { Button } from 'react-native-elements'

class ReviewJobs extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Review Saved Jobs',
			headerRight: (
				<Button
					backgroundColor='rgba(0,0,0,0)'
					color="rgba(50,205,50 ,1)"
					title="Settings"
					onPress={() => navigation.navigate('settings')}
				/>
			),
			headerStyle: {
				marginTop: Platform.OS === 'android' ? 24 : 0
			}
		}
	}

	render(){
		return (
			<View>
				<Text>Review Saved Jobs</Text>
			</View>
		)
	}
}

export { ReviewJobs }
