import { StyleSheet, Text, View } from 'react-native';

export const Explore = () => {
	return (
		<View style={styles.container}>
			<Text>Explore</Text>
		</View>
	);
};

export default Explore;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
