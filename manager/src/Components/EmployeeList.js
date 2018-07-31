import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button } from './common'
import { Actions } from 'react-native-router-flux'

class EmployeeList extends Component {

	render(){
		const {employeeNameStyle} = styles;
		return (
			<View>
				<Card>
					<CardSection style={{justifyContent: "space-evenly"}}>
						<Text style={employeeNameStyle}>Jill</Text>
						<Button onPress={name => Actions.employeeDetail(name)}>View</Button>
					</CardSection>
				</Card>
			</View>
		)
	}
}

const styles = {
	employeeNameStyle: {
		fontSize: 30,
		alignSelf: 'center',
		paddingLeft: 15,
		paddingRight: 25
	}
}

export default EmployeeList
