import React, { Component } from "react";
import "../AddResident/addRes.css"
import API from "../../utils/API"

class AddRes extends Component {
  
  state = {
    name: "",
    phone: "",
    email: "",
    address: ""
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  

  formSubmit = event => {
    event.preventDefault();
    if ((this.state.name.length>1)&&(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email))&&(this.state.address.length>1)){
      API.add({name: this.state.name, email: this.state.email, address: this.state.address, phone: this.state.phone})
      .then(() => {this.props.update()
      console.log(this.state)
      this.$("#addResModal").modal("toggle")})
      .catch(err=>console.log(err))
    }
  }


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
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Add Resident</h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-left">
                <form>
                  <div className="form-group">
                    <label className="text-left" id="label" htmlFor="inputName">Name</label>
                    <input
                      className="form-control"
                      placeholder="First and Last"
                      type="text"
                      id="inputName"
                      name="name"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputName">Phone Number</label>
                    <input
                      className="form-control"
                      placeholder="000-000-0000"
                      type="text"
                      id="inputName"
                      name="phone"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputName">Email</label>
                    <input
                      className="form-control"
                      placeholder="Email"
                      type="text"
                      id="inputName"
                      name="email"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      className="form-control"
                      id="address"
                      placeholder="123 Sesame Street"
                      row="3"
                      name="address"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={this.formSubmit}>Add</button>
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
