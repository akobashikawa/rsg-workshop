import React, { Component } from 'react';

import './Albums.css';

class Albums extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

	}

	updateItems(artist) {
		const url = `https://api.spotify.com/v1/search?q=artist:${artist}&type=album`;
		fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					items: json.albums.items
				}, function() {
					console.log(this.state.items);
				});
			})
	}

	componentWillMount() {
		this.updateItems(this.props.artist);
	}

	componentWillReceiveProps(nextProps) {
		this.updateItems(nextProps.artist);
	}

	render() {

		if (this.state.items.length === 0) {
			return (
				<div className="Albums">
					...
				</div>
			);
		}

		const artist = this.state.items[0].artists[0].name;

		return (

			<div className="Albums">
				
				<h1>Albumes de {artist}</h1>

				{this.state.items.map(album => (
					<div className="album" key={album.id}>

						<h2>{album.name}</h2>
						<img src={album.images[1].url} alt="album cover"/>
					</div>
				))}
			</div>
		);
	}
}

export default Albums;