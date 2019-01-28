import React, { Component } from "react";

class Signup extends Component {

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
                onChange={this.props.handleInputChange}
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
                onChange={this.props.handleInputChange}
                className="form-control"
                id="password-input"
                placeholder="Password"
                name = "password"
              />
            </div>
            <button type="submit" onClick={this.props.signup} className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
