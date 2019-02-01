import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
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

class App extends Component {
  
  state = {
    isAuth: false,
    id : "",
    email: "",
    password: "",
    resId: ""
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
        })
        .catch(err => console.log(err));
    }
  };
  logOut = () => {
    this.setState({id: "", isAuth: false})
  };
  
  render(){
  if (this.state.isAuth){
    return(
      <Router>
      <Wrapper>
        <Nav isAuth = {this.state.isAuth} logout = {this.logout}/>
        <div className="container">
          <Switch>
          <Route exact path = "/"
           render = {(props) => <Dashboard{...props} id={this.state.id} />} />
           <Route exact path="/res-info/:resId"
           render = {(props) => <ResInfo{...props} />} />
           <Redirect to="/"/>
          </Switch>
        </div>
      </Wrapper>
    </Router>
    )
  }
  return (
    <Router>
      <Wrapper>
        <Nav isAuth = {this.state.isAuth}/>
        <div className="container">
          <Switch>
            <Route exact path="/" 
            render={(props)=> <Login{...props} handleInputChange={this.handleInputChange} login={this.login} /> }/>
            <Route exact path="/signup" 
            render={(props)=> <Signup{...props} handleInputChange={this.handleInputChange} signup={this.signup} /> } /> 
            <Route exact path="/res-info" component={ResInfo} /> 
            <Route exact path="/infractions" component={Infractions} /> 
            <Redirect to="/" />
          </Switch>
        </div>
      </Wrapper>
    </Router>
  );
}
};

export default App;
