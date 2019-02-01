import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API"

class Message extends Component {
    state ={
        subject: "",
        content: "",
        redirect: false
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    formSubmit = event => {
        event.preventDefault();
        if(this.state.subject.length>0 && this.state.content.length>0){
            API.send({subject: this.state.subject, content: this.state.content, recipients: this.props.recipients})
            .then(res => {console.log(res)
            this.setState({redirect: true})})
            .catch(err => console.log(err))
        }

    }
    render() {
        if (this.state.redirect==true){
            return(
                <Redirect to = "/"/>
            )
        }
        else{
        return (
            <div className="card col-12 pb-3 ">
            <div className="card-header mt-3 text-center bg-secondary text-white" >MESSAGE</div>
            <form className="mt-2">
                  <div className="form-group">
                    <label className="text-left" id="label" htmlFor="inputName">Subject:</label>
                    <input
                      className="form-control"
                      placeholder="Subject"
                      type="text"
                      id="inputName"
                      name="subject"
                      onChange={this.handleInputChange}
                      value={this.state.subject}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputName">Content:</label>
                    <textarea
                      className="form-control"
                      placeholder="Content"
                      type="textArea"
                      id="inputName"
                      name="content"
                      onChange={this.handleInputChange}
                      rows="10"
                      value={this.state.content}
                    />
                  </div>
                  <button className="btn btn-primary" onClick={this.formSubmit}>Submit</button>
                </form>
                </div>
        )
        }
    }
}

export default Message;