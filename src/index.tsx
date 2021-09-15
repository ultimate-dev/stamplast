import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// store
import store from "./store/store";
// Styles
import "animate.css";
import "aos/dist/aos.css";
import "./assets/css/output.css";
import "./assets/css/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
