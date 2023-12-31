import type { FC } from 'react';
import type { ColorValue, ImageSourcePropType } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

import type { Location } from '../utils';

type Props = {
	image: ImageSourcePropType;
	location: Location;
	tagColor?: ColorValue;
	title?: string;
};

export const Place: FC<Props> = ({ image, location, tagColor, title }) => {
	title = title || 'Unknown';

	return (
		<Marker coordinate={location}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={image} />
			</View>
			<View
				style={[
					styles.tagContainer,
					tagColor ? { backgroundColor: tagColor } : undefined,
				]}
			>
				<Text style={styles.tag}>10k</Text>
			</View>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{title}</Text>
			</View>
		</Marker>
	);
};

export default Place;

const styles = StyleSheet.create({
	imageContainer: {
		backgroundColor: '#FFFFFF',
		padding: 4,
		borderRadius: 26,
		borderBottomLeftRadius: 4,
		shadowOffset: {
			height: 4,
			width: -2,
		},
		shadowOpacity: 0.4,
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 24,
	},
	tagContainer: {
		paddingHorizontal: 6,
		paddingVertical: 2,
		borderRadius: 10,
		position: 'absolute',
		right: -8,
		top: 4,
		backgroundColor: '#24B24C',
	},
	tag: {
		fontSize: 12,
		color: '#FFFFFF',
	},
	titleContainer: {
		position: 'absolute',
		bottom: -20,
		left: -14,
		width: 100,
	},
	title: {
		fontSize: 14,
		fontWeight: '800',
		color: '#5A5A5A',
	},
});
