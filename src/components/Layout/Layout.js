import React, { useState } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/Toolbar/SideDrawer/SideDrawer";
import { connect } from "react-redux";

const Layout = (props) => {
  const [state, setState] = useState({
    showSideDrawer: false,
  });

  const closeSideDrawerHandler = () => {
    setState({ showSideDrawer: false });
  };
  const SideDrawerToggleHandler = () => {
    setState({ showSideDrawer: !state.showSideDrawer });
  };

  return (
    <Aux>
      <Toolbar isAuth={props.isAuth} clicked={SideDrawerToggleHandler} />
      <SideDrawer
        isAuth={props.isAuth}
        open={state.showSideDrawer}
        closed={closeSideDrawerHandler}
      />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
