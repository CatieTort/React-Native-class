import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

	renderSlides(){
		return this.props.data.map((slide, index) => {
			return(
				<View
					style={[styles.slideStyle, {backgroundColor: slide.color}]}
					key={slide.text}
				>
					<Text style={styles.slideText}>{slide.text}</Text>
					{ (index === this.props.data.length - 1)?
						<Button
							title="Get Started"
							raised
							fontSize={20}
							color='#fff'
							backgroundColor='#bf35a7'
							rounded
							style={{marginTop: 20}}
							onPress={this.props.onComplete}
						/> : null }
				</View>
			)
		})
	}

	render(){
		return (
			<ScrollView
				horizontal
				pagingEnabled
			>
				{this.renderSlides()}
			</ScrollView>
		)
	}
}

const styles = {
	slideText: {
		fontSize: 30,
		textAlign: 'center',
		padding: 15,
		color: '#fff'
	},
	slideStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH
	}
}

export default Slides
