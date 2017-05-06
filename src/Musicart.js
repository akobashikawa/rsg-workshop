import React, { Component } from 'react';
import NameInput from './NameInput';
import Albums from './Albums';

class Musicart extends Component {
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
			<div className="Musicart">
				<NameInput
					onClick={this.clickHandler}
					placeholder="Artist Name"
					buttonlabel="Search"
				/>

				{this.state.name && (
					<Albums artist={this.state.name} />
				)}
			</div>
		);
	}
}

export default Musicart;