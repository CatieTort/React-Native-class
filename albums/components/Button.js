import React from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'

const Button = ({onPress, children}) => {
	const {btnStyle, textStyle} = styles;
	return (
		<TouchableOpacity onPress={onPress} style={btnStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</ TouchableOpacity>
	)
}

const styles = {
	btnStyle: {
		flex: 1,
		alignSelf: 'center',
		marginLeft: 30,
		marginRight: 30,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: '#00ff01',
		borderRadius: 8,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 8,
	},
	textStyle: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: '600',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10
	}
}

export default Button
