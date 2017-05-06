import React, { Component } from 'react';

class NameInput extends Component {
	constructor(props) {
		super(props);

		this.submitHandler = this.submitHandler.bind(this);
	}

	submitHandler(event) {
		const name = this.nameInput.value;
		this.props.onClick(name);
		event.preventDefault();
	}

	render() {
		return (
			<div className="NameInput">
				<form onSubmit={this.submitHandler}>
					<input type="text" placeholder={this.props.placeholder || "Your name"} ref={input => this.nameInput = input}/>
					<button>{this.props.buttonlabel || "Hello"}</button>
				</form>
			</div>
		);
	}
}

export default NameInput;