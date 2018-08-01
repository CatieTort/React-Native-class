import React from 'react'
import { View } from 'react-native'


const Container = (props) => {
	return (
		<View style={[styles.continerStyle, props.style]}>
			{props.children}
		</View>
	)
}

const styles = {
	continerStyle: {
		flexDirection: 'column'
	}
}

export { Container };
