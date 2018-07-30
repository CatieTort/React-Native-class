import React, { Component } from 'react'
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
	render(){
		const {titleStyle, descStyle} = styles;
		return(
			<CardSection>
				<Text style={titleStyle}>
					{this.props.library.item.title}
				</Text>
			</CardSection>
		)
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,
		color: "#464646",
		fontWeight: "bold"
	},
	descStyle: {
		fontSize: 15,
		color: "#666666"
	}
}

export default ListItem;
