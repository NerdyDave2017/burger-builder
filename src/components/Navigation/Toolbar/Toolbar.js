import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import DrawerToggle from "./SideDrawer/DrawerToggle/DrawerToggle";
import { Link } from "react-router-dom";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <DrawerToggle clicked={props.clicked} />
      <div className="Logo1">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <nav className="DesktopOnly">
        <NavigationItems isAuth={props.isAuth}></NavigationItems>
      </nav>
    </header>
  );
};

export default Toolbar;
