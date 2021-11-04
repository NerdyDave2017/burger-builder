import React from "react";
import "./NavigationItems.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" exact>
        Burger&nbsp;Builder
      </NavigationItem>
      {props.isAuth ? (
        <NavigationItem link="/orders">Orders</NavigationItem>
      ) : null}
      {props.isAuth ? (
        <NavigationItem link="/logout">Log Out</NavigationItem>
      ) : (
        <NavigationItem link="/auth">Sign Up/Sign In</NavigationItem>
      )}
    </ul>
  );
};

export default NavigationItems;
