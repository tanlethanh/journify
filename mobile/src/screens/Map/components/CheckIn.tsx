import type { FC } from 'react';
import type { ViewProps } from 'react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { PlaceData } from '../types';
import { inspectCheckInCount } from '../utils';

type Props = ViewProps & {
	place: PlaceData;
};

export const CheckIn: FC<Props> = ({ style, place, ...props }) => {
	const { value } = inspectCheckInCount(place);

	return (
		<View style={[styles.container, style]} {...props}>
			<Image style={styles.banner} source={{ uri: place.imageUrl }} />
			<View style={styles.textContainer}>
				<Text style={styles.nameText}>{place.name}</Text>
				<Text>{`· ${place.handle}`}</Text>
				<Text>{`· ${value} check-in`}</Text>
			</View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Check-in</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CheckIn;

const styles = StyleSheet.create({
	container: {
		gap: 10,
	},
	banner: {
		height: 120,
		borderRadius: 10,
	},
	textContainer: {
		position: 'absolute',
		backgroundColor: '#FFFFFFBF',
		top: 20,
		left: 20,
		padding: 10,
		paddingVertical: 6,
		borderRadius: 16,
		flexDirection: 'row',
		gap: 4,
	},
	nameText: {
		fontWeight: '600',
	},
	button: {
		backgroundColor: '#24B24C',
		borderRadius: 8,
		padding: 18,
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 14,
		fontWeight: '800',
		color: '#FFFFFF',
	},
});
