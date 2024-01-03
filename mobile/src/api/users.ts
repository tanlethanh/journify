import { Axios } from './axios';

type UserResponse = {
	id: number;
	name: string;
	email: string;
	firebaseUID: string;
	onboarding: boolean;
};

export const getUser = async () => {
	try {
		const res = await Axios.get('users');
		return res.data as UserResponse;
	} catch (error) {
		console.log('get user error', error);
	}
};

export const initUser = async () => {
	try {
		const res = await Axios.post('users');
		return res.data as UserResponse;
	} catch (error) {
		console.log('init user error', error);
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
