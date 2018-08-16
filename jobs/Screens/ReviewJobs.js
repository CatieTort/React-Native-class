import React, { Component } from 'react'
import { LinearGradient, MapView } from 'expo'
import { View, Text, Platform, ScrollView, Linking } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ReviewJobs extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Saved Jobs',
			headerTitleStyle: {color:'#fff'},
			headerRight: (
				<Button
					backgroundColor='#bf35a7'
					color='#fff'
					title="Settings"
					fontSize={17}
					onPress={() => navigation.navigate('settings')}
				/>
			),
			headerStyle: {
				marginTop: Platform.OS === 'android' ? 24 : 0,
				backgroundColor: '#5f6060'
			}
		}
	}

	componentDidMount(){
		let coor = this.props.likedJob
		coor.map((item) => {
			return this.props.fetchLatLog(item.location)
		})
	}

	formatDate(date){
		let updatedDate = date.split(" ");
		return `${updatedDate[1]} ${updatedDate[2]}, ${updatedDate[5]}`
	}

	renderlikedJobs(route){
		if(this.props.likedJob.length === 0){
			return (
				<Card>
				<View>
					<Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 20}}>No Jobs Saved</Text>
				<Button
					title="Back to Map"
					backgroundColor='#bf35a7'
					color='#fff'
					onPress={() => route.navigate('map')}
				/>
				</View>
				</Card>
			)
		}
		return this.props.likedJob.map(job => {
			const { title, id, company, created_at, how_to_apply} = job
			const region = {
				latitude: this.props.map.lat,
				longitude: this.props.map.lng,
				latitudeDelta: 0.045,
				longitudeDelta: 0.02
			}

			return (
				<Card title={title} key={id}>
				<View style={{height: 200, marginBottom: 10}}>
					<MapView
						initialRegion={region}
						scrollEnabled={false}
						style={{flex: 1}}
						cacheEnabled={Platform.OS === 'android'}
					/>
					</View>
					<View>
						<View style={styles.detailWrapper}>
							<Text style={[styles.textDetail, {textAlign: 'left', paddingLeft: 10, fontWeight: 'bold', fontSize: 18}]}>{company}</Text>
							<Text style={styles.textDetail}>Posted: {this.formatDate(created_at)}</Text>
						</View>
							<Button
								title="Apply Now!"
								backgroundColor='#bf35a7'
								color='#fff'
								onPress={() => Linking.openURL(how_to_apply.replace(/(<([^>]+)>)/ig, ""))}
							/>
					</View>
				</Card>
			)
		})
	}

	render(){
		const { navigation } = this.props
		return (
			<LinearGradient colors={['#51dfe1','#22c1c3','#22c39d']} style={{ flex: 1}}>
				<ScrollView>
					{this.renderlikedJobs(navigation)}
				</ScrollView>
			</LinearGradient>
		)
	}
}

const styles = {
	detailWrapper: {
		flex: 1,
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	textDetail: {
		width: '50%',
		paddingTop: 5,
		paddingBottom: 5,
		textAlign: 'center'
	}
}

function mapStateToProps(state,){
	return { likedJob: state.likedJob, map: state.map };
}

export default connect(mapStateToProps, actions)(ReviewJobs)
