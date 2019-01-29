import React, { Component } from "react";
import "./dashboard.css";
import TestIcon from "../../assets/images/SVG/icon-vio-red.svg";
// import "../../util/resSample.json"

class Resident extends Component {
  render() {
    return (
      <div className="row resident-row">
        <div className="col-9">
          <p className="name">Bob Bobster</p>
          <p><span className="info-label">Address: </span>123 Any Drive Lane, Winter Park FL, 32789</p>
          <p><span className="info-label">Email: </span>bobsEmail@email.com</p>
          <p><span className="info-label">Phone 1 : </span>407-555-5555</p>
          <p><span className="info-label">Phone 2 : </span>407-555-5555</p>
          <p></p>
          <p></p>
        </div>
        <div className="col-1 icon">
        <i class="fa fa-exclamation-triangle text-danger"></i>
        </div>
        <div className="col-1 icon">
        <i class="fa fa-file-invoice-dollar text-warning"></i>
        </div>
        <div className="col-1 icon">
        <i class="fa fa-file-alt text-success"></i>
        </div>
        
      </div>
    );
  }
}

export default Resident;
