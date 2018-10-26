import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import actions from '../../actions';

const { logoutAction, productActions } = actions;

class Home extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(productActions.getAll());
	}

	handleOrder(productId) {
		const { dispatch } = this.props;
		return () => dispatch(productActions.order(productId));
	}

	handleLogOut() {
		const { dispatch } = this.props;
		return () => dispatch(logoutAction.logout());
	}

	render() {
		const { products } = this.props;


		return (
			<div>
				<p>Welcome to the Store</p>
				<h3>All Products:</h3>
				<p>Name | Price | Quantity</p>
				{products.loading && <em>Loading products ...</em>}
				{products.error && (
					<span className="text-danger">
						{products.error}
					</span>
				)}
				{products.items && (
					<ul>
						{products.items.map((product) => {
							let ordering = '';
							if (product.ordering) {
								ordering = (<em> Ordering ... </em>);
							} else if (product.orderError) {
								ordering = (
									<span className="text-danger">
										{product.orderError}
									</span>);
							} else {
								ordering = (
									<span>
										{' '}
										<button type="button" onClick={this.handleOrder(product.id)}> Order </button>
									</span>
								);
							}
							return (
								<li key={product.id}>
									{`${product.name} | ${product.price} | ${product.quantity}`}
									{ ordering }
								</li>);
						})}
					</ul>
				)}
				<p>
					<button type="button" onClick={this.handleLogOut()}> Logout</button>
					<Link to="/orders" href="/orders" className="btn btn-link"><button type="button">Orders</button></Link>
					<Link to="/options" href="/options" className="btn btn-link"><button type="button">Account Options</button></Link>
				</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { products } = state;
	return {
		products,
	};
}

Home.propTypes = {
	dispatch: PropTypes.func.isRequired,
	products: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(Home);
