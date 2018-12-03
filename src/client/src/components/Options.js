import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import deleteUserActions from '../redux/DeleteUser/deleteUserActions';


function mapStateToProps(state) {
	const deleting = state.deleteUser.get('deleting');
	return {
		deleting,
	};
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{ deleteUser: deleteUserActions.deleteUser }, dispatch
	);
}


class Options extends Component {
	handleDelete() {
		const { deleteUser } = this.props;
		deleteUser();
	}

	render() {
		const { deleting } = this.props;
		return (
			<div>
				<h2>Account options</h2>
				{deleting && <p>Deleting .....</p>}
				{!deleting && <button type="button" onClick={() => (this.handleDelete())}> Delete Account</button>}
			</div>
		);
	}
}


Options.propTypes = {
	deleting: PropTypes.bool.isRequired,
	deleteUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
