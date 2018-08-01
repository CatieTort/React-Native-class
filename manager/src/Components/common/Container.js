import React from 'react';
import { View } from 'react-native';

const Container = ({children}) => {
	const { containerStyle } = styles
	return (
		<View style={containerStyle}>
			{children}
		</View>
	)
}
const styles = {
	containerStyle: {
		
	}
}

export { Container };
