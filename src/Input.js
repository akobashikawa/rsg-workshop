import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.props.onClick(this.nameInput.value);
	}

  render() {
    return (
    	<div className="Input">
    		<input type="text" ref={input => this.nameInput = input}/>
    		<button onClick={this.clickHandler}>Hello</button>
    	</div>
    );
  }
}

export default Input;