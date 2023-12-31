import { StyleSheet, Text, View } from 'react-native';

export const Following = () => {
	return (
		<View style={styles.container}>
			<Text>Following</Text>
		</View>
	);
};

export default Following;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
