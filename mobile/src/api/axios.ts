import Config from 'react-native-config';
import { firebase } from '@react-native-firebase/auth';
import axios from 'axios';

export const Axios = axios.create();

Axios.interceptors.request.use(async (config) => {
	config.baseURL = Config.JOURNIFY_API_ENDPOINT;
	const idToken = await firebase.auth().currentUser?.getIdToken(true);
	config.headers['authorization'] = 'Bearer ' + idToken;

	return config;
});
