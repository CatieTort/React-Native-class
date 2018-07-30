import React from 'react';
import { Text, View } from 'react-native';

// black #1F271B

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
		position: 'relative',
		borderBottomWidth: 4,
		borderStyle: "solid",
		backgroundColor: "#19647E",
		borderColor: "#28AFB0"

	},
	textStyle: {
		fontSize: 30,
		fontWeight: 'bold',
		fontFamily: 'helvetica',
		color: "#F1FFE7",
		paddingBottom: 10
	}
}
export { Header };
