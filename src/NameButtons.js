import React, { Component } from 'react';

class NameButtons extends Component {
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(event) {
		const name = event.target.innerHTML;
		this.props.onClick(name);
	}

	render() {
		return (
			<div className="NameButtons">
				<button onClick={this.clickHandler}>Alice</button>
				<button onClick={this.clickHandler}>Beatrice</button>
				<button onClick={this.clickHandler}>Clarice</button>
				<button onClick={this.clickHandler}>Denisse</button>
				<button onClick={this.clickHandler}>Elisse</button>
			</div>
		);
	}
}

export default NameButtons;