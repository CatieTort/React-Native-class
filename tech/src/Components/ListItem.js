import React, { Component } from 'react'
import {
	Text,
	TouchableWithoutFeedback,
	View,
	LayoutAnimation
	} from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
	componentWillUpdate(){
		LayoutAnimation.easeInEaseOut();
	}

	renderDesc(){
		const {library, expanded} = this.props
		const {descStyle} = styles;
		console.log(expanded)
		if(expanded){
			return (
				<Text style={descStyle}>{library.item.description}</Text>
			)
		}
	}

	render(){
		const {titleStyle} = styles;
		const { id, title } = this.props.library.item;

		return(
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDesc()}
				</View>
			</TouchableWithoutFeedback>
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
		color: "#666666",
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 20,
		paddingRight: 20,
		lineHeight: 20
	}
}

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.item.id;
	return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
