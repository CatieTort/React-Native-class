import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
	const {containerStyle} = styles;

	return (
		<View style={[containerStyle, props.style]}>
			{props.children}
		</View>
	)
}

const styles = {
	containerStyle: {
		borderWidth: 2,
		borderColor: "#28AFB0",
		borderStyle: "solid",
		borderRadius: 4,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
}

export { Card };
