import type { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import InfoBox from './InfoBox';

import {
	CommentIcon,
	LikeIcon,
	SolidLikeIcon,
	SolidUnlikeIcon,
	TrendUpIcon,
	UnlikeIcon,
} from '@/components/icons';
import type { CheckInData } from '@/types';

type Props = {
	checkIn: CheckInData;
	showImage?: boolean;
	voted?: 'up' | 'down';
	onUpvotePress?: () => void;
	onDownvotePress?: () => void;
};

export const CheckInDetail: FC<Props> = ({
	checkIn,
	showImage,
	voted,
	onUpvotePress,
	onDownvotePress,
}) => {
	return (
		<View style={styles.container}>
			<InfoBox user={checkIn.user} date={checkIn.date} />

			<View style={styles.contentContainer}>
				<View style={styles.verticalLine} />
				<View style={styles.mainContentContainer}>
					<Text style={styles.caption}>{checkIn.caption}</Text>

					{showImage && (
						<Image style={styles.image} source={{ uri: checkIn.imageUrl }} />
					)}

					<View style={styles.actionsContainer}>
						<TouchableOpacity style={styles.action} onPress={onUpvotePress}>
							{voted === 'up' ? (
								<SolidLikeIcon size={20} fill={'#2e8cff'} />
							) : (
								<LikeIcon size={20} stroke={'#646464'} />
							)}
							<Text style={styles.actionTitle}>{`${checkIn.upvote} up`}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.action} onPress={onDownvotePress}>
							{voted === 'down' ? (
								<SolidUnlikeIcon size={20} fill={'#2e8cff'} />
							) : (
								<UnlikeIcon size={20} stroke={'#646464'} />
							)}
							<Text
								style={styles.actionTitle}
							>{`${checkIn.downvote} down`}</Text>
						</TouchableOpacity>
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

					{checkIn.reply?.map((e, idx) => {
						return (
							<View style={styles.replyContainer} key={idx}>
								<View style={styles.horizontalLine} />
								<InfoBox user={e.user} date={e.date} showOption={false} />
								<Text style={styles.caption}>{e.content}</Text>
							</View>
						);
					})}
				</View>
			</View>
		</View>
	);
};

export default CheckInDetail;

const styles = StyleSheet.create({
	container: {},
	contentContainer: {
		flexDirection: 'row',
		gap: 25,
		marginVertical: 8,
		marginLeft: 18,
		marginRight: 10,
		paddingBottom: 20,
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
		marginBottom: 10,
	},
	caption: {
		color: '#000000',
		fontSize: 15,
		lineHeight: 22,
		fontWeight: '300',
	},
	image: {
		height: 200,
		borderRadius: 10,
		marginTop: 10,
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
	replyContainer: {
		marginTop: 20,
		gap: 6,
	},
	horizontalLine: {
		height: 2.4,
		borderRadius: 1.2,
		backgroundColor: '#a9a9a9',
		position: 'absolute',
		left: -26,
		top: 18,
		width: 20,
	},
});
