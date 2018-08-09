import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Auth extends Component {

	render(){
		return (
			<View style={styles.container}>
				<Text style={{marginTop: 50}}>Auth</Text>
			</View>
		)
	}
}

const styles = {
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export { Auth }
