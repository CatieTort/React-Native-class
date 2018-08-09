import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions';

class Auth extends Component {

	componentDidMount(){
		this.props.facebookLogin();
		this.onAuthComplete(this.props);
	}

	componentWillReceiveProps(nextProps){
		this.onAuthComplete(nextProps);
	}

	onAuthComplete(props){
		if (props.token){
			this.props.navigation.navigate('map');
		}
	}

	render(){
		return (
			<View style={styles.container}>
				<Text style={{marginTop: 50}}>Auth</Text>
			</View>
		)
	}
}

const styles = {
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	}
}

const mapStateToProps = ({ auth }) => {
	return { token: auth.token }
}

export default connect(mapStateToProps, actions)(Auth);
