import React from "react";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Open"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Close"];
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className="Logo2">
          <Logo />
        </div>

        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
