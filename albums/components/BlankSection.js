import React from 'react'
import { View } from 'react-native'

const BlankSection = (props) => {
	const {blankStyle} = styles;
	return (
		<View style={blankStyle}>
			{props.children}
		</View>
	)
}

const styles = {
	blankStyle: {
		borderBottomWidth: 1,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
}

export default BlankSection
