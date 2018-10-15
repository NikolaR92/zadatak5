import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../actions';
// import '../../style/SignUp.css';

const { signupAction } = actions;

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
			},
			submitted: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { user } = this.state;
		const { dispatch } = this.props;
		if (user.firstName && user.lastName && user.email && user.password) {
			dispatch(signupAction.signup(user));
		}
	}

	handleChange(e) {
		const { name, value } = e.target;
		const { user } = this.state;
		this.setState({
			user: {
				...user,
				[name]: value,
			},
		});
	}

	render() {
		const { registering } = this.props;
		const { user, submitted } = this.state;
		return (
			<div>
				<h2>Sign Up</h2>
				<form name="form" onSubmit={this.handleSubmit}>
					<div className={`form-group${submitted && !user.firstName ? ' has-error' : ''}`}>
						<label htmlFor="firstName">
							<p>First Name</p>
							<input type="text" className="form-control" id="firstName" name="firstName" value={user.firstName} onChange={this.handleChange} />
							{submitted && !user.firstName
                          && <div className="help-block">First Name is required</div>
							}
						</label>
					</div>
					<div className={`form-group${submitted && !user.lastName ? ' has-error' : ''}`}>
						<label htmlFor="lastName">
							<p>Last Name</p>
							<input type="text" className="form-control" id="lastName" name="lastName" value={user.lastName} onChange={this.handleChange} />
							{submitted && !user.lastName
                          && <div className="help-block">Last Name is required</div>
							}
						</label>
					</div>
					<div className={`form-group${submitted && !user.email ? ' has-error' : ''}`}>
						<label htmlFor="email">
							<p>Email</p>
							<input type="text" className="form-control" id="email" name="email" value={user.email} onChange={this.handleChange} />
							{submitted && !user.email
                          && <div className="help-block">Email is required</div>
							}
						</label>
					</div>
					<div className={`form-group${submitted && !user.password ? ' has-error' : ''}`}>
						<label htmlFor="password">
							<p>Password</p>
							<input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
							{submitted && !user.password
                          && <div className="help-block">Password is required</div>
							}
						</label>
					</div>
					<div className="form-group">
						<button type="button" className="btn btn-primary">Register</button>
						{registering
                        && <p>Loading ....</p>
						}
						<Link to="/signin" href="/signin" className="btn btn-link"><button type="button">Cancel</button></Link>
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { registering } = state.registration;
	return {
		registering,
	};
}

SignUp.propTypes = {
	dispatch: PropTypes.func.isRequired,
	registering: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps)(SignUp);
