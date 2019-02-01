import React, { Component } from "react";
import "../ResInfo/resInfo.css";

class ResInfo extends Component {
  render() {
    return (
      <div className="card col-sm-12 col-md-8 offset-md-2">
        <div className="card-body">
          <div className="card-title resName">Bob Bobster</div>
          <hr />
          <div class="row">
            <div className="col-sm-12 col-md-6 mb-2">
              <p>
                <span className="info-label">Address: </span>123 Sesame Street
              </p>
              <p>
                <span className="info-label">Phone: </span>407-555-1234
              </p>
              <p>
                <span className="info-label">Email: </span>burt@Sesame.com
              </p>
              <button className="btn btn-primary btn-sm mt-3">Update</button>
              <button className="btn btn-primary ml-2 btn-sm mt-3">
                Infractions
              </button>
              <button className="btn btn-primary ml-2 btn-sm btn-danger mt-3">
                Delete
              </button>
            </div>

            <div className="col-sm-12 col-md-6">
              <table className="table table-sm text-center">
                <thead class="thead-light thSmall">
                  <th scope="col">Infractions</th>
                  <th scope="col">Fee</th>
                  <th scope="col">Info Confirmed</th>
                </thead>
                <tbody>
                  <td>
                    <i class="fa fa-exclamation-triangle text-danger icon" />
                  </td>
                  <td>
                    <i class="fa fa-file-invoice-dollar text-warning icon" />
                  </td>
                  <td>
                    <i class="fa fa-file-alt text-success icon" />
                  </td>
                </tbody>
                
              </table>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ResInfo;
