import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("rootElement");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </>
  );
}
