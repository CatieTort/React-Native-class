import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { Card, CardSection, Button, Container } from './common'
import { Actions } from 'react-native-router-flux'
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
	componentWillMount(){
		this.props.employeesFetch();
	}

	renderItem({item}){
		const {employeeNameStyle} = styles;
		console.log("the item:", item)
		return (
			<Card employee={item.uid} >
				<CardSection style={{justifyContent: "space-evenly"}}>
					<Text style={employeeNameStyle}>{item.name}</Text>
					<Container>
						<Button onPress={() => Actions.employeeDetail({item: item})}>View</Button>
					</Container>
				</CardSection>
			</Card>
		)
	}

	render(){
		console.log("in render:", this.props.employees);
		return (
			<View>
			<FlatList
				data={this.props.employees}
				renderItem={this.renderItem}
				keyExtractor={(item, index) => item.uid}
			/>
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

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	})
	console.log(employees)
	return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
