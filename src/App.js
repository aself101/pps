import React, { Component } from 'react';
import Modal from './components/Modal';
import Section from './components/Section';
import Section2 from './components/Section2';
import Parallax from './components/parallax';
import blocks from './components/data';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.send_email = this.send_email.bind(this);
    this.stopSubmit = this.stopSubmit.bind(this);
    this.state = {
      name: '',
      phone: '',
      email: '',
      location: '',
      services: [],
      description: ''
    };
  }
  stopSubmit(evt) {
    evt.preventDefault();
    return false;
  }
  send_email() {
    let data = this.state;
    $.ajax({
      type: 'GET',
      url: 'php/email.php',
      dataType: 'json',
      cache: false,
      data: { data },
      success: function(data) {
        console.log(data);
        Materialize.toast('Your request was sent!', 3000, 'userSuccess');
      },
      error: function(xhr, status, err) {
        console.error(xhr, status, err.toString());
      }
    });

  }
  onClick(evt) {
    evt.preventDefault();
    let name = `${$('#first_name').val()} ${$('#last_name').val()}`;
    let s = [];
    $("#services option:selected").each(function() {
      if ($(this).text() !== "")
        s.push($(this).text());
    });

    this.setState({
      name: name,
      phone: $('#phone').val(),
      email: $('#email').val(),
      location: $('#location option:selected').text(),
      description: $('#description').val(),
      services: s
    }, () => {
      this.send_email();
    });
    reset();

  }
  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br /><br />
              <div className="surround">
                <div className="pop-out">
                  <h1 className="header center text-lighten-2">Professional Property Services</h1>
                  <h5 className="center">A Big Island of Hawai'i Based Company</h5>
                </div>
                <div className="background1"></div>
              </div>

              <div className="row center">
                <h5 className="header col s12 light"></h5>
              </div>
              <div className="row center">
                <a href="#requestQuote" className="btn-large waves-effect waves-light teal lighten-1 modal-trigger">Request a Quote</a>
              </div>
              <Modal id={"requestQuote"} onClick={this.onClick} onSubmit={this.stopSubmit} />
            </div>
          </div>
          <div className="parallax"><img src="img/tools.jpg" alt="" /></div>
        </div>
        <Section />
        <Parallax img={"img/screwsdowelwasher.jpg"} />
        <Section2 />
        <Parallax img={"img/screwSelection.jpg"} />
      </div>
    );
  }
};

function reset() {
  document.getElementById('first_name').value = '';
  document.getElementById('last_name').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('email').value = '';
  document.getElementById('location').value = '';
  document.getElementById('description').value = '';
}
