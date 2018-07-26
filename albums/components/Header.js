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
		backgroundColor: 'chartreuse',
		height: 90,
		paddingTop: 25,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'

	},
	textStyle: {
		fontSize: 30,
		fontWeight: 'bold',
		fontFamily: 'helvetica'
	}
}
export default Header;
