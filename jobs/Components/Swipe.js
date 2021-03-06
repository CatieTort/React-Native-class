import React, { Component } from 'react'
import {
	View,
	Animated,
	PanResponder,
	Dimensions,
	LayoutAnimation,
	UIManager,
	Platform
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;


class Swipe extends Component {
	static defaultProps = {
		onSwipeRight: () => {},
		onSwipeLeft: () => {}
	}

	constructor(props){
		super(props)

		const position = new Animated.ValueXY();
		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({x: gesture.dx, y: gesture.dy})
			},
			onPanResponderRelease: (event, gesture) => {
				if(gesture.dx > SWIPE_THRESHOLD){
					this.forceSwipe('right');
				} else if (gesture.dx < -SWIPE_THRESHOLD){
					this.forceSwipe('left');
				}else{
					this.resetPosition();
				}
			}
		});

		this.state = { panResponder, position, index: 0 }
	}

	componentWillUpdate(){
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		LayoutAnimation.spring();
	}

	forceSwipe(direction){
		let width
		if(direction === 'right'){
			width = SCREEN_WIDTH
		}else {
			width = -SCREEN_WIDTH
		}
		Animated.timing(this.state.position, {
			toValue: {x: width, y: 0 },
			duration: 250
		}).start(() => this.onSwipeComplete(direction));
	}

	onSwipeComplete(direction){
		const { onSwipeLeft, onSwipeRight, data } = this.props;
		const item = data[this.state.index]

		direction ==='right'? onSwipeRight(item) : onSwipeLeft(item);
		this.state.position.setValue({x: 0, y: 0})
		this.setState({index: this.state.index + 1})
	}

	resetPosition(){
		Animated.timing(this.state.position, {
			toValue: {x: 0, y: 0},
			duration: 200
		}).start();
	}

	getCardStyle(){
		const { position } = this.state
		const rotate = position.x.interpolate({
			inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
			outputRange: ['-50deg', '0deg', '50deg']
		});

		return {
			...position.getLayout(),
			transform: [{ rotate }]
		}
	}

	renderCards(){
		const { index } = this.state
		const { map } = this.props
		// console.log( "map in cards:", map)

		if(index >= this.props.data.length){
			return this.props.renderNoMoreCards()
		}

		const deck = this.props.data.map((item, i) => {
			if(i < index){
				return null
			}

			if(i === index){
				return (
					<Animated.View
						key={item.id}
						style={[this.getCardStyle(), styles.cardStyle, {zIndex: i * -1}]}
						{...this.state.panResponder.panHandlers}
					>
						{this.props.renderCard(item, map)}
					</Animated.View>
				)
			}
				return (
					<Animated.View
						key={item.id}
						style={[styles.cardStyle, {zIndex: i * -1, top: 10 * (i - index)}]}
					>
						{this.props.renderCard(item, map)}
					</Animated.View>
				)
		})
		return Platform.OS === 'android'? deck.reverse() : deck;
	}

		render (){
			return (
				<View>
					{this.renderCards()}
				</View>
			)
		}
	}



export default Swipe


const styles = {
	cardStyle: {
		position: 'absolute',
		width: SCREEN_WIDTH
	}
}
