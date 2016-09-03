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

    // call onChange method on the parent component for updating it's state
    if(this.props.onChange) {
      this.props.onChange(event);
    }
  },

  componentWillReceiveProps: function (newProps) {    
    // perform update only when new value exists and not empty  
    this.setState({
      value: newProps.value
    });
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
    );
  }
});

module.exports = Input;