import React from "react";
import shineSquadLogo from "./shineSquadLogo.png";
import "../../src/App.css";

const ShineSquadLogo = (): React.JSX.Element => {
  return (
    <>
      <img className={"shineSquadLogo"} src={shineSquadLogo} alt="logo" />
    </>
  );
};

export default ShineSquadLogo;
