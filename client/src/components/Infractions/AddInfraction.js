import React, { Component } from "react";
import "../../components/Infractions/infractions.css"
import API from "../../utils/API"

class AddInfraction extends Component {
  
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
          Add Infraction
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
                <h3 className="modal-title">Add Infraction</h3>
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
                    <label htmlFor="address">Describe Infraction</label>
                    <textarea
                      className="form-control"
                      id="infraction"
                      placeholder="Details"
                      row="3"
                      name="infraction"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={this.formSubmit}>Add Infraction</button>
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

export default AddInfraction;
