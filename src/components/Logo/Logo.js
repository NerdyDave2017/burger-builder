import React from "react";

import burgerLogo from "../../assets/Images/28.1 burger-logo.png";
import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="Logo">
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
