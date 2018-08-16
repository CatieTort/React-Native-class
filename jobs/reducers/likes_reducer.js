import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
	LIKE_JOB,
	CLEAR_JOBS
} from '../actions/types';

export default function(state = [], action){
	switch(action.type){
		case REHYDRATE:
			return action.payload.likedJob || [];
		case LIKE_JOB:
			return _.uniqBy([
				action.payload, ...state
			], "id");
		case CLEAR_JOBS:
			return [];
		default:
			return state;
	}
}
