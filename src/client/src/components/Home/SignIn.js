import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../actions';

const { signinAction, logoutAction } = actions;
// import '../../style/SignIn.css';

class SignIn extends Component {
	constructor(props) {
		super(props);

		// Called automaticli on visiting page
		const token = localStorage.getItem('token');
		if (token) {
			const { dispatch } = this.props;
			dispatch(logoutAction.logout());
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
		const { dispatch } = this.props;
		if (email && password) {
			dispatch(signinAction.signin(email, password));
		}
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	render() {
		const { loggingIn } = this.props;
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
					<button type="submit" className="btn btn-success btn-lg">
						<p>Sign In</p>
					</button>
					{loggingIn
              && <p>Loading ....</p>
					}
					<Link to="/signup" href="/signup" className="btn btn-link"><button type="button">Sign Up</button></Link>
				</form>
			</div>
		);
	}
}


function mapStateToProps(state) {
	const { loggingIn } = state.authentication;
	return {
		loggingIn,
	};
}

SignIn.propTypes = {
	dispatch: PropTypes.func.isRequired,
	loggingIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(SignIn);
