import axios from 'axios';
import { GET_LAT_LONG } from './types';
import { KEY } from '../config';


const LOCATION_URL = `https://maps.googleapis.com/maps/api/geocode/json`

export const fetchLatLog = (location) => async (dispatch) => {
	const queryLoc = location.replace(/ /g, "+");
	let coord
	coord =  `${LOCATION_URL}?address=${queryLoc}&key=${KEY}`;

	try {
		let { data } = await axios.get(coord);
		dispatch({ type: GET_LAT_LONG, payload: data.results[0].geometry.location });
	} catch (e) {
		console.log(e)
	}
};
