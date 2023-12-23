import { useEffect, useState } from 'react';
import Config from 'react-native-config';
import auth from '@react-native-firebase/auth';
import type { User } from '@react-native-google-signin/google-signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
	webClientId: Config.WEB_CLIENT_ID,
});

export const signInWithGoogle = async () => {
	await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
	const { idToken } = await GoogleSignin.signIn();

	const googleCredential = auth.GoogleAuthProvider.credential(idToken);

	return auth().signInWithCredential(googleCredential);
};

export const useAuth = () => {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged((user) => {
			if (user) setUser(user as never);
			if (initializing) setInitializing(false);
		});

		return subscriber;
	}, []);

	return { initializing, user };
};
