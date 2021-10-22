import React, { useState } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/Toolbar/SideDrawer/SideDrawer";

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
      <Toolbar clicked={SideDrawerToggleHandler} />
      <SideDrawer open={state.showSideDrawer} closed={closeSideDrawerHandler} />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
