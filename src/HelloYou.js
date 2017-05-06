import React, { Component } from 'react';
import NameInput from './NameInput';
import Hello from './Hello';

class HelloYou extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ''
		};

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(name) {
		this.setState({name});
	}

	render() {
		return (
			<div className="HelloYou">
				<NameInput onClick={this.clickHandler} />

				{this.state.name && (
					<Hello name={this.state.name} />
				)}
			</div>
		);
	}
}

export default HelloYou;