import React, { Component } from "react";
import {Link} from "react-router-dom"
import "./dashboard.css";
import AddRes from "../../components/AddResident/AddRes"
import API from "../../utils/API"

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this)
  }
  state= {
    updated: 0,
    residents: []
  }
  componentDidMount() {
    API.list(this.props.id)
      .then(res => this.setState({residents: res.data.residents}))
      .catch(err => console.log(err))
  }

  componentDidUpdate() {
    API.list(this.props.id)
      .then(res => {this.setState({residents: res.data.residents})})
      .catch(err => console.log(err))
  }
  update() {
    this.setState({updated: this.state.updated+1})
  }

  send = () => {
    API.send()
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  
  
  render() {
    return (
      <div className="row">
      <div className="title">
            Residents List | 
            <span>
              <i className="fa fa-home text-white titleIcon ml-1"/>
            </span>
          </div>
        <div className="card col-12">
          <div className="card-header mt-3 text-center" id="cardHeader">RESIDENTS</div>
          <div className="card-body">
            <AddRes update={this.update}/>
            {this.props.recipients.length > 0 &&
            <Link to="/message" className="btn btn-sm mb-2 btn-primary">Send Message</Link>
            }
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="thead">Select</th>
                  <th scope="col" className="thead">Name</th>
                  <th scope="col" className="thead">Address</th>
                  <th scope="col" className="thead">Infraction</th>
                  <th scope="col" className="thead">Fee</th>
                  <th scope="col" className="thead">Info Confirmed</th>
                </tr>
              </thead>
              <tbody>
                {this.state.residents.map(resident =>(  
                  <tr key={resident._id}>
                    <td> <input type="checkbox" aria-label="Checkbox for following text input" name={resident.email} onClick={this.props.handleCheckboxChange}/> </td>
                    <td><Link to={"/res-info/"+resident._id}>{resident.name}</Link></td>
                    <td> {resident.address} </td>
                <td>{resident.infractions.length>0 && (<i className="fa fa-exclamation-triangle text-danger icon"></i>)}</td>
                    <td>{resident.payment > 0 ? (<i className="fa fa-file-invoice-dollar text-danger icon"></i>):(<i className="fa fa-file-invoice-dollar text-success icon"></i>)}</td>
                    <td><i className="fa fa-file-alt text-success icon"></i></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
