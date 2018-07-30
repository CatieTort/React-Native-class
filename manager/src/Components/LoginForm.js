import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

	onEmailChange(text){
		
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@gmail.com"
						onChangeText={this.onEmailChange.bind(this)}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
					 />
				</CardSection>
				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>
			</Card>
		)
	}
}


export default LoginForm;
