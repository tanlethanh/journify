import { StyleSheet, Text, View } from 'react-native';

export const ForYou = () => {
	return (
		<View style={styles.container}>
			<Text>ForYou</Text>
		</View>
	);
};

export default ForYou;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
