import React, { Component } from "react";

class DashNav extends Component {
  render() {
    return (
      <div className="row">
        <ul className="nav col-md-9" id="dashNav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Select All
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle "
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Alphabetically
              </a>
              <div class="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Infractions
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Fee
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Send Message
            </a>
          </li>
        </ul>
        <div class="status col-3">Status</div>
      </div>
    );
  }
}

export default DashNav;
