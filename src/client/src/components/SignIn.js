import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import signInAction from '../redux/SignIn/signInAction';
import signOutAction from '../redux/SignOut/signOutAction';


function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			signOut: signOutAction.signOut,
			signIn: signInAction.signIn,
		}, dispatch
	);
}


function mapStateToProps(state) {
	const signingIn = state.signIn.get('signingIn');
	return {
		signingIn,
	};
}


class SignIn extends Component {
	constructor(props) {
		super(props);

		/** Called automaticli on visiting page */
		const token = localStorage.getItem('token');
		if (token) {
			const { signOut } = this.props;
			signOut();
		}
		this.state = {
			email: '',
			password: '',
			submitted: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { email, password } = this.state;
		const { signIn } = this.props;
		if (email && password) {
			signIn(email, password);
		}
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render() {
		const { signingIn } = this.props;
		const { email, password, submitted } = this.state;

		return (
			<div>
				<h2>Sign in</h2>
				<form name="form" onSubmit={this.handleSubmit}>
					<div className={`form-group${submitted && !email ? 'has-error' : ''}`}>
						<label htmlFor="email">
							<p>Email</p>
							<input type="text" className="form-control" name="email" id="email" value={email} onChange={this.handleChange} />
						</label>
						{submitted && !email
            && <div className="help-block">Email is required </div>
						}
					</div>
					<div className={`form-group${submitted && !password ? 'has-error' : ''}`}>
						<label htmlFor="password">
							<p>Password</p>
							<input type="password" className="form-control" name="password" id="password" value={password} onChange={this.handleChange} />
						</label>
						{submitted && !password
              && <div className="help-block">Password is required </div>
						}
					</div>
					<button type="submit" className="btn btn-dark">Sign In</button>
					{signingIn
              && <p>Loading ....</p>
					}
					<Link to="/signup" href="/signup" className="btn btn-dark">Sign Up</Link>
				</form>
			</div>
		);
	}
}


SignIn.propTypes = {
	signingIn: PropTypes.bool.isRequired,
	signOut: PropTypes.func.isRequired,
	signIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
