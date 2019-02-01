import React, { Component } from "react";
import "../../components/Infractions/infractions.css"
import API from "../../utils/API"

class AddInfraction extends Component {
  
  state = {
    description: ""
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  

  formSubmit = event => {
    event.preventDefault();
    if (this.state.description.length>0){
      API.infract({description: this.state.description, id: this.props.id})
      .then(() => {this.props.update()})
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
                      name="description"
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
