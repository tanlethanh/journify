import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { UserIcon } from 'lucide-react-native';

import { Banner } from './Banner';

import { logOut, useAuth } from '@/utils/auth';

export const User = () => {
	const { user } = useAuth();
	const { top } = useSafeAreaInsets();
	const navigation = useNavigation();

	const handleLogout = async () => {
		await logOut();
		navigation.navigate('SignIn' as never);
	};

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
			<View style={styles.contentContainer}>
				<TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
					<Text style={styles.logoutText}>Logout</Text>
				</TouchableOpacity>
			</View>
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
	contentContainer: {
		padding: 10,
	},
	logoutButton: {
		alignSelf: 'flex-end',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		backgroundColor: '#24B24C',
	},
	logoutText: {
		fontWeight: '500',
		color: '#FFFFFF',
	},
});
