import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-elements'
import { LinearGradient, MapView } from 'expo'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Map extends Component {

	state = {
		mapLoaded: false,
		region: {
			latitude: 32.715736,
			longitude: -117.161087,
			latitudeDelta: 0.65,
			longitudeDelta: 0.48
		}
	}

	componentDidMount(){
		this.setState({ mapLoaded: true });
	}

	onRegionChangeComplete = (region) => {
		this.setState({ region });
	}

	onButtonPress = () => {
		this.props.fetchJobs(this.state.region, () => {
			this.props.navigation.navigate('jobs');
		});
	}

	render(){
		return (
			<LinearGradient colors={['#51dfe1','#22c1c3','#22c39d']} style={{ flex: 1}}>
				<View style={styles.mapStyle}>
				{this.state.mapLoaded ?
					<MapView
						style={{flex: 1}}
						region={this.state.region}
						onRegionChangeComplete={this.onRegionChangeComplete}
					/>
					: <ActivityIndicator size='large' color='#178182' /> }
					<View style={{position: 'absolute', bottom: 20, left: 0, right: 0}}>
						<Button
							large
							title='Search This Area'
							backgroundColor='#bf35a7'
							color='#fff'
							icon={{name: 'search'}}
							onPress={this.onButtonPress}
						/>
					</View>
				</View>
			</LinearGradient>
		)
	}
}


const styles = {
	mapStyle: {
		flex: 1,
		marginTop: 40,
		margin: 10,
		borderWidth: 2,
		borderColor: '#000',
		justifyContent: 'center'
	}
}

export default connect(null, actions)(Map)
