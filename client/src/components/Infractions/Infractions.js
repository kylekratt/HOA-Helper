import React, { Component } from "react";
import "../../components/Infractions/infractions.css";
import AddInfraction from "./AddInfraction";

class Infractions extends Component {
  render() {
    return (
      <div className="card col-sm-12 col-md-8 offset-md-2">
        <div className="card-body">
          <div className="row">
            {/* ==========Fee Col========= */}
            <div className="col-sm-12 col-md-6">
              <div className="infractionHead dark-green pt-3">
                <span>
                  <i class="fa fa-file-invoice-dollar icon" />{" "}
                </span>
                HOA Fee
              </div>
              <hr />
              {/* ==============info Block ==========*/}
              <div class="mb-2">
                <p>
                  <span className="info-label">Name: </span>Bob Bobster
                </p>
                <p>
                  <span className="info-label">Address: </span>123 Sesame Street
                </p>
                <p>
                  <span className="info-label">Phone: </span>407-555-1234
                </p>
                <p>
                  <span className="info-label">Email: </span>burt@Sesame.com
                </p>
              </div>
              <hr />
              {/* ===============Payment Block=============== */}
              <div className="subhead dark-green mb-2">Payment Status</div>
              <div className="row">
                <div className="col-sm-12 col-md-4 light-italic">
                  <p>
                    Balance: <span> $200</span>
                  </p>
                </div>
                <div className="col-sm-12 col-md-8">
                  <p>
                    <input type="checkbox" /> Notices On
                  </p>
                  <p>
                    <input type="checkbox" /> Payment Made
                  </p>
                </div>
              </div>
              <hr />
              <div>
                <button type="submit" className="btn btn-primary btn-sm">
                  Submit
                </button>
              </div>
            </div>
            {/* =============== Infraction Col================ */}
            <div className="col-sm-12 col-md-6 bg-light pb-3">
              <div className="infractionHead red pt-3">
                <span>
                  <i class="fa fa-file-alt icon" />{" "}
                </span>
                Infractions
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-10">
                  <p>Resident painted his house orange.</p>
                </div>
                <div className="col-sm-2">
                  <i className="fa fa-exclamation-triangle text-danger icon" />
                </div>
              </div>
              <hr />
              <AddInfraction />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Infractions;
