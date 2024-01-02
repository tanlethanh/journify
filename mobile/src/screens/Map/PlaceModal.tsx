import { type FC, useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import {
	BottomSheetScrollView,
	useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { ChevronLeftIcon } from 'lucide-react-native';

import { CheckInDetail } from '@/components';
import type { RootState } from '@/store';
import { updateVote, vote } from '@/store';
import type { PlaceData } from '@/types';
import { inspectCheckInCount, usePlaces } from '@/utils/map';
import { showModal } from '@/utils/modal';

export const showDetailPlaceModal = (place: PlaceData) => {
	showModal({
		id: `place-detail-${place.id}`,
		index: 1,
		snapPoints: ['50%', '94%'],
		handleStyle: { padding: 0 },
		Component: () => {
			return <PlaceModal place={place} />;
		},
	});
};

type Props = {
	place: PlaceData;
};

export const PlaceModal: FC<Props> = ({ place }) => {
	const userState = useSelector((state: RootState) => state.app.user);
	const { checkIns } = usePlaces();
	const { value } = inspectCheckInCount(place);
	const { dismiss } = useBottomSheetModal();
	const dispatch = useDispatch();

	const currentCheckIns = useMemo(() => {
		return checkIns.filter((c) => c.placeId === place.id);
	}, [place, userState.votes]);

	const handleVoteCheckIn = (id: string, type: 'up' | 'down') => {
		dispatch(vote({ id, vote: type }));

		const latestVote = userState.votes[id];
		if (!latestVote) {
			dispatch(updateVote({ checkInId: id, amount: 1, type }));
		} else if (type != latestVote) {
			if (type === 'up') {
				dispatch(updateVote({ checkInId: id, amount: 1, type: 'up' }));
				dispatch(updateVote({ checkInId: id, amount: -1, type: 'down' }));
			} else {
				dispatch(updateVote({ checkInId: id, amount: 1, type: 'down' }));
				dispatch(updateVote({ checkInId: id, amount: -1, type: 'up' }));
			}
		} else {
			dispatch(updateVote({ checkInId: id, amount: -1, type }));
		}
	};

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
				{currentCheckIns.map((c, i) => {
					const handleUpvote = () => handleVoteCheckIn(c.id, 'up');
					const handleDownvote = () => handleVoteCheckIn(c.id, 'down');
					return (
						<CheckInDetail
							key={c.id}
							checkIn={c}
							showImage={i > 0}
							voted={userState.votes[c.id]}
							onUpvotePress={handleUpvote}
							onDownvotePress={handleDownvote}
						/>
					);
				})}
			</BottomSheetScrollView>
		</View>
	);
};

export default PlaceModal;

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
