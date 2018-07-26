import React, {Component} from 'react'
import {ScrollView, View, Text} from 'react-native'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
	constructor(props){
		super(props)

		this.state = {
			albums: []
		}
	}

	componentDidMount(){
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then((res) =>
				res.json()
			)
			.then((data) =>
				this.setState({albums: data})
			)
			.catch((err) =>
				console.log('Error', err)
			)
	}

	showAlbums(){
		return this.state.albums.map(album => {
			return <AlbumDetail key={album.title} album={album} />
		})
	}

	render(){
		console.log(this.state)
		const {background, loadingText} = styles;
		if(this.state.albums.length <= 0){
			return (
				<View style={background}>
					<Text style={loadingText}>Loading ...</Text>
				</View>
			)
		} else {
			return (
				<ScrollView style={background}>
					{this.showAlbums()}
				</ScrollView>
			)
		}
	}
}

const styles = {
	background: {
		backgroundColor: '#e5ffcc',
		height: '100%'
	},
	loadingText: {
		marginTop: 50,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#007fff',
	}
}

export default AlbumList;
