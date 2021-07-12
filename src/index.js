import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Home";
import List from "./components/List";
import Show from "./components/Show";
import Add from "./components/Add";
import Email from "./components/Email";
import Customer from "./components/Customer";
import reportWebVitals from "./reportWebVitals";
import { isIE } from 'react-device-detect';

if (isIE) {
  return (
    <div>
      <h1>Hi there. You’re using an outdated browser</h1>
      <p>For a safer and faster user experience use a modern browser like Chrome, Firefox, Safari, Opera, or Edge.</p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <App />
        <Route render={() => <Home />} exact path="/" />
        <Route render={() => <List />} path="/list" />
        <Route render={() => <Show />} path="/show/:id" />
        <Route render={() => <Add />} path="/add/:id" />
        <Route render={() => <Email />} path="/email" />
        <Route render={() => <Customer />} path="/customer/:id" />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
