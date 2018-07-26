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
		borderBottomWidth: 1,
		backgroundColor: '#fff',
		padding: 5,
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
}

export { CardSection };
