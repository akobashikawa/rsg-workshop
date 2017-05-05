import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
  render() {
    return (
    	<div className="Hello">
      	<h1>Hello {this.props.name}!</h1>
    	</div>
    );
  }
}

export default Hello;