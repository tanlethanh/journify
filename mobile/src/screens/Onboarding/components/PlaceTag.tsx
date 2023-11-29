import type { FC } from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

interface Props {
	title: string;
	style?: ViewStyle;
}

export const PlaceTag: FC<Props> = ({ title, style }) => {
	return (
		<Animated.View
			style={[styles.container, style]}
			entering={FadeInUp.duration(500)}
		>
			<Text style={styles.content}>{title}</Text>
		</Animated.View>
	);
};

export default PlaceTag;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
	},
	content: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '300',
	},
});
