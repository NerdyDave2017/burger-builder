import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";

const ErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      err: null,
    };
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ err: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (err) => {
          this.setState({ err: err });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    errorConfirmedHandler = () => {
      this.setState({ err: null });
    };
    render() {
      return (
        <>
          <Modal show={this.state.err} modalClosed={this.errorConfirmedHandler}>
            {this.state.err ? this.state.err.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default ErrorHandler;
