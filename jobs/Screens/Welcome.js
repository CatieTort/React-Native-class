import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Slides from '../Components/Slides'

const SLIDE_DATA = [
	{text: 'Welcome to JobApp', color: '#22c1c3' },
	{text: 'Set your location, then swipe through jobs!', color: '#00d4ff'},
	{text: 'Apply and get hired!', color: '#32cd32'}
];

class Welcome extends Component {

	onSlidesComplete(){
		this.props.navigation.navigate('auth')
	}

	render(){
		return (
			<View style={styles.container}>
				<Slides
					data={SLIDE_DATA}
					onComplete={this.onSlidesComplete.bind(this)}
				 />
			</View>
		)
	}
}

const styles = {
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}
}

export { Welcome }
