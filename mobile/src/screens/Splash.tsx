import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const Splash = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle={'light-content'} />
			<ImageBackground
				style={styles.backgroundImage}
				source={require('@/assets/images/vietnam-road.jpg')}
			/>

			<View style={styles.contentContainer}>
				<Animated.Text
					style={styles.appName}
					entering={FadeInDown.duration(800)}
				>
					Journify
				</Animated.Text>
				<Animated.Text
					style={styles.slogan}
					entering={FadeInDown.delay(500).duration(800)}
				>
					Life is a journey, enjoy the ride
				</Animated.Text>
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
