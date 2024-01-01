import { type FC } from 'react';
import type { ColorValue, ImageSourcePropType } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

import type { Location } from '../types';

type Props = {
	title?: string;
	image: ImageSourcePropType;
	location: Location;
	tagColor?: ColorValue;
	tagText?: string;
	onPress?: () => void;
};

export const Place: FC<Props> = ({
	title,
	image,
	location,
	tagColor,
	tagText,
	onPress,
}) => {
	return (
		<Marker
			style={styles.container}
			coordinate={location}
			onPress={onPress}
			tracksViewChanges={false}
		>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={image} />
			</View>
			{tagText && (
				<View
					style={[
						styles.tagContainer,
						tagColor ? { backgroundColor: tagColor } : undefined,
					]}
				>
					<Text style={styles.tag}>{tagText}</Text>
				</View>
			)}
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{title || 'Unknown'}</Text>
			</View>
		</Marker>
	);
};

export default Place;

const styles = StyleSheet.create({
	container: { paddingRight: 14 },
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
		right: 0,
		top: 4,
		backgroundColor: '#24B24C',
	},
	tag: {
		fontSize: 12,
		color: '#FFFFFF',
	},
	titleContainer: {
		position: 'absolute',
		top: 60,
		left: -14,
		width: 80,
	},
	title: {
		fontSize: 14,
		fontWeight: '800',
		color: '#383737',
		textAlign: 'center',
	},
});
