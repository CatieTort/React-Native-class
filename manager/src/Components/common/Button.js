import React from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'

const Button = ({onPress, children, style}) => {
	const {btnStyle, textStyle} = styles;
	return (
		<TouchableOpacity onPress={onPress} style={[btnStyle, style]}>
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
		backgroundColor: '#28AFB0',
		borderRadius: 8,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 8,
	},
	textStyle: {
		fontSize: 20,
		color: '#F1FFE7',
		textAlign: 'center',
		fontWeight: '600',
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 10,
		paddingBottom: 10
	}
}

export { Button };
