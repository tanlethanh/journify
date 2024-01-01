import type { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
	BottomSheetScrollView,
	useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { ChevronLeftIcon } from 'lucide-react-native';

import type { CheckInData, PlaceData } from '../types';
import { inspectCheckInCount } from '../utils';

import CheckInDetail from './CheckInDetail';

type Props = {
	place: PlaceData;
	checkIns: CheckInData[];
};

export const PlaceDetail: FC<Props> = ({ place, checkIns }) => {
	const { value } = inspectCheckInCount(place);
	const { dismiss } = useBottomSheetModal();

	return (
		<View style={styles.container}>
			<Image style={styles.banner} source={{ uri: place.imageUrl }} />
			<View style={styles.topBarContainer}>
				<TouchableOpacity onPress={dismiss as never}>
					<ChevronLeftIcon color="#F3F3F3" />
				</TouchableOpacity>
				<View style={styles.titleContainer}>
					<Text style={[styles.whiteText, styles.nameText]}>{place.name}</Text>
					<Text style={styles.whiteText}>{`· ${place.handle}`}</Text>
					<Text style={styles.whiteText}>{`· ${value} check-in`}</Text>
				</View>
			</View>
			<BottomSheetScrollView
				style={styles.scroll}
				contentContainerStyle={styles.checkInsContainer}
			>
				{checkIns.map((c, i) => {
					return <CheckInDetail key={c.id} checkIn={c} showImage={i > 0} />;
				})}
			</BottomSheetScrollView>
		</View>
	);
};

export default PlaceDetail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	banner: {
		height: 200,
	},
	topBarContainer: {
		position: 'absolute',
		top: 10,
		left: 0,
		right: 0,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 4,
		paddingRight: 10,
		gap: 14,
	},
	titleContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#0A0E1DAF',
		borderRadius: 30,
		padding: 10,
		paddingHorizontal: 14,
		borderWidth: 0.4,
		borderColor: '#FFFFFF',
		gap: 6,
	},
	nameText: {
		fontWeight: '800',
	},
	whiteText: {
		color: '#FFFFFF',
	},
	scroll: {
		flex: 1,
	},
	checkInsContainer: {
		padding: 10,
		paddingBottom: 40,
	},
});
