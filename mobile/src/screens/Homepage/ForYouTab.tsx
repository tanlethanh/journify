import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CheckInDetail } from '@/components';
import type { RootState } from '@/store';
import { updateVote, vote } from '@/store';
import { usePlaces } from '@/utils/map';

export const ForYou = () => {
	const userState = useSelector((state: RootState) => state.app.user);
	const { checkIns } = usePlaces();
	const dispatch = useDispatch();

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
			<ScrollView
				style={styles.scroll}
				contentContainerStyle={styles.checkInsContainer}
			>
				<View style={styles.line} />

				{checkIns.map((c, i) => {
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
			</ScrollView>
		</View>
	);
};

export default ForYou;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#DC143C',
	},
	scroll: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	checkInsContainer: {
		padding: 10,
		paddingBottom: 40,
	},
	line: {
		backgroundColor: '#D9D9D9',
		height: 1,
		width: '100%',
		marginBottom: 20,
	},
});
