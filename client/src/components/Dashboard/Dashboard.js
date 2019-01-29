import React, { Component } from "react";
import DashNav from "./DashNav";
import Resident from "./Resident";
import "./dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="card col-12">
          <div className="card-header mt-3 text-center" id="cardHeader">RESIDENTS</div>
          <div className="card-body">
          <a href="#" className="btn btn-sm btn-primary mb-3">Add Resident</a>
          <a href="#" className="btn btn-sm btn-primary ml-3 mb-3">Send Message</a>
          <table className="table">
            <thead class="thead-light">
              <tr>
                <th scope="col" className="thead">Select</th>
                <th scope="col" className="thead">Name</th>
                <th scope="col" className="thead">Address</th>
                <th scope="col" className="thead">Infraction</th>
                <th scope="col" className="thead">Fee</th>
                <th scope="col" className="thead">Info Confirmed</th>
              </tr>
            </thead>
            <tbody>
              <td> <input type="checkbox" aria-label="Checkbox for following text input"/> </td>
              <td>Bob Bobster</td>
              <td>374 Briarwood Lane, Winter Park, FL</td>
              <td><i class="fa fa-exclamation-triangle text-danger"></i></td>
              <td><i class="fa fa-file-invoice-dollar text-warning"></i></td>
              <td><i class="fa fa-file-alt text-success"></i></td>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
