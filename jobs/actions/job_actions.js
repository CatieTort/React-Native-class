import axios from 'axios';
import qs from 'qs';
import { FETCH_JOBS, GET_LAT_LONG } from './types';
import config from '../config';

const JOB_QUERY_PARAMS = {
	description: 'developer',
	full_time: true
};

const URL = 'https://jobs.github.com/positions.json'
const LOCATION_URL = `https://maps.googleapis.com/maps/api/geocode/json`

export const fetchJobs = (region, callback) => async (dispatch) => {
	const query = qs.stringify({ ...JOB_QUERY_PARAMS, lat: region.latitude, long: region.longitude });
	let specificURL
	specificURL = `${URL}?${query}`;

	try {
		let { data } = await axios.get(specificURL);
		dispatch({ type: FETCH_JOBS, payload: data });
		callback();
	} catch(e) {
		console.log(e);
	}

};

export const fetchLatLog = (location) => async (dispatch) => {
	const queryLoc = qs.stringify({location});
	let coord
	coord =  `${LOCATION_URL}?${queryLoc}key=${config}`;
	console.log(coord)
	try {
		let { data } = await axios.get(location);
		dispatch({ type: GET_LAT_LONG, payload: data });
	} catch (e) {
		console.log(e)
	}
}
