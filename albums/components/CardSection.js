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
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
}

export default CardSection
