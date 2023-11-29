import type { FC } from 'react';
import type { ViewStyle } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

interface Props {
	style?: ViewStyle;
}

export const SamplePost: FC<Props> = ({ style }) => {
	return (
		<Animated.View
			style={[styles.container, style]}
			entering={FadeInUp.delay(300).duration(500)}
		>
			<View style={styles.headContainer}>
				<Image
					style={styles.avatarImage}
					source={require('@/assets/images/sample-avt.png')}
				/>

				<View>
					<View style={styles.infoContainer}>
						<Text style={styles.nameText}>Tan Le</Text>
						<Image
							style={styles.tickImage}
							source={require('@/assets/images/tick.png')}
						/>
						<Text>@tan_thomasle · 13 Nov</Text>
					</View>
					<Text>312 discovery</Text>
				</View>
			</View>

			<View>
				<Text style={styles.content}>
					I’m really happy for this journey, that’s life!!!
				</Text>
			</View>
		</Animated.View>
	);
};

export default SamplePost;

const styles = StyleSheet.create({
	container: {},
	headContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	avatarImage: {
		height: 70,
		width: 58,
	},
	infoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
		marginBottom: 4,
	},
	nameText: {
		color: '#000000',
		fontWeight: '500',
		fontSize: 18,
	},
	tickImage: {
		height: 16,
		width: 16,
	},
	content: {
		fontSize: 24,
	},
});
