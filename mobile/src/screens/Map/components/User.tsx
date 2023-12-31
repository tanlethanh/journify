import type { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';
import { MapPin } from 'lucide-react-native';

import type { Location } from '../types';

type Props = {
	imageUrl: string;
	location: Location;
};

export const User: FC<Props> = ({ imageUrl, location }) => {
	return (
		<Marker coordinate={location}>
			<Image style={styles.image} source={{ uri: imageUrl }} />
			<View style={styles.iconContainer}>
				<MapPin fill="#3478F6" color="#FFFFFF" />
			</View>
		</Marker>
	);
};

export default User;

const styles = StyleSheet.create({
	image: {
		height: 40,
		width: 40,
		borderRadius: 20,
		borderWidth: 2,
		borderColor: '#24B24C',
	},
	iconContainer: {
		position: 'absolute',
		right: -4,
		bottom: -4,
	},
});
