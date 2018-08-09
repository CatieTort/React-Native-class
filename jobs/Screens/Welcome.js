import _ from 'lodash';
import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import Slides from '../Components/Slides'
import { AppLoading } from 'expo'

const SLIDE_DATA = [
	{text: 'Welcome to JobApp', color: '#22c1c3' },
	{text: 'Set your location, then swipe through jobs!', color: '#00d4ff',  icon: { name:'location-pin', color:"#fff"} },
	{text: 'Apply and get hired!', color: '#32cd32'}
];

class Welcome extends Component {
	state = { token: null }

	async componentWillMount(){
		let token = await AsyncStorage.getItem('fb_token');

		if (token){
			this.props.navigation.navigate('map');
			this.setState({ token });
		} else {
			this.setState({ token: false});
		}
	}

	onSlidesComplete(){
		this.props.navigation.navigate('auth')
	}

	render(){
		if(_.isNull(this.state.token)) {
			return <AppLoading />;
		}
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

export default Welcome
