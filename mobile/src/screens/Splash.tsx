import { useEffect, useState } from 'react';
import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../utils';

const Splash = () => {
	const navigation = useNavigation();
	const { initializing, user } = useAuth();
	const [waiting, setWaiting] = useState(true);

	useEffect(() => {
		if (waiting || initializing) return;
		if (user) {
			navigation.navigate('MainNavigator' as never);
		} else {
			navigation.navigate('SignIn' as never);
		}
	}, [initializing, user, waiting]);

	useEffect(() => {
		const timer = setTimeout(() => setWaiting(false), 1000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar barStyle={'light-content'} />
			<ImageBackground
				style={styles.backgroundImage}
				source={require('@/assets/images/vietnam-road.png')}
			/>

			<View style={styles.contentContainer}>
				<Animated.Text
					style={styles.appName}
					entering={FadeInDown.duration(1000)}
				>
					Journify
				</Animated.Text>
				<Animated.Text
					style={styles.slogan}
					entering={FadeInDown.delay(1000).duration(1000)}
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
		flex: 1,
		resizeMode: 'cover',
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
