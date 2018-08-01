import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEES_FETCH_SUCCESS
} from './types'

export const employeeUpdate = ({prop, value}) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: {prop, value}
	}
}

export const employeeCreate = ({ name, title, phone, shift })=> {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
		.push({ name, title, phone, shift })
		.then(() => {
			dispatch({type: EMPLOYEE_CREATE})
			Actions.main()
		})
		.catch((error) => {
			console.log(error)
		})
	}
}

export const employeesFetch = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
		.once('value')
			.then((snapshot) => {
				var data = snapshot.val()
				console.log(data)
				dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: data })
			})
	}
};
