import { useEffect, useState } from 'react';
import Config from 'react-native-config';
import auth, { firebase } from '@react-native-firebase/auth';
import type { User } from '@react-native-google-signin/google-signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { resetAppState, resetMapState, store } from '../store';

GoogleSignin.configure({
	webClientId: Config.WEB_CLIENT_ID,
});

export const signInWithGoogle = async () => {
	try {
		await GoogleSignin.hasPlayServices();
		const { idToken } = await GoogleSignin.signIn();

		const googleCredential = auth.GoogleAuthProvider.credential(idToken);

		return auth().signInWithCredential(googleCredential);
	} catch (e) {
		console.log('sign in error', e);
	}
};

type WrappedUser = User & {
	displayName: string;
	photoURL: string;
	uid: string;
};

export const useAuth = () => {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState<WrappedUser>();

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(async (user) => {
			// console.log(user, '<--');
			// console.log(await user?.getIdToken(true), '<-- token id');
			if (user) {
				setUser(user as never);
			}

			if (initializing) setInitializing(false);
		});

		return subscriber;
	}, []);

	return { initializing, user };
};

export const getUser = (): WrappedUser | null => {
	return firebase.auth().currentUser as never;
};

export const logOut = async () => {
	await auth().signOut();
	store.dispatch(resetAppState());
	store.dispatch(resetMapState());
};
