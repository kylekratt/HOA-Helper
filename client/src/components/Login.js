import React, { Component } from "react";

class Login extends Component {
  
  
  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="title">Login or | <a className="btn btn-primary" href="/signup" role="button">Sign Up</a> </div>
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
                onChange={this.props.handleInputChange}
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
                onChange={this.props.handleInputChange}
                id="password-input"
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" onClick={this.props.login} className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
