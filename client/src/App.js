import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Nav from "./components/Nav.js";
import Wrapper from "./components/Wrapper.js";
import Login from "./components/Login";
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard/Dashboard"
import API from "./utils/API"


class App extends Component {
  
  state = {
    isAuth: false,
    id : "",
    email: "",
    password: ""
  }

  setId(id){
    this.setState({id: id, isAuth: true})
  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  login = event => {
    event.preventDefault();
    if ((/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) && this.state.password) {
      API.login({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
        console.log(res);
        this.setState({id: res.data, isAuth: true})
        console.log(this.state);
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
        .then(res => {console.log(res)
        this.setState({id: res.data._id, isAuth: true})
      console.log(this.state)})
        .catch(err => console.log(err));
    }
  };
  logOut = () => {
    this.setState({id: "", isAuth: false})
  }
  render(){
  return (
    <Router>
      <Wrapper>
        <Nav isAuth = {this.isAuth}/>
        <div className="container">
          <Switch>
            <Route exact path="/" 
            render={(props)=> <Login{...props} isAuth = {this.isAuth} handleInputChange={this.handleInputChange} login={this.login} /> }/>
            <Route exact path="/signup" 
            render={(props)=> <Signup{...props} handleInputChange={this.handleInputChange} signup={this.signup} /> } />
           <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Wrapper>
    </Router>
  );
}
};

export default App;
