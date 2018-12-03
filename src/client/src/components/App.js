import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../js/history';
import alertActions from '../redux/Alerts/alertActions';
import PrivateRoute from './PrivateRoute';
import '../style/App.css';
import Products from './Products';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Orders from './Orders';
import Options from './Options';
import Nav from './Nav';

class App extends Component {
	constructor(props) {
		super(props);

		const { dispatch } = this.props;
		history.listen(() => {
			dispatch(alertActions.clear());
		});
	}

	render() {
		const { alert } = this.props;
		return (
			<Router history={history}>
				<div className="App">
					<header className="App-header">
						<h1 className="App-title">Online Shop</h1>
						<Nav />
					</header>
					<div className="Main">
						{alert.get('message') && (<div className={`alert ${alert.get('type')}`}>{alert.get('message')}</div>)}

						<div>
							<PrivateRoute exact path="/orders" component={Orders} />
							<PrivateRoute exact path="/options" component={Options} />
							<Route path="/products" component={Products} />
							<Route path="/signin" component={SignIn} />
							<Route path="/signup" component={SignUp} />
						</div>

					</div>
				</div>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	const { alert } = state;
	return {
		alert,
	};
}

App.propTypes = {
	dispatch: PropTypes.func.isRequired,
	alert: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(App);
