import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Button } from './common'

class EmployeeDetail extends Component {

	render(){
		const { item } = this.props
		return (
			<View>
				<Card>
					<CardSection>
						<Text>Name: {item.name}</Text>
					</CardSection>
					<CardSection>
						<Text>Title: {item.title}</Text>
					</CardSection>
					<CardSection>
						<Text>Phone: {item.phone}</Text>
					</CardSection>
					<CardSection>
						<Text>Shift: {item.shift}</Text>
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
