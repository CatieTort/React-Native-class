import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
	const {containerStyle} = styles;

	return (
		<View style={containerStyle}>
			{props.children}
		</View>
	)
}

const styles = {
	containerStyle: {
		borderWidth: 1.5,
		borderRadius: 8,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: {width: 0, height: 1},
		shadowRadius: 8,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
}

export default Card
