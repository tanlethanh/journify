import { useEffect } from 'react';
import {
	Image,
	Linking,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { signInWithGoogle, useAuth } from '../utils';

const SignIn = () => {
	const { user } = useAuth();
	const navigation = useNavigation();

	const handlePressContact = () => {
		Linking.openURL('https://journify.info');
	};

	const handleSignInWithGoogle = () => {
		signInWithGoogle();
	};

	useEffect(() => {
		if (user) navigation.navigate('MainNavigator' as never);
	}, [user]);

	return (
		<View style={styles.container}>
			<StatusBar
				translucent
				backgroundColor={'transparent'}
				barStyle={'dark-content'}
			/>
			<View style={styles.signInContainer}>
				<Text style={styles.titleText}>Sign In</Text>

				<View style={styles.signOptions}>
					<TouchableOpacity style={styles.signInButton}>
						<Image
							style={styles.logoSize}
							source={require('@/assets/images/facebook_logo.png')}
						/>
						<Text style={styles.signInText}>Sign in with Facebook</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.signInButton}
						onPress={handleSignInWithGoogle}
					>
						<Image
							style={styles.logoSize}
							source={require('@/assets/images/google_logo.png')}
						/>
						<Text style={styles.signInText}>Sign in with Google</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.nameContainer}>
				<Text style={styles.nameText}>Journify</Text>
			</View>

			<View style={styles.helpContainer}>
				<Text style={styles.bottomText}>{"Can't sign in?"}</Text>
				<TouchableOpacity onPress={handlePressContact}>
					<Text style={styles.contactText}>Contact us</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	nameContainer: {
		position: 'absolute',
		top: 140,
		left: 0,
		right: 0,
		alignItems: 'center',
	},
	nameText: {
		fontSize: 24,
		fontFamily: 'OldStandardTT-Bold',
		color: '#000000',
	},
	signInContainer: {
		flex: 1,
		justifyContent: 'center',
		gap: 60,
	},
	titleText: {
		fontSize: 32,
		fontWeight: '700',
		alignSelf: 'center',
		color: '#000000',
	},
	signOptions: {
		gap: 10,
	},
	signInButton: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 32,
		padding: 24,
		borderWidth: 1,
		borderRadius: 50,
		borderColor: '#D1D1D1',
	},
	signInText: {
		color: '#000000',
	},
	logoSize: {
		width: 28,
		height: 28,
	},
	helpContainer: {
		bottom: 20,
		left: 0,
		right: 0,
		flexDirection: 'row',
		gap: 4,
		justifyContent: 'center',
	},
	bottomText: {
		color: '#848484',
	},
	contactText: {
		color: '#1F41F4',
	},
});
