import React, { Component } from "react";
import API from "../utils/API";

class Signup extends Component {
  state = {
    email: "",
    password: ""
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if ((/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) && this.state.password) {
      API.signup({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };
  
  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="title">Sign Up or | <a className="btn btn-success" href="/" role="button">Login</a>
          </div>
        </div>
        <div className="col-md-8 offset-md-2 form-box">
          <form className="login">
            <div className="form-group">
              <label className="label" htmlFor="inputEmail1">
                Email address
              </label>
              <input
                type="email"
                onChange={this.handleInputChange}
                className="form-control"
                id="email-input"
                placeholder="Email"
                name = "email"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="inputPassword1">
                Password
              </label>
              <input
                type="password"
                onChange={this.handleInputChange}
                className="form-control"
                id="password-input"
                placeholder="Password"
                name = "password"
              />
            </div>
            <button type="submit" onClick={this.handleFormSubmit} className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
