import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Card = ({ assistant }) =>
	<View key={assistant.personal.id} style={styles.card}>
		<Text style={{fontWeight: 'bold', fontSize: 20}}>{assistant.personal.name}</Text>
		<Text>{assistant.price.range.from}-{assistant.price.range.to}{assistant.price.currency}/h</Text>
		<Text style={{fontWeight: 'bold'}}>Duties</Text>
		{assistant.skills.duties.map((duty) => <Text key={assistant.personal.id+duty+'duty'}>{duty}</Text>)}
		<Text style={{fontWeight: 'bold'}}>Languages</Text>
		{assistant.skills.languages.map((lang) => <Text key={assistant.personal.id+lang+'lang'}>{lang}</Text>)}
	</View>

const styles = StyleSheet.create({
    card: {
			backgroundColor: '#fff',
			margin: 5,
			borderRadius: 3,
			minHeight: 50,
			padding: 10
		},
});

export default Card;