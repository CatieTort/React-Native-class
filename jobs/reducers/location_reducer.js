import { GET_LAT_LONG } from '../actions/types';

const INITIAL_STATE = {
	results: []
}

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_LAT_LONG:
			return action.payload;
		default:
			return state;
	}
}
