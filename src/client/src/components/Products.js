import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
import productAction from '../redux/Products/productActions';
import orderAction from '../redux/Orders/orderActions';


function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			order: orderAction.order,
			getAll: productAction.getAll,
		}, dispatch
	);
}


function mapStateToProps(state) {
	const { products, orders } = state;
	return {
		products, orders,
	};
}


class Products extends Component {
	componentDidMount() {
		const { getAll } = this.props;
		getAll();
	}

	handleOrder(productId) {
		const { order } = this.props;
		order(productId);
	}


	render() {
		const { products, orders } = this.props;


		return (
			<div>
				<h3>Welcome to the Store</h3>
				{products.get('loading') && <em>Loading products ...</em>}
				{products.get('items')
				&& (products.get('items')).map((product) => {
					let ordering = (
						<span>
							{' '}
							<button type="button" onClick={() => (this.handleOrder(product.get('id')))}> Order </button>
						</span>
					);
					if (orders.get('ordering')) {
						ordering = (<em> Ordering ... </em>);
					}
					return (
						<div key={product.get('id')}>
							<div>
								<div className="product-name">
									{product.get('name')}
								</div>
								<div className="product-price">
									<div className="price-string">Price:</div>
									<div className="price-number">{product.get('price')}</div>
								</div>
								<div className="product-quantity">
									<div className="quantity-string">Quantity:</div>
									<div className="quantity-number">{product.get('quantity')}</div>
								</div>
							</div>
							<div className="order-div-button">{ ordering }</div>
						</div>);
				})

				}

			</div>
		);
	}
}

Products.propTypes = {
	products: PropTypes.instanceOf(Map).isRequired,
	orders: PropTypes.instanceOf(Map).isRequired,
	getAll: PropTypes.func.isRequired,
	order: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
