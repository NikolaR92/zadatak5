import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import signOutAction from '../redux/SignOut/signOutAction';

function mapStateToProps(state) {
	const signedIn = state.signed.get('signedIn');
	return {
		signedIn,
	};
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ signOut: signOutAction.signOut }, dispatch);
}


class Nav extends Component {
	handleSignOut() {
		const { signOut } = this.props;
		signOut();
	}

	signedInRender() {
		return (

			<ul className="dropdown-menu">
				<li>
					<Link to="/options" href="/options" className="btn btn-link">Account Options</Link>
				</li>
				<li><button type="button" onClick={() => (this.handleSignOut())}> Sign Out</button></li>
			</ul>
		);
	}

	notSignedInRender() {
		return (
			<ul className="nav navbar-nav navbar-right">
				<li>
					<Link to="/signin" href="/signin" className="btn btn-link">
						<span className="glyphicon glyphicon-log-in" />
						<span>Sign In</span>
					</Link>
				</li>
				<li>
					<Link to="/signup" href="/signup" className="btn btn-link">
						<span className="glyphicon glyphicon-user" />
						<span>Sign Up</span>
					</Link>
				</li>
			</ul>
		);
	}

	render() {
		const { signedIn } = this.props;

		return (
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<ul className="nav navbar-nav">
						<li><Link to="/products" href="/products" className="btn btn-link">Home</Link></li>
						{signedIn && <li><Link to="/orders" href="/orders" className="btn btn-link">Orders</Link></li>}
						<li>Contact</li>
						{signedIn && (
							<li>
								<p className="dropdown-toggle" data-toggle="dropdown">
									<span>Options</span>
									<span className="caret" />
								</p>
								{this.signedInRender()}
							</li>
						)}
					</ul>
					{!signedIn && this.notSignedInRender()}
				</div>
			</nav>
		);
	}
}


Nav.propTypes = {
	signedIn: PropTypes.bool.isRequired,
	signOut: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Nav);
