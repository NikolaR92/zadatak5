import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions';

const { deleteAction, logoutAction } = actions;

class Options extends Component {
	handleDelete() {
		const { dispatch } = this.props;
		return () => dispatch(deleteAction.deleteUser());
	}

	handleLogOut() {
		const { dispatch } = this.props;
		return () => dispatch(logoutAction.logout());
	}

	render() {
		return (
			<div>
				<p>Welcome to Account options</p>
				<button type="button" onClick={this.handleLogOut()}> Logout</button>
				<Link to="/" href="/" className="btn btn-link"><button type="button">Home </button></Link>
				<button type="button" onClick={this.handleDelete()}> Delete Account</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { deleting } = state.deleteUser;
	return {
		deleting,
	};
}

Options.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Options);
