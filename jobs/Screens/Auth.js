import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions';
import { LinearGradient } from 'expo';

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
			<LinearGradient colors={['#70dc70','#32cd32','#28a428']} style={styles.container}>
				<View  />
			</LinearGradient>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
}

const mapStateToProps = ({ auth }) => {
	return { token: auth.token }
}

export default connect(mapStateToProps, actions)(Auth);
