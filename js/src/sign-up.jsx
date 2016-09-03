import React from 'react';
import ReactDOM from 'react-dom';
var Input = require('./input.jsx');

var CreateSignUp = React.createClass({
  getInitialState: function () {
    return {
      email: '',
      fName: '',
      lName: ''
    }
  },

  saveAndContinue: function (e) {
    e.preventDefault();

    jQuery.ajax({
      url: 'https://heroku-mailgun.herokuapp.com/mailchimp-api/list?first=' + 
      this.state.fName +
      '&last=' +
      this.state.lName +
      '&email=' +
      this.state.email,
      dataType: "jsonp",
      jsonpCallback: "localJsonpCallback"
    });
    
    function localJsonpCallback(j){
      if (!json.Error) {
        console.log('success mailchimp');
      }
      else {
        console.log('fail mailchimp');
      }
    }
    
    var data = {
      email: this.state.email,
      lName: this.state.lName,
      fName: this.state.fName
    }
    this.setState({
      email: '',
      fName: '',
      lName: ''
    });
    jQuery(".modal-state#modal-3").prop("checked", true).change();
    console.log('Sign Up:' + JSON.stringify(data));
  },

  handlelNameInput: function(event) {
    this.setState({
      lName: event.target.value
    })
  },

  handlefNameInput: function(event) {
    this.setState({
      fName: event.target.value
    })
  },
  
  handleEmailInput: function(event){
    this.setState({
      email: event.target.value
    });
  },

  validateEmail: function (event) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  },

  render: function() {
    return (

      <div class="jsx-wrapper">
      <h3>Sign up to receive emails about upcoming events</h3>
      <form onSubmit={this.saveAndContinue}>
          
        <div id="contact-contain">

          <Input 
            text="First Name" 
            placeholder="First Name" 
            ref="fName"
            value={this.state.fName}
            onChange={this.handlefNameInput} 
          /> 
          
          <Input 
            text="Last Name" 
            placeholder="Last Name" 
            ref="lName"
            value={this.state.lName}
            onChange={this.handlelNameInput} 
          /> 

          <Input 
            text="Email Address" 
            placeholder="Email Address" 
            ref="email"
            type="text"
            value={this.state.email}
            onChange={this.handleEmailInput} 
          />

          <button 
            type="submit" 
            className="submit-button">
            Sign Up
          </button>
          
        </div>

      </form>
      </div>

    );
  }
    
});

// Render! why
ReactDOM.render(<CreateSignUp />, document.getElementById('jsx-sign-up'));