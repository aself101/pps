import React, { Component } from 'react';
import { Select, SelectMultiple, Input } from './Inputs';
import { services } from './data';
import { locations } from './data';
// "requestQuote"

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.stopSubmit = this.stopSubmit.bind(this);
  }
  stopSubmit(evt) {
    evt.preventDefault();
    return false;
  }
  render() {
    return (
      <div id={this.props.id} className="modal modal-fixed-footer">
      <form onSubmit={this.stopSubmit} className="col s12" id="myForm" >
        <div className="modal-content">
          <center>
            <h4 id="contact">Contact Form</h4>
          </center>
          <div className="container">
            <div className="row">
              <div className="row">
                <Input type={"text"} id={"first_name"} label={"First Name"} />
                <Input type={"text"} id={"last_name"} label={"Last Name"} />
              </div>
              <div className="row">
                <Input type={"text"} id={"phone"} label={"Phone"} />
                <Input type={"text"} id={"email"} label={"Email"} />
              </div>
              <div className="row">
                <SelectMultiple id={"services"} options={services} label={"Services Offered"} />
                <Select id={"location"} options={locations} label={"Island Location"} />
              </div>
              <div className="row">
                <Input type={"text"} id={"description"} label={"Description"} />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a href="" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.props.onClick}>Send Request</a>
        </div>
      </form>
      </div>
    );
  }
};
