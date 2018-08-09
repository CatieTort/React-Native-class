import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import axios from 'axios'
import firebase from 'firebase'

const rootURL =  'https://us-central1-one-time-password-9a36f.cloudfunctions.net'

class SignInForm extends Component {

	state= { phone: '', code: ''}



	handleSubmit = async () => {
		try {
			let { data } = await axios.post(`${rootURL}/verifyCode`, {
				phone: this.state.phone,
				code: this.state.code
			})
		  firebase.auth().signInWithCustomToken(data.token);
		} catch (err) {
			console.log(err.response.data)
		}
	}

	render(){
		return(
			<View style={styles.formContainer}>
			<View style={{marginBottom: 30}}>
				<FormLabel>Enter Phone Number</FormLabel>
				<FormInput
					value={this.state.phone}
					onChangeText={phone => this.setState({ phone })}
				 />
			</View>
				<View style={{marginBottom: 30}}>
					<FormLabel>Enter Code to Login</FormLabel>
					<FormInput
						value={this.state.code}
						onChangeText={code => this.setState({ code })}
					 />
				</View>
				<Button
					onPress={this.handleSubmit}
					backgroundColor='blue'
					borderRadius={4}
					title='Login'
					style={{width: 300}}
				/>
			</View>
		)
	}
}

const styles = {
	formContainer: {
		flexDirection: 'column',
		padding: 30,
		alignItems: 'center',
	}
}

export default SignInForm
