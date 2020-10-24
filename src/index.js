import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./index.css";
import "normalize.css";
import { BrowserRouter as Router } from "react-router-dom";

/**
 * TODO
 * независимые блоки отделять переносом строки
 */

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
