import { useEffect } from 'react';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
	const navigation = useNavigation();

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('FirstOnBoarding' as never);
		}, 3500);
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar barStyle={'light-content'} />
			<ImageBackground
				style={styles.backgroundImage}
				source={require('@/assets/images/vietnam-road.png')}
			/>

			<Animated.View
				style={styles.contentContainer}
				entering={FadeIn.delay(500).duration(800)}
			>
				<Animated.Text
					style={styles.appName}
					entering={FadeInDown.delay(800).duration(1000)}
				>
					Journify
				</Animated.Text>
				<Animated.Text
					style={styles.slogan}
					entering={FadeInDown.delay(1300).duration(1000)}
				>
					Life is a journey, enjoy the ride
				</Animated.Text>
			</Animated.View>
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
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
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
