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
		backgroundColor: '#fff',
		padding: 5,
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	}
}

export { CardSection };
