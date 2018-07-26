import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	)
}

const styles = {
	viewStyle: {
		height: 90,
		paddingTop: 25,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative'

	},
	textStyle: {
		fontSize: 30,
		fontWeight: 'bold',
		fontFamily: 'helvetica'
	}
}
export { Header };
