import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Button, Container } from './common'

class EmployeeDetail extends Component {

	onDetailPress(){
		Actions.employeeCreate({employee: this.props.employee, title: "Edit an Employee"});
	}

	render(){
		const { employee } = this.props
		const {labelTextStyle, employeeTextStyle} = styles;
		return (
			<View>
			<Card style={{backgroundColor: "#7FD3C6"}}>
				<Card>
					<CardSection style={{paddingTop: 10, paddingLeft: 20, paddingBottom: 5, justifyContent: 'space-between'}}>
						<Container style={{flexDirection: 'row', alignItems: 'center'}}>
							<Text style={labelTextStyle}>Name: </Text>
							<Text style={employeeTextStyle}>{employee.name}</Text>
						</Container>
						<Button style={{marginLeft: 0, marginRight: 10, flex: 0, alignSelf: 'flex-end'}} onPress={this.onDetailPress.bind(this)}>Edit</Button>
					</CardSection>
					<CardSection style={{paddingLeft: 20, paddingBottom: 20}}>
						<Text style={labelTextStyle}>Title: </Text>
						<Text style={employeeTextStyle}>{employee.title}</Text>
					</CardSection>
					<CardSection style={{paddingLeft: 20, paddingBottom: 20}}>
						<Text style={labelTextStyle}>Phone: </Text>
						<Text style={employeeTextStyle}>{employee.phone}</Text>
					</CardSection>
					<CardSection style={{paddingBottom: 30, paddingLeft: 20, paddingTop: 20}}>
						<Text style={labelTextStyle}>Shift: </Text>
						<Text style={employeeTextStyle}>{employee.shift}</Text>
					</CardSection>
				</Card>
					<CardSection style={{backgroundColor: "#7FD3C6"}}>
						<Button style={{backgroundColor: "#2D7289"}}>Send Text</Button>
					</CardSection>
					<CardSection style={{backgroundColor: "#7FD3C6"}}>
						<Button style={{backgroundColor: "#e50000"}}>Fire</Button>
					</CardSection>
				</Card>
			</View>
		)
	}
}

const styles = {
	labelTextStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: "#19647E"
	},
	employeeTextStyle: {
		fontSize: 18
	}
}

export default EmployeeDetail
