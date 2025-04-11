import React from "react";
import logo from "./logo.png";
import "../../src/App.css";

const ShineSquadLogo = (): React.JSX.Element => {
  return (
    <>
      <img className={"shineSquadLogo"} src={logo} alt="logo" />
    </>
  );
};

export default ShineSquadLogo;
