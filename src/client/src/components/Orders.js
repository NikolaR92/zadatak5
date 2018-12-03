import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
import orderActions from '../redux/Orders/orderActions';


function mapStateToProps(state) {
	const { orders } = state;
	return {
		orders,
	};
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			getAll: orderActions.getAll,
			orderDelete: orderActions.orderDelete,
		}, dispatch
	);
}


class Orders extends Component {
	componentDidMount() {
		const { getAll } = this.props;
		getAll();
	}

	handleOrder(orderId) {
		const { orderDelete } = this.props;
		orderDelete(orderId);
	}

	render() {
		const { orders } = this.props;

		return (
			<div>
				<h3>All Orders:</h3>
				{orders.get('loading') && <em>Loading orders ...</em>}
				{orders.get('items') && (
					<div>
						{orders.get('items').map(order => (
							<div key={order.get('id')}>
								<div className="order-id">
									<div className="title-id">ID:</div>
									<div className="content-id">{order.get('id')}</div>
								</div>
								<div className="order-price">
									<div className="title-price">Price: </div>
									<div className="content-price">
										{order.get('price')}
										{' '}
									</div>
								</div>
								<div className="quantity">
									<div className="title-quantity">Quantity </div>
									<div className="content-quantity">{order.get('quantity')}</div>
								</div>
								<div className="order-date-delivery">
									<div className="title-date-delivery">Date Delivery:</div>
									<div className="content-date-delivery">{order.get('dateDelivery')}</div>
								</div>
								<div className="order-button">
									<button type="button" onClick={() => (this.handleOrder(order.get('id')))}> Cancel Order </button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		);
	}
}


Orders.propTypes = {
	orders: PropTypes.instanceOf(Map).isRequired,
	getAll: PropTypes.func.isRequired,
	orderDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
