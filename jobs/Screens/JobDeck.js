import React, { Component } from 'react'
import { LinearGradient, MapView } from 'expo'
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Swipe from '../Components/Swipe'
import * as actions from '../actions'

class JobDeck extends Component {

	// componentDidMount(){
	// 	this.props.fetchLatLog(job.location)
	// }

	renderCard(job){
		return (
			<Card title={job.title}>
				<View styles={styles.detailWrapper}>
					<Text>{job.company}</Text>
					<Text>{job.location}</Text>
				</View>
				<Text>
					{job.description.replace(/(<([^>]+)>)/ig, "")}
				</Text>
			</Card>
		)
	}



	render(){
		console.log('Jobs:', this.props.jobs)
		return (
			<LinearGradient colors={['#51dfe1','#22c1c3','#22c39d']} style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
			<View>
				<Swipe
					data={this.props.jobs}
					renderCard={this.renderCard}
				 />
			</View>
			</LinearGradient>
		)
	}
}

const mapStateToProps = ({ jobs }) => {
	return { jobs };
}

const styles = {
	detailWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 10
	}
}

export default connect(mapStateToProps, actions)(JobDeck)
