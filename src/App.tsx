import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ShineSquadLogo from "./logo/logo";

const App = (): React.JSX.Element => {
  return (
    <div className="App">
      <ShineSquadLogo />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
