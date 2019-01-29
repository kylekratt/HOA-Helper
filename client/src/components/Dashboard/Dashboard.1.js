import React, { Component } from "react";
import DashNav from "./DashNav";
import Resident from "./Resident";


class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div class="col-12">
          <div class="title">
            Residents List{" "}
            <span>
              <i class="fa fa-home text-white titleIcon" />
            </span>
          </div>
        </div>
        <div className="col form-box">
          <DashNav />
          <Resident />
        </div>
      </div>
    );
  }
}
}

export default Dashboard;
