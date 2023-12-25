import { StyleSheet, Text, View } from 'react-native';

export const Homepage = () => {
	return (
		<View style={styles.container}>
			<Text>HomePage</Text>
		</View>
	);
};

export default Homepage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
