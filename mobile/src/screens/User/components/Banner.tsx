import { type FC, useEffect } from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { useIsFocused } from '@react-navigation/native';

type Props = {
	style?: ViewStyle;
};

export const Banner: FC<Props> = ({ style }) => {
	const isFocused = useIsFocused();
	const y = useSharedValue(-10);
	const animatedStyle = useAnimatedStyle(() => {
		return {
			opacity: interpolate(y.value, [-10, 0], [0, 1]),
			transform: [
				{
					translateY: y.value,
				},
			],
		};
	});

	useEffect(() => {
		y.value = withTiming(isFocused ? 0 : -10, { duration: 600 });
	}, [isFocused]);

	return (
		<View style={[style, styles.container]}>
			<Animated.Text style={[styles.text, animatedStyle]}>
				{'Hi Journify'}
			</Animated.Text>
		</View>
	);
};

export default Banner;

const styles = StyleSheet.create({
	container: {
		height: 100,
		backgroundColor: '#7e7e8a',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#FFFFFF',
		fontWeight: '800',
		fontSize: 20,
	},
});
