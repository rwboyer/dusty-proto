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
    console.log('Thanks.' + JSON.stringify(data));
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
      <div className="create_signup_screen">

        <div className="create_signup_form">
          <h1>Create account</h1>
          <form onSubmit={this.saveAndContinue}>

            <Input 
              text="Email Address" 
              placeholder="Email Address" 
              ref="email"
              type="text"
              value={this.state.email}
              onChange={this.handleEmailInput} 
            />

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

            <button 
              type="submit" 
              className="button button_wide">
              CREATE ACCOUNT
            </button>

          </form>

        </div>

      </div>
    );
  }
    
});

// Render! why
ReactDOM.render(<CreateSignUp />, document.getElementById('jsx'));