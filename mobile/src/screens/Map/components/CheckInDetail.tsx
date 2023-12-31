import type { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MoreHorizontalIcon } from 'lucide-react-native';

import type { CheckInData } from '../types';

import {
	CommentIcon,
	LikeIcon,
	TrendUpIcon,
	UnlikeIcon,
} from '@/components/icons';

type Props = {
	checkIn: CheckInData;
};

export const CheckInDetail: FC<Props> = ({ checkIn }) => {
	return (
		<View style={styles.container}>
			<View style={styles.topBar}>
				<Image style={styles.avatar} source={{ uri: checkIn.user.image }} />
				<View style={styles.infoContainer}>
					<View style={styles.topInfoContainer}>
						<Text style={styles.name}>{checkIn.user.name}</Text>
						{checkIn.user.tick && (
							<Image
								style={styles.tick}
								source={require('@/assets/images/tick.png')}
							/>
						)}
						<Text
							style={styles.handle}
						>{`${checkIn.user.handle} · ${checkIn.date}`}</Text>
					</View>
					<Text
						style={styles.infoDescription}
					>{`${checkIn.user.discovery} discovery`}</Text>
				</View>
				<MoreHorizontalIcon size={20} color="#646464" />
			</View>

			<View style={styles.contentContainer}>
				<View style={styles.verticalLine} />
				<View style={styles.mainContentContainer}>
					<Text style={styles.caption}>{checkIn.caption}</Text>
					<View style={styles.actionsContainer}>
						<View style={styles.action}>
							<LikeIcon size={20} stroke={'#646464'} />
							<Text style={styles.actionTitle}>{`${checkIn.upvote} up`}</Text>
						</View>
						<View style={styles.action}>
							<UnlikeIcon size={20} stroke={'#646464'} />
							<Text
								style={styles.actionTitle}
							>{`${checkIn.downvote} down`}</Text>
						</View>
						<View style={styles.action}>
							<CommentIcon size={20} stroke={'#646464'} />
							<Text
								style={styles.actionTitle}
							>{`${checkIn.replyCount} reply`}</Text>
						</View>
						<View style={styles.action}>
							<TrendUpIcon size={20} stroke={'#646464'} />
							<Text style={styles.actionTitle}>{checkIn.impressions}</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default CheckInDetail;

const styles = StyleSheet.create({
	container: {},
	topBar: {
		flexDirection: 'row',
		gap: 4,
	},
	avatar: {
		width: 42,
		height: 42,
		borderRadius: 24,
	},
	infoContainer: {
		flex: 1,
		justifyContent: 'center',
		gap: 2,
	},
	topInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
	},
	tick: {
		width: 16,
		height: 16,
	},
	name: {
		fontSize: 16,
		fontWeight: '700',
	},
	handle: {
		color: '#5a5959',
	},
	infoDescription: {
		fontSize: 12,
		fontWeight: '300',
	},
	contentContainer: {
		flexDirection: 'row',
		gap: 25,
		marginVertical: 8,
		marginLeft: 18,
		marginRight: 10,
	},
	verticalLine: {
		width: 2.4,
		borderRadius: 1.2,
		height: '100%',
		backgroundColor: '#a9a9a9',
		marginVertical: 4,
	},
	mainContentContainer: {
		flex: 1,
	},
	caption: {
		fontSize: 15,
		lineHeight: 22,
		fontWeight: '300',
	},
	actionsContainer: {
		flexDirection: 'row',
		marginTop: 12,
		justifyContent: 'space-between',
	},
	action: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	actionTitle: {
		fontSize: 10,
		color: '#5a5959',
		fontWeight: '300',
	},
});
