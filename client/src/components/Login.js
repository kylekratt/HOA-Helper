import React, { Component } from "react";
import API from "../utils/API";

class Login extends Component {
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
    if (this.state.email && this.state.password) {
      API.login({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };
  
  render() {
    return (
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="title">Login or | <a class="btn btn-primary" href="/signup" role="button">Sign Up</a> </div>
        </div>
        <div className="col-md-8 offset-md-2 form-box">
          <form className="login">
            <div className="form-group">
              <label className="label" htmlFor="inputEmail1">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                onChange={this.handleInputChange}
                id="email-input"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="inputPassword1">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={this.handleInputChange}
                id="password-input"
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" onClick={this.handleFormSubmit} className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
