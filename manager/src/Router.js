import React, { Component } from 'react'
import { Stack, Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './Components/LoginForm'
import EmployeeList from './Components/EmployeeList'
import EmployeeCreate from './Components/EmployeeCreate'

const RouterComponent = () => {
	const {viewStyle, addBtnStyle, addBtnText} = styles;
	return (
		<Router navigationBarStyle={viewStyle}  titleStyle={{fontSize: 25, color: '#F1FFE7'}} backButtonTintColor="#3DD6D0" backButtonTextStyle={{fontWeight: "bold"}} >
			<Stack key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Welcome Please Login" initial />
				</Scene>
				<Scene key="main">
					<Scene
						rightTitle="Add"
						onRight={() => {Actions.employeeCreate()}}
						rightButtonStyle={addBtnStyle}
						rightButtonTextStyle={addBtnText}
						key="employeeList"
						component={EmployeeList}
						title="Employees"
						initial
					 />
					<Scene
						key="employeeCreate"
						component={EmployeeCreate}
						title="Add an Employee"
					/>
				</Scene>
			</Stack>
		</Router>
	)
}

const styles = {
	viewStyle: {
		height: 90,
		borderBottomWidth: 4,
		borderStyle: "solid",
		backgroundColor: "#19647E",
		borderBottomColor: "#28AFB0",
		fontFamily: 'helvetica',
		paddingBottom: 15
	},
	addBtnStyle: {
		backgroundColor: "#15B097",
		borderRadius: 4,
		paddingTop: 5,
		paddingBottom: 5,
		paddingRight: 15,
		paddingLeft: 15,
		marginRight: 5
	},
	addBtnText: {
		color: '#F1FFE7',
		fontFamily: 'helvetica'
	}
}

export default RouterComponent;
