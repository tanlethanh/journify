import { StyleSheet, Text, View } from 'react-native';

export const User = () => {
	return (
		<View style={styles.container}>
			<Text>User</Text>
		</View>
	);
};

export default User;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
