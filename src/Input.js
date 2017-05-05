import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);

		this.changeHandler = this.changeHandler.bind(this);
	}

	changeHandler(event) {
		this.props.onChange(event.target.value);
	}

  render() {
    return (
    	<div className="Input">
    		<input type="text" onChange={this.changeHandler} />
    		<button>Hello</button>
    	</div>
    );
  }
}

export default Input;