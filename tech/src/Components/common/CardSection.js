import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
	const {sectionStyle} = styles;
	return (
		<View style={sectionStyle}>
			{props.children}
		</View>
	)
}

const styles = {
	sectionStyle: {
		padding: 5,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative',
		borderBottomWidth: 2,
		borderStyle: "solid",
		borderColor: "#5fefea",
		backgroundColor: "#a5f6f3"

	}
}

export { CardSection };
