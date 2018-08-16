import React, { Component } from 'react'
import { LinearGradient, MapView } from 'expo'
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text, Platform } from 'react-native'
import Swipe from '../Components/Swipe'
import * as actions from '../actions'

class JobDeck extends Component {

	state = {
		region: {
			latitude: 0,
			longitude: 0,
			latitudeDelta: 0.65,
			longitudeDelta: 0.48
		}
	}

	componentDidMount(){
		if(this.props.jobs.length < 0){
			let jobs = this.props.jobs
			jobs.map((item) => {
				return this.props.fetchLatLog(item.location)
			})
		}
	}

	formatDate = (date) => {
		let updatedDate = date.split(" ");
		return `${updatedDate[1]} ${updatedDate[2]}, ${updatedDate[5]}`
	}

	renderCard(job, map){

		const jobRegion = {
					latitude: map.lat,
					longitude: map.lng,
					latitudeDelta: 0.045,
					longitudeDelta: 0.02
				}

		const date = 	 job.created_at.split(" ");

		return (
			<Card title={job.title} dividerStyle={{marginBottom: 10, borderBottomWidth: 2, borderColor: '#22c1c3'}}>
				<View style={{height: 300, marginBottom: 10}}>
					<MapView
						region={jobRegion ? jobRegion : this.state.region}
						scrollEnabled={false}
						style={{flex: 1}}
						cacheEnabled={Platform.OS === 'android'}
					/>
				</View>
				<View style={styles.detailWrapper}>
					<Text style={{fontWeight: 'bold', fontSize: 18}}>{job.company}</Text>
					<Text style={{fontStyle: 'italic'}}>{job.location}</Text>
				</View>
				<View style={{alignSelf: 'flex-end'}}>
					<Text style={{fontStyle: 'italic'}}>Posted: {`${date[1]} ${date[2]}, ${date[5]}`}</Text>
				</View>
					<Text ellipsizeMode={'tail'} numberOfLines={10} >
						{job.description.replace(/(<([^>]+)>)/ig, "")}
					</Text>

			</Card>
		)
	};

	renderNoMoreCards = () => {
		return (
			<Card title='No More Jobs'>
				<Button
					large
					title="Search Again"
					backgroundColor='#bf35a7'
					color='#fff'
					icon={{name: 'search'}}
					onPress={() => this.props.navigation.navigate('map')}
				/>
			</Card>
		)
	};



	render(){
		// console.log('Jobs:', this.props.jobs)
		// console.log('Map:', this.props.map)
		const { navigation } = this.props
		if(this.props.jobs.length === undefined){
			return (
				<LinearGradient colors={['#51dfe1','#22c1c3','#22c39d']} style={{ flex: 1}}>
				<View style={{marginTop: 40}}>
					<Card>
						<View>
							<Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 20}}>Please search a location on the map to view jobs</Text>
							<Button
								title="Back to Map"
								backgroundColor='#bf35a7'
								color='#fff'
								onPress={() => navigation.navigate('map')}
							/>
						</View>
					</Card>
				</View>
				</LinearGradient>
			)
		}else{
			return (
				<LinearGradient colors={['#51dfe1','#22c1c3','#22c39d']} style={{ flex: 1}}>
				<View style={{marginTop: 40}}>
					<Swipe
						data={this.props.jobs}
						map={this.props.map}
						navigation={navigation}
						renderCard={this.renderCard}
						renderNoMoreCards={this.renderNoMoreCards}
						onSwipeRight={job => this.props.likeJob(job)}
					 />
				</View>
				</LinearGradient>
			)
		}
	}
}

const mapStateToProps = ({ jobs, map}) => {
	return { jobs, map };
}

const styles = {
	detailWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		marginBottom: 15
	}
}

export default connect(mapStateToProps, actions)(JobDeck)
