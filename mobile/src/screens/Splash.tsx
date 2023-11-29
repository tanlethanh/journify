import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Splash = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.backgroundImage}
				source={require('@/assets/images/vietnam-road.jpg')}
			/>

			<View style={styles.contentContainer}>
				<Text style={styles.appName}>Journify</Text>
				<Text style={styles.slogan}>Life is a journey, enjoy the ride</Text>
			</View>
		</View>
	);
};

export default Splash;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImage: {
		resizeMode: 'cover',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	contentContainer: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 6,
	},
	appName: {
		fontSize: 48,
		color: 'white',
		fontFamily: 'OldStandardTT-Bold',
	},
	slogan: {
		fontSize: 18,
		color: 'white',
	},
});
