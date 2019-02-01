import React, { Component } from "react";
import "./updateRes.css"
import API from "../../utils/API"

class UpdateRes extends Component {
  
  state = {
    name: this.props.name,
    phone: this.props.phone,
    email: this.props.email,
    address: this.props.address,
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
      API.update({name: this.state.name, email: this.state.email, address: this.state.address, phone: this.state.phone, id: this.props.id})
      .then(() => {console.log(this.state)
      this.setState({name: "", phone: "", email: "", address: ""})})
      .catch(err=>console.log(err))
    }
  }


  render() {
    return (
      <div className="btn btn-sm p-0" id="btnHack">
        <button
          className="btn btn-primary ml-2 btn-sm mt-3 btnHack"
          data-target="#addResModal"
          data-toggle="modal"
        >
          Update
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
                      value={this.state.name}
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
                      value={this.state.phone}
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
                      value={this.state.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      className="form-control"
                      id="address"
                      placeholder="Address"
                      row="3"
                      name="address"
                      onChange={this.handleInputChange}
                      value={this.state.address}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={this.formSubmit}>Update</button>
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

export default UpdateRes;
