import { combineReducers } from 'redux';
import students from './students';
import campuses from './campuses';

export default combineReducers({ students, campuses });

export * from './students';
export * from './campuses';
