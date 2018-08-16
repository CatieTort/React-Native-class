import React, { Component } from 'react'
import { LinearGradient } from 'expo'
import { View, Text, Platform } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { clearSavedJobs } from '../actions'

class Settings extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerStyle: {
				marginTop: Platform.OS === 'android' ? 24 : 0,
				backgroundColor: '#5f6060'
			},
			headerBackTitleStyle: {
				color: '#fff',
				fontWeight: 'bold'
			},
			headerTintColor: '#fff'
		}
	}

	render(){
		return (
			<LinearGradient colors={['#51dfe1','#22c1c3','#22c39d']} style={{ flex: 1}}>
					<View style={{marginTop: 30}}>
						<Button
							title="Clear All Jobs"
							large
							icon={{name: 'delete-forever'}}
							backgroundColor='#bf35a7'
							onPress={this.props.clearSavedJobs}
						/>
					</View>
			</LinearGradient>
		)
	}
}

export default connect(null, { clearSavedJobs })(Settings)
