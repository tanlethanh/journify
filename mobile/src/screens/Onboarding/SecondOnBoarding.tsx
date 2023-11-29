import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

import { NextButton, PlaceTag, SamplePost } from './components';

export const SecondOnboarding = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle={'light-content'} />
			<ImageBackground
				style={styles.backgroundImage}
				source={require('@/assets/images/mountain.png')}
			/>

			<View style={styles.mainContainer}>
				<PlaceTag title="Phu Son Mountain" />
				<SamplePost />
			</View>

			<Animated.View
				style={styles.contentContainer}
				entering={FadeIn.delay(500).duration(800)}
			>
				<Animated.Text
					style={styles.title}
					entering={FadeInDown.delay(800).duration(1000)}
				>
					Share
				</Animated.Text>
				<Animated.Text
					style={styles.description}
					entering={FadeInDown.delay(1300).duration(1000)}
				>
					Share your feeling to the world.
				</Animated.Text>

				<Animated.View entering={FadeInDown.delay(3000).duration(800)}>
					<NextButton style={{ alignSelf: 'flex-end' }} />
				</Animated.View>
			</Animated.View>
		</View>
	);
};

export default SecondOnboarding;

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
	mainContainer: {
		position: 'absolute',
		top: 40,
		left: 16,
		alignItems: 'flex-start',
		gap: 30,
	},
	contentContainer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		gap: 14,
		height: 260,
		padding: 16,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	title: {
		fontSize: 20,
		color: 'white',
		fontFamily: 'OldStandardTT-Bold',
	},
	description: {
		fontSize: 32,
		color: 'white',
		fontWeight: '300',
	},
});
