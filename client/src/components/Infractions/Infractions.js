import React, { Component } from "react";
import "../../components/Infractions/infractions.css";
import AddInfraction from "./AddInfraction";
import API from "../../utils/API";

class Infractions extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this)
  }
  state = {
    name: "",
    address: "",
    phone: "",
    email: "",
    payment: 0,
    infractions: [],
    updated: 0
  }
  update() {
    this.setState({updated: this.state.updated+1})
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
  render() {
    return (
      <div className="card col-sm-12 col-md-8 offset-md-2">
        <div className="card-body">
          <div className="row">
            {/* ==========Fee Col========= */}
            <div className="col-sm-12 col-md-6">
              <div className="infractionHead dark-green pt-3">
                <span>
                  <i className="fa fa-file-invoice-dollar icon" />{" "}
                </span>
                HOA Fee
              </div>
              <hr />
              {/* ==============info Block ==========*/}
              <div className="mb-2">
                <p>
                  <span className="info-label">Name: </span>{this.state.name}
                </p>
                <p>
                  <span className="info-label">Address: </span>{this.state.address}
                </p>
                <p>
                  <span className="info-label">Phone: </span>{this.state.phone}
                </p>
                <p>
                  <span className="info-label">Email: </span>{this.state.email}
                </p>
              </div>
              <hr />
              {/* ===============Payment Block=============== */}
              <div className="subhead dark-green mb-2">Payment Status</div>
              <div className="row">
                <div className="col-sm-12 col-md-4 light-italic">
                  <p>
                    Balance: <span> {this.state.payment}</span>
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
                  <i className="fa fa-file-alt icon" />{" "}
                </span>
                Infractions
              </div>
              <hr />
              {this.state.infractions.map(infraction => (
                  <div className="row my-2">
                    <div className="col-sm-10">
                      <p>{infraction.description}</p>
                    </div>
                    <div className="col-sm-2">
                      <i className="fa fa-exclamation-triangle text-danger icon" />
                    </div>
                  </div>
              ))}
              <AddInfraction update={this.update} id={this.props.match.params.resId}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Infractions;
