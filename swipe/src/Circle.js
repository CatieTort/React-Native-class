import React, { Component } from 'react'
import { View, Animated } from 'react-native'


class Circle extends Component {
	componentWillMount(){
		this.position = new Animated.ValueXY(0,0);
		Animated.spring(this.position, {toValue: {x:200, y:500 }
		}).start();
	}

	render(){
		const {circleStyle} = styles
		return (
			<Animated.View style={this.position.getLayout()}>
			<View style={circleStyle} />
			</Animated.View>
		)
	}
}

const styles = {
	circleStyle: {
		height: 70,
		width: 70,
		backgroundColor: 'aquamarine',
		borderRadius: 50
	}
}

export default Circle
