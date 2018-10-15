
import { combineReducers } from 'redux';

import authentication from './authenticationReducer';
import registration from './registrationReducer';
import alert from './alertReducer';
import products from './productReducers';
import orders from './orderReducers';

const rootReducer = combineReducers({
	authentication,
	registration,
	alert,
	products,
	orders,
});

export default rootReducer;
