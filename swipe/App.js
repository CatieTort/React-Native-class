import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './src/Deck';
import { Card, Button } from 'react-native-elements';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class App extends React.Component {

	getData(){
		return (
			<Deck
				data={DATA}
				renderCard={this.renderCard}
				renderNoMoreCards={this.renderNoMoreCards}
			/>
		)
	}

	renderCard(item){
		return (
			<Card
				key={item.id}
				title={item.text}
				image={{uri: item.uri}}
				containerStyle={{borderColor: '#7f7f7f'}}
				wrapperStyle={{backgroundColor: '#c5ede3'}}
			>
				<Text style={{marginBottom: 10}}>I can customize you!</Text>
				<Button
					backgroundColor="teal"
					title="View Now"
				/>
			</Card>
		)
	}

	renderNoMoreCards(){
		return (
			<Card title='All Done!'
				dividerStyle={{display: 'none'}}
				wrapperStyle={{backgroundColor: '#c5ede3'}}
				containerStyle={{borderColor: '#7f7f7f', backgroundColor: '#c5ede3'}}
			>
				<Text style={{marginBottom: 10, textAlign: 'center'}}>
					You have reached the end!
				</Text>
				<Button
					backgroundColor="teal"
					title="Get More!"
				/>
			</Card>
		)
	}

  render() {
    return (
      <View style={styles.container}>
        {this.getData()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
	paddingTop: 20
  },
});
