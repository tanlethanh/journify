import type { FC } from 'react';
import type { ViewProps } from 'react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { PlaceData } from '@/types';
import { inspectCheckInCount } from '@/utils/map';

type Props = ViewProps & {
	place: PlaceData;
	onPressPlace?: (place: PlaceData) => void;
	onPressCheckIn?: () => void;
};

export const CheckIn: FC<Props> = ({
	style,
	place,
	onPressPlace,
	onPressCheckIn,
	...props
}) => {
	const { value } = inspectCheckInCount(place);
	const handlePressPlace = () => onPressPlace?.(place);

	return (
		<View style={[styles.container, style]} {...props}>
			<TouchableOpacity onPress={handlePressPlace}>
				<Image style={styles.banner} source={{ uri: place.imageUrl }} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.textContainer} onPress={handlePressPlace}>
				<Text style={[styles.blackText, styles.nameText]}>{place.name}</Text>
				<Text style={styles.blackText}>{`· ${place.handle}`}</Text>
				<Text style={styles.blackText}>{`· ${value} check-in`}</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={onPressCheckIn}>
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
	blackText: {
		color: '#000000',
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
