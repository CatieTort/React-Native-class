import axios from 'axios';
import qs from 'qs';
import { FETCH_JOBS, LIKE_JOB, CLEAR_JOBS } from './types';
import { KEY } from '../config';

const JOB_QUERY_PARAMS = {
	description: 'developer',
	full_time: true
};

const URL = 'https://jobs.github.com/positions.json'

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


export const likeJob = (job) => {
	return{
		payload: job,
		type: LIKE_JOB
	}
};


export const clearSavedJobs = () => {
	return{
		type: CLEAR_JOBS
	}
};
