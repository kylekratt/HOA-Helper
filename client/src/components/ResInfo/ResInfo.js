import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import "../ResInfo/resInfo.css";
import API from "../../utils/API";
import UpdateRes from "../UpdateRes/UpdateRes.js"

class ResInfo extends Component {
  state = {
    name: "",
    address: "",
    phone: "",
    email: "",
    payment: 0,
    infractions: [],
    redirect: false,
    updated: 0
  }
  componentDidMount() {
    API.display(this.props.match.params.resId)
      .then(res => {
        this.setState({ name: res.data.name, address: res.data.address, phone: res.data.phone, email: res.data.email, payment: res.data.payment, infractions: res.data.infractions })
      })
      .catch(err => console.log(err))
  }
  componentDidUpdate() {
    API.display(this.props.match.params.resId)
      .then(res => {
        this.setState({ name: res.data.name, address: res.data.address, phone: res.data.phone, email: res.data.email, payment: res.data.payment, infractions: res.data.infractions })
      })
      .catch(err => console.log(err))
  }
  delete = id => {
    API.remove(id)
    .then((res) => this.setState({redirect: true}))
    .catch(err => console.log(err))
  }
  update() {
    this.setState({updated: this.state.updated+1})
  }

  render() {
    return (
      
      <div className="card col-sm-12 col-md-8 offset-md-2">
      {this.state.redirect && (
        <Redirect to='/' />
      ) 
      }
        <div className="card-body">
          <div className="card-title resName">{this.state.name}</div>
          <hr />
          <div className="row">
            <div className="col-sm-12 col-md-6 mb-2">
              <p>
                <span className="info-label">Address: </span>{this.state.address}
              </p>
              <p>
                <span className="info-label">Phone: </span>{this.state.phone}
              </p>
              <p>
                <span className="info-label">Email: </span>{this.state.email}
              </p>
              <UpdateRes update={this.state.update} name={this.state.name} address={this.state.address} phone={this.state.phone} email={this.state.email} id={this.props.match.params.resId}/>
              <button className="btn btn-primary ml-2 btn-sm mt-3">
                Infraction
              </button>
              <button className="btn btn-primary ml-2 btn-sm btn-danger mt-3" onClick={() => this.delete(this.props.match.params.resId)}>
                Delete
              </button>
            </div>

            <div className="col-sm-12 col-md-6">
              <table className="table table-sm text-center">
                <thead className="thead-light thSmall">
                  <tr>
                    <th scope="col">Infractions</th>
                    <th scope="col">Fee</th>
                    <th scope="col">Info Confirmed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.infractions.length > 0 && (<i className="fa fa-exclamation-triangle text-danger"></i>)}</td>
                    <td>{this.state.payment > 0 ? (<i className="fa fa-file-invoice-dollar text-danger"></i>) : (<i className="fa fa-file-invoice-dollar text-success"></i>)}</td>
                    <td><i className="fa fa-file-alt text-success"></i></td>
                  </tr>
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
