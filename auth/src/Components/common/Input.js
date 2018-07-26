import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
	const {inputStyle, labelStyle, containerStyle} = styles;
	return(
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				placeholder={placeholder}
				value={value}
				style={inputStyle}
				onChangeText={onChangeText}
			/>
		</View>
	)
};

const styles = {
	inputStyle: {
		flex: 2,
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		alignSelf: 'center',
		height: 30,
		width: 150
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 50,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
}

export { Input };
