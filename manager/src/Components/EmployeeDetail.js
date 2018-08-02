import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { employeeDelete } from '../actions'
import Communications from 'react-native-communications'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Button, Container, Confirm } from './common'

class EmployeeDetail extends Component {
	constructor(props){
		super(props)

		this.state={ showModal: false }
	}

		onDetailPress(){
			Actions.employeeEdit({employee: this.props.employee});
		}

		onTextPress(){
			const {phone, shift} = this.props.employee

			Communications.text(phone, `Your upcoming shift is on ${shift}`)
		}

		onAccept(){
			const { uid } = this.props.employee
			this.props.employeeDelete({ uid })
			this.setState({ showModal: false })
		}

		onDecline(){
			this.setState({ showModal: false })
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
						<Button
						onPress={this.onTextPress.bind(this)}
						style={{backgroundColor: "#2D7289"}}
						>
							Send Text
						</Button>
					</CardSection>
					<CardSection style={{backgroundColor: "#7FD3C6"}}>
						<Button
							style={{backgroundColor: "#e50000"}}
							onPress={() => this.setState({ showModal: !this.state.showModal})}
						>
							Fire
						</Button>
					</CardSection>

					<Confirm
						visible={this.state.showModal}
						onAccept={this.onAccept.bind(this)}
						onDecline={this.onDecline.bind(this)}
					>
						Are you sure you want to fire {employee.name}?
					</Confirm>
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

export default connect(null, { employeeDelete })(EmployeeDetail)
