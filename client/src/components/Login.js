import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="title">PLEASE LOGIN</div>
        </div>
        <div className="col-md-8 offset-md-2 form-box">
          <form className="login">
            <div className="form-group">
              <label className="label" for="inputEmail1">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label class="label" for="inputPassword1">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
