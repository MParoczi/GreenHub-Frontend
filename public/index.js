import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../src/components/App";
import "./index.css";
import configureStore from "../src/redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

render(
  <ReduxProvider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
