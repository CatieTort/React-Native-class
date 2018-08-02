import React from 'react';
import {Text, View, Modal} from 'react-native'
import { Card } from './Card'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ({children, visible, onAccept, onDecline}) => {
	const {containerStyle, textStyle, cardSectionStyle} = styles;
	return (
		<Modal
			visible={visible}
			transparent
			animationType="slide"
			onRequestClose={() => {}}
		>
			<View style={containerStyle}>
				<Card style={{marginLeft: 20, marginRight: 20}}>
					<CardSection style={cardSectionStyle}>
						<Text style={textStyle}>{children}</Text>
					</CardSection>
					<CardSection style={{backgroundColor: '#fff',paddingBottom: 15}}>
						<Button style={{backgroundColor: 'green'}} onPress={onAccept}>Yes</Button>
						<Button style={{backgroundColor: 'red'}} onPress={onDecline}>No</Button>
					</CardSection>
				</Card>
			</View>
		</Modal>
	)
}

const styles = {
	cardSectionStyle: {
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	textStyle: {
		fontSize: 18,
		flex: 1,
		textAlign: 'center',
		lineHeight: 30,
		paddingLeft: 25,
		paddingRight: 25,
		paddingBottom: 15,
		paddingTop: 15
	},
	containerStyle: {
		backgroundColor: 'rgba(0,0,0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center',
		paddingTop: 15
	}
}

export { Confirm }
