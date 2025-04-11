import React from "react";
import logo from "../../assets/images/logo.png";
import "../../assets/styles/App.css";

const ShineSquadLogo = (): React.JSX.Element => {
  return (
    <>
      <img className={"shineSquadLogo"} src={logo} alt="logo" />
    </>
  );
};

export default ShineSquadLogo;
