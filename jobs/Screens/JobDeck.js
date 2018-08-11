import React, { Component } from 'react'
import { LinearGradient, MapView } from 'expo'
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux'
import { View, Text, Platform } from 'react-native'
import Swipe from '../Components/Swipe'
import * as actions from '../actions'

class JobDeck extends Component {

	componentDidMount(){
		let jobs = this.props.jobs
		jobs.map((item) => {
			return this.props.fetchLatLog(item.location)
		})
	}

	renderCard(job, map){
		const jobRegion = {
			latitude: map.lat,
			longitude: map.lng,
			latitudeDelta: 0.045,
			longitudeDelta: 0.02
		}

		return (
			<Card>
				<View style={{height: 300, marginBottom: 10}}>
					<MapView
						initialRegion={jobRegion}
						scrollEnabled={false}
						style={{flex: 1}}
						cacheEnabled={Platform.OS === 'android' ? true : false }
					/>
				</View>
				<View style={{justifyContent: 'center'}}>
					<Text style={{ fontSize: 20, fontWeight: 'bold'}}>{job.title}</Text>
				</View>
				<View styles={styles.detailWrapper}>
					<Text style={{fontWeight: 'bold'}}>{job.company}</Text>
					<Text style={{fontStyle: 'italic'}}>{job.location}</Text>
				</View>
				<Text ellipsizeMode={'tail'} numberOfLines={10} >
					{job.description.replace(/(<([^>]+)>)/ig, "")}
				</Text>
			</Card>
		)
	};

	renderNoMoreCards(){
		return (
			<Card title='No More Jobs'></Card>
		)
	};



	render(){
		console.log('Jobs:', this.props.jobs)
		console.log('Map:', this.props.map)
		return (
			<LinearGradient colors={['#51dfe1','#22c1c3','#22c39d']} style={{ flex: 1}}>
			<View style={{marginTop: 40}}>
				<Swipe
					data={this.props.jobs}
					map={this.props.map}
					renderCard={this.renderCard}
					renderNoMoreCards={this.renderNoMoreCards}
				 />
			</View>
			</LinearGradient>
		)
	}
}

const mapStateToProps = ({ jobs, map}) => {
	return { jobs, map };
}

const styles = {
	detailWrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 10
	}
}

export default connect(mapStateToProps, actions)(JobDeck)
