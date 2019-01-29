import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Nav from "./components/Nav.js";
import Wrapper from "./components/Wrapper.js";
import MainContentWrapper from "./components/MainContent";
import Login from "./components/Login";
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard/Dashboard"

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Wrapper>
    </Router>
  );
};

export default App;
