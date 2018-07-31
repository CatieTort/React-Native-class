import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Button } from './common'

class EmployeeDetail extends Component {

	render(){
		return (
			<View>
				<Card>
					<CardSection>
						<Text>Name:</Text>
					</CardSection>
					<CardSection>
						<Text>Title:</Text>
					</CardSection>
					<CardSection>
						<Text>Phone:</Text>
					</CardSection>
					<CardSection>
						<Text>Shift:</Text>
					</CardSection>
				</Card>
				<View>
					<Button>Send Text</Button>
					<Button>Fire</Button>
				</View>
			</View>
		)
	}
}

export default EmployeeDetail
