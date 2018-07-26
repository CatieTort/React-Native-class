import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import BlankSection from './BlankSection'
import Button from './Button'

const AlbumDetail = ({album}) => {
	const {title, artist, thumbnail_image, image, url} = album
	const {headerText, thumbnailStyle, albumTitle, artistText, albumCover, btn } = styles
	return (
		<Card>
			<CardSection>
				<View>
					<Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
				</View>
				<View style={headerText}>
					<Text style={albumTitle}>{title}</Text>
					<Text style={artistText}>{artist}</Text>
				</View>
			</CardSection>

			<BlankSection>
			 	<Image style={albumCover} source={{uri: image}}/>
			</BlankSection>

			<BlankSection style={btn}>
				<Button onPress={() => Linking.openURL(url)}>
					Purchase
				</Button>
			</BlankSection>
		</Card>
	)

};

const styles = {
	headerText: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		height: 50,
		width: 50,
		borderRadius: 8,
		margin: 10,
		marginTop: 5
	},
	albumTitle: {
		fontWeight: 'bold',
		color: '#ff007f',
		fontSize: 18,
		paddingTop: 5,
	},
	artistText: {
		fontSize: 13,
		color: '#007fff'
	},
	albumCover: {
		height: 350,
		flex: 1,
		width: null
	},
	btn: {
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		overflow: "hidden"
	}
}

export default AlbumDetail
