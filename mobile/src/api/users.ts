import type { AxiosError } from 'axios';

import { Axios } from './axios';

type UserResponse = {
	id: number;
	name: string;
	email: string;
	firebaseUID: string;
	onboarding: boolean;
};

export const getUserByFirebaseUID = async (uid: string) => {
	try {
		const res = await Axios.get('/users', {
			params: {
				firebaseUID: uid,
			},
		});
		return res.data as UserResponse;
	} catch (error) {
		console.log('get user error', (error as AxiosError).response?.data);
	}
};

export const initUser = async () => {
	try {
		const res = await Axios.post('users');
		return res.data as UserResponse;
	} catch (error) {
		console.log('init user error', (error as AxiosError).response?.data);
	}
};

export const onboardUser = async () => {
	try {
		const res = await Axios.put('users', {
			onboarding: true,
		});
		return res.data as UserResponse;
	} catch (error) {
		console.log('onboard user error', error);
	}
};
