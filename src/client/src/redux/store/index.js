import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import alert from '../Alerts/alertReducer';
import orders from '../Orders/orderReducers';
import products from '../Products/productReducers';
import signIn from '../SignIn/signInReducer';
import signOut from '../SignOut/signOutReducer';
import signUp from '../SignUp/signUpReducer';
import deleteUser from '../DeleteUser/deleteUserReducer';
import signed from '../Account/accountReducer';


const rootReducer = combineReducers({
	alert,
	products,
	orders,
	signIn,
	signOut,
	signUp,
	deleteUser,
	signed,
});


const loggerMiddleware = createLogger();
const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

export default store;
