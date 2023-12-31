import type { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { CheckInData, PlaceData } from '../types';

type Props = {
	place: PlaceData;
	checkIns: CheckInData[];
};

export const PlaceDetail: FC<Props> = ({ place, checkIns }) => {
	console.log(place, checkIns, styles);
	return (
		<View>
			<Text>PlaceDetail</Text>
		</View>
	);
};

export default PlaceDetail;

const styles = StyleSheet.create({});
