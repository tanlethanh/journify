import { ImageBackground, StatusBar, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import { Diary, NextButton, PlaceTag } from './components';

export const ThirdOnBoarding = () => {
	const navigation = useNavigation();

	const handlePressNext = () => {
		navigation.navigate('MainNavigator' as never);
	};
	return (
		<View style={styles.container}>
			<StatusBar barStyle={'light-content'} />
			<ImageBackground
				style={styles.backgroundImage}
				source={require('@/assets/images/vietnam-field.png')}
			/>

			<View style={styles.mainContainer}>
				<PlaceTag title="Phu Son Mountain" />
				<Diary />
			</View>

			<Animated.View
				style={styles.contentContainer}
				entering={FadeIn.delay(500).duration(800)}
			>
				<Animated.Text
					style={styles.title}
					entering={FadeInDown.delay(800).duration(1000)}
				>
					Keep
				</Animated.Text>
				<Animated.Text
					style={styles.description}
					entering={FadeInDown.delay(1300).duration(1000)}
				>
					Keep of all the journeys in your memory.
				</Animated.Text>

				<Animated.View entering={FadeInDown.delay(3000).duration(800)}>
					<NextButton
						style={{ alignSelf: 'flex-end' }}
						onPress={handlePressNext}
					/>
				</Animated.View>
			</Animated.View>
		</View>
	);
};

export default ThirdOnBoarding;

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
		right: 60,
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
		height: 220,
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
