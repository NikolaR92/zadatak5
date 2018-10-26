import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import actions from '../actions';

const { orderActions, logoutAction } = actions;

class Orders extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(orderActions.getAll());
	}

	handleOrder(orderId) {
		const { dispatch } = this.props;
		return () => dispatch(orderActions.orderDelete(orderId));
	}

	handleLogOut() {
		const { dispatch } = this.props;
		return () => dispatch(logoutAction.logout());
	}

	render() {
		const { orders } = this.props;

		return (
			<div>
				<p>Welcome to the Store</p>
				<h3>All Orders:</h3>
				<p>ID | Price | Quantity | Date Delivery</p>
				{orders.loading && <em>Loading orders ...</em>}
				{orders.error && (
					<span className="text-danger">
						{orders.error}
					</span>
				)}
				{orders.items && (
					<ul>
						{orders.items.map((order) => {
							let tmp = '';
							if (order.delete) {
								tmp = (<em> Canceling ... </em>);
							} else if (order.deleteError) {
								tmp = (
									<span className="text-danger">
										{order.deleteError}
									</span>
								);
							} else {
								tmp = (
									<span>
										<button type="button" onClick={this.handleOrder(order.id)}> Cancel Order </button>
									</span>
								);
							}
							return (
								<li key={order.id}>
									{`${order.id} | ${order.price} | ${order.quantity} | ${order.dateDelivery}`}
									{tmp}
								</li>
							);
						})}
					</ul>
				)}
				<p>
					<button type="button" onClick={this.handleLogOut()}> Logout</button>
					<Link to="/" href="/" className="btn btn-link"><button type="button">Products </button></Link>
					<Link to="/options" href="/options" className="btn btn-link"><button type="button">Account options </button></Link>
				</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { orders } = state;
	return {
		orders,
	};
}

Orders.propTypes = {
	dispatch: PropTypes.func.isRequired,
	orders: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Orders);
