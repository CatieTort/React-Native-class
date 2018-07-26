import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
	constructor(props){
		super(props)

		this.state = {
			email: "",
			password: "",
			error: "",
			success: "",
			loading: false
		};

	}

	onButtonPress(){
		const {email, password} = this.state;

		this.setState({error: "", success: "", loading: true})

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch (() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(this.onLoginSuccess.bind(this, true))
				.catch (() => {
					this.setState({ error: 'Authentication Failed.', loading: false })
				})
			});
	}

	onLoginSuccess(newAcct){
		if (newAcct){
			this.setState({
				loading: false,
				email: '',
				password: '',
				error: '',
				success: 'You have created an account!'
			})
		}
		this.setState({
			loading: false,
			email: '',
			password: '',
			error: '',
			success: 'Success!'
		})
	}

	render(){
		const {email, password, error, success, loading} = this.state;
		return(
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						value={email}
						onChangeText={text => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="password"
						secureTextEntry
						label="Password"
						value={password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				<CardSection>
				{(error != "")?
				<Text style={styles.successTextStyle}>
					{success}
				</Text>
				 :
				<Text style={styles.errorTextStyle}>
					{error}
				</Text>
				}

				{loading ?
					<Spinner />
					:
					<Button onPress={this.onButtonPress.bind(this)}>
						Log In
					</Button>
				}
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	errorTextStyle: {
		paddingTop: 10,
		paddingBottom: 10,
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
		backgroundColor: "#fff"
	},
	successTextStyle: {
		paddingTop: 10,
		paddingBottom: 10,
		fontSize: 20,
		alignSelf: 'center',
		color: '#32CD32',
		backgroundColor: "#fff"
	}
}


export default LoginForm;
