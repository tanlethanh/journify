import type { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
	title: string;
};

export const EmptyScreen: FC<Props> = ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Image
				style={styles.image}
				source={require('@/assets/images/pugpug.png')}
			/>
			<Text style={styles.description}>Nothing here yet</Text>
			<Text style={styles.description}>
				Follow for more exciting updates and recommendations.
			</Text>
			<Text style={styles.description}>
				Your next adventure is just a follow away!
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20,
		paddingHorizontal: 40,
	},
	image: {
		width: 100,
		height: 100,
	},
	title: {
		color: '#000000',
		fontSize: 16,
		fontWeight: '700',
	},
	description: {
		color: '#000000',
		textAlign: 'center',
	},
});
