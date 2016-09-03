import React from 'react';
import ReactDOM from 'react-dom';

var Input = React.createClass({

  getInitialState: function(){

    return {
      focus: false,
      value: '',
      type: this.props.type,
    };
  },

  handleChange: function(event){
    this.setState({
      value: event.target.value
    });
    console.log(event.target.value);

    // call onChange method on the parent component for updating it's state
    if(this.props.onChange) {
      this.props.onChange(event);
    }
  },

  componentWillReceiveProps: function (newProps) {    
    // perform update only when new value exists and not empty  
    if(newProps.value) {
      if(newProps.value.length > 0) {
        this.setState({
          value: newProps.value
        });
      }   
    }
  },

  handleFocus: function () {
    this.setState({
      focus: true,
    });
  },

  handleBlur: function () {
    this.setState({
      focus: false
    });
  },

  mouseEnterError: function () {
  },


  render: function(){

    return (
      <div className="whatever">

        <label className="input_label" htmlFor={this.props.text}>
          <span className="label_text">{this.props.text}</span>
        </label>

        <input 
          //{...this.props}
          placeholder={this.props.placeholder} 
          className="input" 
          id={this.props.text}
          defaultValue={this.props.defaultValue} 
          value={this.state.value} 
          onChange={this.handleChange} 
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          autoComplete="off"
        />

      </div>
    );
  }
});

module.exports = Input;