import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate, employeeSave, employeeDestroy } from '../actions'
import { View } from 'react-native'
import { Input, Button, Card, CardSection, Container } from './common'
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
	componentWillMount(){
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({prop, value});
		})
	}

	onButtonPress(){
		const {name, title, phone, shift} = this.props
		this.props.employeeSave({name, title, phone, shift, uid: this.props.employee.uid});
	}

	render(){
		console.log(this.props)
		return (
			<View>
				<Card style={{borderWidth: 1, borderColor: "#28AFB0", borderStyle: "solid"}}>
					<EmployeeForm {...this.props} />
					<CardSection>
						<Button style={{marginBottom: 0}}
							onPress={this.onButtonPress.bind(this)}
						>
							Save Changes
						</Button>
					</CardSection>
					<CardSection>
						<Button style={{marginTop: 0}}
							onPress={this.onButtonPress.bind(this)}
						>
							Delete
						</Button>
					</CardSection>
				</Card>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	const {name, title, phone, shift} = state.employeeForm;

	return { name, title, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDestroy})(EmployeeEdit)
