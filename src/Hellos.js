import React, { Component } from 'react';
import NameButtons from './NameButtons';
import Hello from './Hello';

class Hellos extends Component {
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
			<div className="Hellos">
				<NameButtons onClick={this.clickHandler} />

				{this.state.name && (
					<Hello name={this.state.name} />
				)}
			</div>
		);
	}
}

export default Hellos;