import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeCreate } from '../actions'
import { View } from 'react-native'
import { Input, Button, Card, CardSection } from './common'
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

	onButtonPress(){
		const {name, title, phone, shift} = this.props
		this.props.employeeCreate({name, title, phone, shift});
	}

	render(){
		console.log(this.props)
		return (
			<View>
				<Card style={{borderWidth: 1, borderColor: "#28AFB0", borderStyle: "solid"}}>
					<EmployeeForm {...this.props} />
					<CardSection>
						<Button
							onPress={this.onButtonPress.bind(this)}
						>
							Create
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

export default connect(mapStateToProps, {employeeCreate})(EmployeeCreate)
