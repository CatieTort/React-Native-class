import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import axios from 'axios'

const rootURL =  'https://us-central1-one-time-password-9a36f.cloudfunctions.net'

class SignUpForm extends Component {

	state= { phone: ''}



	handleSubmit = async () => {
		try {
			await axios.post(`${rootURL}/createUser`, {
				phone: this.state.phone
			})
			await axios.post(`${rootURL}/requestOneTimePass`, {
				phone: this.state.phone
			})
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
				<Button
					onPress={this.handleSubmit}
					backgroundColor='orangered'
					borderRadius={4}
					title='Submit'
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
		margin: 15
	}
}

export default SignUpForm
