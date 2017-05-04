import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

	state = { albums: [] }; //Just a plain JS object of internal state

	componentWillMount() {
		// Retrieve data and will call setState() and render() again once done
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albums: response.data })); 
	}

	// Helper method to generate Albums.
	// map() applies fat arrow function to each item in array
	renderAlbumns() {
		return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
	}
	
	// since referring JS function
	render() {
		return (
			<View>
				{this.renderAlbumns()} 
			</View>
		);
	}
}

export default AlbumList;
