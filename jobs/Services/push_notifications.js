import { Permissions, Notifications } from 'expo'
import { AsyncStorage } from 'react-native'
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens'

export default async () => {
	let prevToken = await AsyncStorage.getItem('pushToken');
	console.log("token", prevToken);
	if(prevToken){
		return
	} else {
		let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

		if(status !== 'granted'){
			return;
		}

		let token = await Notifications.getExpoPushTokenAsync();
		await axios.post(PUSH_ENDPOINT, { token: { token } });
		AsyncStorage.setItem('pushToken', token);
	}
};
