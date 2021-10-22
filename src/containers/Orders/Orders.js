import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import errorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    let allOrders = this.state.orders.map((order) => {
      return (
        <Order
          ingredients={order.ingredients}
          price={order.price}
          key={order.id}
        />
      );
    });
    if (this.state.loading) {
      allOrders = <Spinner />;
    }
    return <div>{allOrders}</div>;
  }
}

export default errorHandler(Orders, axios);
