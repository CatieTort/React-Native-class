import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {

	onEmailChange(text){
		this.props.emailChanged(text);
	}

	onPasswordChange(text){
		this.props.passwordChanged(text);
	}

	onButtonPress(){
		const {email, password} = this.props;

		this.props.loginUser({email, password});
	}

	render(){
		const { errorTextStyle, messageContainer } = styles;
		return(
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					 />
				</CardSection>
				<CardSection>
					{(this.props.error != '') ?
						<View style={messageContainer}>
							<Text style={errorTextStyle}>{this.props.error}</Text>
						</View>
						: null}
				</CardSection>
				<CardSection>
					{this.props.loading ?
						<Spinner size="large" />
						:
						<Button onPress={this.onButtonPress.bind(this)}>
							Login
						</Button>
					}
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 18,
		alignSelf: 'center',
		color: 'red'
	},
	messageContainer: {
		flex: 1,
		justifyContent: 'center'
	}
}

const mapStateToProps = state => {
	const {email, password, error, loading} = state.auth
	return {
		email,
		password,
		error,
		loading
	}
}


export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
	loginUser })(LoginForm);
