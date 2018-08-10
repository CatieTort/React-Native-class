import _ from 'lodash';
import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import Slides from '../Components/Slides'
import { AppLoading } from 'expo'

const SLIDE_DATA = [
	{text: 'Welcome to JobApp', color: ['#51dfe1','#22c1c3','#22c39d'] },
	{text: 'Set your location, then swipe through jobs!', color: ['#00ffea','#00d4ff','#0094ff'],  icon: { name:'location-pin', color:"#fff"} },
	{text: 'Apply and get hired!', color: ['#70dc70','#32cd32','#28a428']}
];

class Welcome extends Component {
	state = { token: null }

	async componentWillMount(){
		// AsyncStorage.removeItem('fb_token');
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
