import React, { Component } from "react";
import axios from "../../../../axios-orders";

//Redux imports
import { connect } from "react-redux";
import { purchaseBurger } from "../../../../store/actions/order.action";

//Component imports
import Button from "../../../../components/UI/Button/Button";
import "./ContactData.css";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import Input from "../../../../components/UI/Inputs/Input";
import ErrorHandler from "../../../../hoc/ErrorHandler/ErrorHandler";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name",
        },
        validation: {
          required: true,
          minLength: 3,
        },
        valid: false,
        touched: false,
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        value: "",
      },
      zipcode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code",
        },
        validation: {
          required: true,
          minLength: 5,
          maxLength: 6,
        },
        valid: false,
        touched: false,
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayName: "Fastest" },
            { value: "cheapest", displayName: "Cheapest" },
          ],
        },
        validation: {},
        valid: true,
        value: "fastest",
      },
    },
    formIsValid: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (const formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] =
        this.state.orderForm[formElementIdentifier].value;
    }

    const order = {
      ingredients: this.props.ings,
      price: this.props.totalPrice,
      orderData: formData,
    };

    this.props.onOrderBurger(order);
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.trim().length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.trim().length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    // get a copy of the first level
    const updatedOrderForm = {
      ...this.state.orderForm,
    };

    // get a copy of the second level (based on the inputIdentifier)
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };

    // Now we can safely change the value of the updatedFormElement because it is a clone
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (const inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid });
  };
  render() {
    const formElementsArray = [];
    for (const key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(({ id, config }) => (
          <Input
            key={id}
            elementType={config.elementType}
            elementConfig={config.elementConfig}
            value={config.value}
            invalid={!config.valid}
            shouldValidate={config.validation}
            touched={config.touched}
            changed={(event) => this.inputChangedHandler(event, id)}
          />
        ))}
        <Button type="true" disabled={!this.state.formIsValid}>
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }

    return (
      <div className="ContactData">
        <h4>Enter you Contact Data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData) => dispatch(purchaseBurger(orderData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorHandler(ContactData, axios));
