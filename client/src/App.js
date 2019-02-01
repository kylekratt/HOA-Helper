import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Nav from "./components/Nav.js";
import Wrapper from "./components/Wrapper.js";
import Login from "./components/Login";
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard/Dashboard"
import API from "./utils/API"
import ResInfo from "./components/ResInfo/ResInfo"
import Infractions from "./components/Infractions/Infractions"
import Message from "./components/Message"

class App extends Component {

  state = {
    isAuth: false,
    id: "",
    email: "",
    password: "",
    resId: "",
    recipients: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCheckboxChange = event => {
    if(event.target.checked){
      this.setState({recipients: this.state.recipients.concat(event.target.name)})
      console.log(this.state.recipients);
    }
    else{
      var array = [...this.state.recipients];
      var index = array.indexOf(event.target.name);
      array.splice(index, 1);
      this.setState({recipients: array})
    }
  }

  login = event => {
    event.preventDefault();
    if ((/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) && this.state.password) {
      API.login({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          console.log(res);
          this.setState({ id: res.data, isAuth: true })
        })
        .catch(err => console.log(err));
    }
  };
  signup = event => {
    event.preventDefault();
    if ((/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) && this.state.password) {
      API.signup({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          console.log(res)
          API.login({ email: this.state.email, password: this.state.password })
            .then(res => {
              console.log(res);
              this.setState({ id: res.data, isAuth: true })
            })
        })
        .catch(err => console.log(err));
    }
  };
  logOut = () => {
    this.setState({ id: "", isAuth: false })
  };

  render() {
    if (this.state.isAuth) {
      return (
        <Router>
          <Wrapper>
            <Nav isAuth={this.state.isAuth} logout={this.logout} />
            <div className="container">
              <Switch>
                <Route exact path="/"
                  render={(props) => <Dashboard{...props} id={this.state.id} recipients={this.state.recipients} handleCheckboxChange={this.handleCheckboxChange}/>} />
                <Route exact path="/res-info/:resId"
                  render={(props) => <ResInfo{...props} />} />
                <Route exact path="/infractions/:resId"
                render={(props) => <Infractions{...props} />}/>
                <Route exact path="/message"
                render={(props) => <Message{...props} recipients={this.state.recipients} />}/>
                <Redirect to="/" />
              </Switch>
            </div>
          </Wrapper>
        </Router>
      )
    }
    return (
      <Router>
        <Wrapper>
          <Nav isAuth={this.state.isAuth} />
          <div className="container">
            <Switch>
              <Route exact path="/"
                render={(props) => <Login{...props} handleInputChange={this.handleInputChange} login={this.login} />} />
              <Route exact path="/signup"
                render={(props) => <Signup{...props} handleInputChange={this.handleInputChange} signup={this.signup} />} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Wrapper>
      </Router>
    );
  }
};

export default App;
