import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from '../js/history';
import actions from '../actions';
import PrivateRoute from './PrivateRoute';
import '../style/App.css';
import Home from './Home/Home';
import SignIn from './Home/SignIn';
import SignUp from './Home/SignUp';
import Orders from './Orders';
import Options from './Options';

const { alertActions } = actions;

class App extends Component {
	constructor(props) {
		super(props);

		const { dispatch } = this.props;
		history.listen(() => {
			dispatch(alertActions.clear());
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Online Shop</h1>
				</header>
				<div className="Main">
					{alert.message && (<div className={`alert ${alert.type}`}>{alert.message}</div>)}
					<Router history={history}>
						<div>
							<PrivateRoute exact path="/orders" component={Orders} />
							<PrivateRoute exact path="/options" component={Options} />
							<PrivateRoute exact path="/" component={Home} />
							<Route path="/signin" component={SignIn} />
							<Route path="/signup" component={SignUp} />
						</div>
					</Router>
				</div>
			</div>
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
};

export default connect(mapStateToProps)(App);
