import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Nav from "./components/Nav.js";
import Wrapper from "./components/Wrapper.js";
import MainContentWrapper from "./components/MainContent";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </Wrapper>
    </Router>
  );
};

export default App;
