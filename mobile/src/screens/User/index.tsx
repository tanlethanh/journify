import { Image, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { UserIcon } from 'lucide-react-native';

import { Banner } from './components';

import { useAuth } from '@/utils/auth';

export const User = () => {
	const { user } = useAuth();
	const { top } = useSafeAreaInsets();

	return (
		<View style={styles.container}>
			<Banner style={{ paddingTop: top }} />
			<View style={styles.avatarContainer}>
				{user?.photoURL ? (
					<Image style={styles.avatar} source={{ uri: user.photoURL }} />
				) : (
					<UserIcon
						fill="gray"
						width={styles.avatar.width}
						height={styles.avatar.width}
					/>
				)}
			</View>
			<View></View>
		</View>
	);
};

export default User;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	avatarContainer: {
		position: 'absolute',
		padding: 4,
		borderRadius: 42,
		backgroundColor: '#FFFFFF',
		top: 60,
		left: 20,
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},
});
