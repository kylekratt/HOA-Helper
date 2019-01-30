import React, { Component } from "react";
// import "../AddResident/addRes.css"

class AddRes extends Component {
  render() {
    return (
      <div className="btn btn-sm" id="btnHack">
        <button
          className="btn btn-primary mb-2 btn-sm btnHack"
          data-target="#addResModal"
          data-toggle="modal"
        >
          Add Resident
        </button>
        <div
          className="modal fade"
          data-keyboard="false"
          data-backdrop="static"
          id="addResModal"
          tabindex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 class="modal-title">Add Resident</h3>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="inputName">Name</label>
                    <input
                      className="form-control"
                      placeholder="First and Last"
                      type="text"
                      id="inputName"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary">Add</button>
                <button className="btn btn-primary" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRes;