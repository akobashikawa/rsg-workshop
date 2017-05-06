import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);

		this.submitHandler = this.submitHandler.bind(this);
	}

	submitHandler(event) {
		this.props.onClick(this.nameInput.value);
		event.preventDefault();
	}

  render() {
    return (
    	<div className="Input">
    		<form onSubmit={this.submitHandler}>
	    		<input type="text" ref={input => this.nameInput = input}/>
	    		<button>Hello</button>
    		</form>
    	</div>
    );
  }
}

export default Input;