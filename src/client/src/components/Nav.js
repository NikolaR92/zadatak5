import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import signOutAction from '../redux/SignOut/signOutAction';
import '../style/Nav.css';

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
			<div className="dropdown-menu">
				<Link to="/options" href="/options" className="dropdown-item">Account Options</Link>
				<button type="button" className="dropdown-item" onClick={() => (this.handleSignOut())}> Sign Out</button>
			</div>
		);
	}

	notSignedInRender() {
		return (
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/signin" href="/signin" className="nav-link">Sign In</Link>
				</li>
				<li className="nav-item">
					<Link to="/signup" href="/signup" className="nav-link">Sign Up</Link>
				</li>
			</ul>
		);
	}

	render() {
		const { signedIn } = this.props;

		return (
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
				<ul className="navbar-nav ">
					<li className="nav-item">
						<Link to="/products" href="/products" className="nav-link">Home</Link>
					</li>
					{signedIn && (
						<li className="nav-item">
							<Link to="/orders" href="/orders" className="nav-link">Orders</Link>
						</li>
					)}
					<li className="nav-item"><p className="nav-link">Contact</p></li>
					{signedIn && (
						<li className="nav-item dropdown">
							<p className="nav-link dropdown-toggle" data-toggle="dropdown">
								<span>Options</span>
							</p>
							{this.signedInRender()}
						</li>
					)}
				</ul>
				{!signedIn && this.notSignedInRender()}

			</nav>
		);
	}
}


Nav.propTypes = {
	signedIn: PropTypes.bool.isRequired,
	signOut: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Nav);
