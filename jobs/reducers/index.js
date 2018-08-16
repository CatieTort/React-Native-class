import { combineReducers } from 'redux';
import auth from './auth_reducer';
import jobs from './jobs_reducer';
import map from './location_reducer';
import likedJob from './likes_reducer';

export default combineReducers({
	auth, jobs, map, likedJob
});
