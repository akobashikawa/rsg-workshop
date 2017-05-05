import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		};

		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler(event) {
		this.setState({
			name: event.target.value
		});
	}

  render() {
    return (
    	<div className="Hello">
    		<input type="text" onChange={this.changeHandler} />
      	<h1>Hello {this.state.name}!</h1>
    	</div>
    );
  }
}

export default Hello;