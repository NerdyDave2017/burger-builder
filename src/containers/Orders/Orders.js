import React, { Component } from "react";

//Redux import
import { connect } from "react-redux";
import { fetchOrders } from "../../store/actions/order.action";

// Component imports
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import errorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let allOrders = <Spinner />;
    if (!this.props.loading) {
      allOrders = this.props.orders.map((order) => {
        return (
          <Order
            ingredients={order.ingredients}
            price={order.price}
            key={order.id}
          />
        );
      });
    }
    return <div>{allOrders}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(fetchOrders()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(errorHandler(Orders, axios));
