import type { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MoreHorizontalIcon } from 'lucide-react-native';

import type { UserInfo } from '@/types';

type Props = {
	user: UserInfo;
	date: string;
	showOption?: boolean;
};

export const InfoBox: FC<Props> = ({ user, date, showOption = true }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.avatar} source={{ uri: user.image }} />
			<View style={styles.infoContainer}>
				<View style={styles.topInfoContainer}>
					<Text style={styles.name}>{user.name}</Text>
					{user.tick && (
						<Image
							style={styles.tick}
							source={require('@/assets/images/tick.png')}
						/>
					)}
					<Text style={styles.handle}>{`${user.handle} · ${date}`}</Text>
				</View>
				<Text
					style={styles.infoDescription}
				>{`${user.discovery} discovery`}</Text>
			</View>
			{showOption && <MoreHorizontalIcon size={20} color="#646464" />}
		</View>
	);
};

export default InfoBox;

const styles = StyleSheet.create({
	container: {
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
		color: '#000000',
		fontSize: 16,
		fontWeight: '700',
	},
	handle: {
		color: '#5a5959',
	},
	infoDescription: {
		color: '#000000',
		fontSize: 12,
		fontWeight: '300',
	},
});
